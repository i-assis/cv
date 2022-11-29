!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.ViewBigimg = t());
})(this, function () {
  "use strict";
  function l() {
    var e = !1;
    try {
      addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            e = !0;
          },
        })
      );
    } catch (e) {}
    return e;
  }
  function o(e, t) {
    this.container = e;
    var i = function () {};
    (this.onStart = t.onStart || i),
      (this.onMove = t.onMove || i),
      (this.onEnd = t.onEnd || i),
      (this.onMouseWheel = t.onMouseWheel || i),
      (this.onClick = t.onClick || i),
      (this.onPinch = t.onPinch || i);
  }
  (o.prototype.init = function () {
    var r = this;
    return (
      (this.startHandle = function (e) {
        e.preventDefault();
        var t = e.type,
          i = "touchstart" === t ? "touchmove" : "mousemove",
          n = "touchstart" === t ? "touchend" : "mouseup",
          o = e.clientX || e.touches[0].clientX,
          a = e.clientY || e.touches[0].clientY;
        function s(e) {
          e.preventDefault();
          var t = e.clientX || e.touches[0].clientX,
            i = e.clientY || e.touches[0].clientY;
          r.onMove(e, { dx: t - o, dy: i - a, mx: t, my: i });
        }
        !1 !== r.onStart(e, { x: o, y: a }) &&
          ("touchstart" === t && e.touches[1] && r.onPinch(e),
          document.addEventListener(
            i,
            s,
            !("touchmove" !== i || !l()) && { capture: !1, passive: !1 }
          ),
          document.addEventListener(n, function e() {
            document.removeEventListener(i, s),
              document.removeEventListener(n, e),
              r.onEnd();
          }));
      }),
      this.container.addEventListener("touchstart", this.startHandle, !1),
      this.container.addEventListener("mousedown", this.startHandle, !1),
      this.container.addEventListener("mousewheel", this.onMouseWheel, !1),
      this.container.addEventListener("click", this.onClick, !1),
      this
    );
  }),
    (o.prototype.destroy = function () {
      this.container.removeEventListener("touchstart", this.startHandle),
        this.container.removeEventListener("mousedown", this.startHandle),
        this.container.removeEventListener("mousewheel", this.onMouseWheel),
        this.container.removeEventListener("click", this.onClick);
    });
  var r = function (e) {
    return e.preventDefault();
  };
  function n(e, t) {
    (this.container = e),
      (this.options = Object.assign({}, n.defaults, t)),
      (this.zoomValue = 100),
      e.classList.add("iv-container"),
      (this.imageWrap = e.querySelector(".iv-image-wrap")),
      (this.closeBtn = e.querySelector(".iv-close"));
  }
  return (
    (function () {
      var o = 0;
      if (!window.requestAnimationFrame) {
        for (
          var e = ["ms", "moz", "webkit", "o"], t = 0;
          t < e.length && !window.requestAnimationFrame;
          ++t
        )
          (window.requestAnimationFrame =
            window[e[t] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[e[t] + "CancelAnimationFrame"] ||
              window[e[t] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (e) {
            var t = new Date().getTime(),
              i = Math.max(0, 16 - (t - o)),
              n = window.setTimeout(function () {
                e(t + i);
              }, i);
            return (o = t + i), n;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (e) {
              clearTimeout(e);
            });
      }
    })(),
    (n.prototype = {
      constructor: n,
      _init: function () {
        var t,
          h = this,
          a = h.options,
          c = !1,
          e = h.container,
          i = h.imageWrap,
          s = 0,
          n = 0;
        (h._imageSlider = new o(i, {
          onStart: function () {
            if (!h.loaded) return !1;
            if (!c) {
              (this.imgWidth = (h.imageDim.w * h.zoomValue) / 100),
                (this.imgHeight = (h.imageDim.h * h.zoomValue) / 100),
                (this.curImgLeft = parseFloat(h.currentImg.style.left)),
                (this.curImgTop = parseFloat(h.currentImg.style.top));
            }
          },
          onMove: function (e, t) {
            if (!c) {
              this.currentPos = t;
              var i = this.curImgLeft + t.dx,
                n = this.curImgTop + t.dy,
                o = Math.max((h.containerDim.w - this.imgWidth) / 2, 0),
                a = Math.max((h.containerDim.h - this.imgHeight) / 2, 0),
                s = h.containerDim.w - o,
                r = h.containerDim.h - a;
              (i = Math.min(i, o)),
                (n = Math.min(n, a)),
                i + this.imgWidth < s && (i = s - this.imgWidth),
                n + this.imgHeight < r && (n = r - this.imgHeight),
                (h.currentImg.style.left = i + "px"),
                (h.currentImg.style.top = n + "px");
            }
          },
          onEnd: function () {},
          onMouseWheel: function (e) {
            if (a.zoomOnMouseWheel && h.loaded) {
              var t = Math.max(-1, Math.min(1, e.wheelDelta)),
                i = (h.zoomValue * (100 + 15 * t)) / 100;
              if (
                (100 <= i && i <= a.maxZoom ? (s = 0) : (s += Math.abs(t)),
                !(5 < s))
              ) {
                e.preventDefault();
                var n = e.pageX,
                  o = e.pageY;
                h.zoom(i, { x: n, y: o });
              }
            }
          },
          onClick: function (e) {
            0 == n
              ? ((n = Date.now()), (t = { x: e.pageX, y: e.pageY }))
              : (Date.now() - n < 500 &&
                  Math.abs(e.pageX - t.x) < 50 &&
                  Math.abs(e.pageY - t.y) < 50 &&
                  (h.zoomValue == a.zoomValue ? h.zoom(200) : h.resetZoom()),
                (n = 0));
          },
          onPinch: function (e) {
            if (h.loaded) {
              var t = e.touches[0],
                i = e.touches[1];
              if (t && i) {
                c = !0;
                var a = Math.sqrt(
                    Math.pow(i.pageX - t.pageX, 2) +
                      Math.pow(i.pageY - t.pageY, 2)
                  ),
                  s = h.zoomValue,
                  r = {
                    x: (i.pageX + t.pageX) / 2,
                    y: (i.pageY + t.pageY) / 2,
                  },
                  n = function (e) {
                    e.preventDefault();
                    var t = e.touches[0],
                      i = e.touches[1],
                      n = Math.sqrt(
                        Math.pow(i.pageX - t.pageX, 2) +
                          Math.pow(i.pageY - t.pageY, 2)
                      ),
                      o = s + (n - a) / 2;
                    h.zoom(o, r);
                  };
                document.addEventListener(
                  "touchmove",
                  n,
                  !!l() && { capture: !1, passive: !1 }
                ),
                  document.addEventListener("touchend", function e() {
                    document.removeEventListener("touchmove", n),
                      document.removeEventListener("touchend", e),
                      (c = !1);
                  });
              }
            }
          },
        }).init()),
          a.refreshOnResize &&
            ((this._resizeHandler = this.refresh.bind(this)),
            window.addEventListener("resize", this._resizeHandler)),
          e.addEventListener(
            "touchmove",
            r,
            !!l() && { capture: !1, passive: !1 }
          ),
          e.addEventListener("mousewheel", r),
          (this._close = this.hide.bind(this)),
          this.closeBtn.addEventListener("click", this._close);
      },
      zoom: function (d, v) {
        var p = this,
          e = this.options.maxZoom,
          g = this.zoomValue,
          f = this.currentImg,
          w = this.containerDim,
          y = this.imageDim,
          x = parseFloat(f.style.left),
          M = parseFloat(f.style.top);
        (d = Math.round(Math.max(100, d))),
          (d = Math.min(e, d)),
          (v = v || { x: w.w / 2, y: w.h / 2 }),
          p._clearFrames();
        var z = 0;
        !(function e() {
          ++z < 20 && (p._zoomFrame = requestAnimationFrame(e));
          var t,
            i,
            n =
              ((t = z), (t /= 20), -(d - (i = g)) * (--t * t * t * t - 1) + i),
            o = n / g,
            a = (y.w * n) / 100,
            s = (y.h * n) / 100,
            r = -((v.x - x) * o - v.x),
            h = -((v.y - M) * o - v.y),
            c = Math.max((w.w - a) / 2, 0),
            l = Math.max((w.h - s) / 2, 0),
            m = w.w - c,
            u = w.h - l;
          (r = Math.min(r, c)) + a < m && (r = m - a),
            (h = Math.min(h, l)) + s < u && (h = u - s),
            (f.style.width = a + "px"),
            (f.style.height = s + "px"),
            (f.style.left = r + "px"),
            (f.style.top = h + "px"),
            (p.zoomValue = n);
        })();
      },
      _clearFrames: function () {
        cancelAnimationFrame(this._zoomFrame);
      },
      resetZoom: function () {
        this.zoom(this.options.zoomValue);
      },
      _calculateDimensions: function () {
        var e,
          t,
          i = this.currentImg,
          n = this.container,
          o = i.getBoundingClientRect().width,
          a = i.getBoundingClientRect().height,
          s = n.getBoundingClientRect().width,
          r = n.getBoundingClientRect().height;
        this.containerDim = { w: s, h: r };
        var h = o / a;
        (t = (e = (a < o && s <= r) || s < h * r ? s : h * r) / h),
          (this.imageDim = { w: e, h: t }),
          (i.style.width = e + "px"),
          (i.style.height = t + "px"),
          (i.style.left = (s - e) / 2 + "px"),
          (i.style.top = (r - t) / 2 + "px"),
          (i.style.maxWidth = "none"),
          (i.style.maxHeight = "none");
      },
      refresh: function () {
        this.loaded && (this._calculateDimensions(), this.resetZoom());
      },
      show: function (e) {
        (this.container.style.display = "block"), e && this.load(e);
      },
      hide: function () {
        this.container.style.display = "none";
      },
      destroy: function () {
        window.removeEventListener("resize", this._resizeHandler),
          this._imageSlider.destroy(),
          this.closeBtn.removeEventListener("click", this._close),
          this.container.parentNode.removeChild(this.container),
          (this.closeBtn = null),
          (this.container = null),
          (this.imageWrap = null),
          (this.options = null),
          (this._close = null),
          (this._imageSlider = null),
          (this._resizeHandler = null);
      },
      load: function (e) {
        var t = this,
          i = this.container,
          n = this.imageWrap,
          o = n.querySelector(".iv-large-image");
        o && n.removeChild(o);
        var a,
          s = document.createElement("img");
        function r() {
          (t.loaded = !0),
            (t.zoomValue = 100),
            (s.style.display = "block"),
            t.refresh(),
            (i.querySelector(".iv-loader").style.display = "none");
        }
        s.classList.add("iv-large-image"),
          (s.src = e),
          (this.currentImg = s),
          this.imageWrap.appendChild(s),
          (this.loaded = !1),
          (i.querySelector(".iv-loader").style.display = "block"),
          (s.style.display = "none"),
          !(a = s).compvare ||
          (void 0 !== a.naturalWidth && 0 === a.naturalWidth)
            ? (s.onload = function () {
                r();
              })
            : r();
      },
    }),
    (n.defaults = {
      zoomValue: 100,
      maxZoom: 500,
      refreshOnResize: !0,
      zoomOnMouseWheel: !0,
    }),
    function (e) {
      var t = document.createElement("div");
      (t.id = "iv-container"),
        (t.innerHTML =
          '<div class="iv-loader"></div><div class="iv-image-view"><div class="iv-image-wrap"></div><div class="iv-close"></div></div>'),
        document.body.appendChild(t);
      var i = new n(t, e);
      return i._init(), i;
    }
  );
});
