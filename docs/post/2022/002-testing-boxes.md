# Testing boxes!

<div class="warning" style='padding:0.1em; background-color:#E9D8FD; color:#69337A'>
   <span>
      <p style='margin-top:1em; text-align:center'>
         <b>On the importance of sentence length</b>
      </p>
      <p style='margin-left:1em;'>
         This sentence has five words. Here are five more words.
      </p>
      <p style='margin-bottom:1em; margin-right:1em; text-align:right; font-family:Georgia'>
        <b>- Gary Provost</b>
        <i>(100 Ways to Improve Your Writing, 1985)</i>
      </p>
   </span>
</div>

---

<div class="warning" style='background-color:#E9D8FD; color: #69337A; border-left: solid #805AD5 4px; border-radius: 4px; padding:0.7em;'>
   <span>
      <p style='margin-top:1em; text-align:center'>
         <b>On the importance of sentence length</b>
      </p>
      <p style='margin-left:1em;'>
         This sentence has five words. Here are five more words.
      </p>
      <p style='margin-bottom:1em; margin-right:1em; text-align:right; font-family:Georgia'>
        <b>- Gary Provost</b>
        <i>(100 Ways to Improve Your Writing, 1985)</i>
      </p>
   </span>
</div>

---

| Very Long Title |  |
| --- | --- |
| `NOTE` | This is something I want you to notice. It has a lot of text, and I want that text to wrap within a cell to the right of the `NOTE`, instead of under it. |

---

**`permalink`**

**`baselevel`**

---

| Field | Description | Optional | Default |
| --- | --- | --- | --- |
| manual_entry_indicator | no: is not is allow manual entry <br /> yes: is manual entry enabled | yes | no |
| amounts | json object containing all transaction amounts <br /> <br /> <table> <tr> <td> Subfield </td> <td> Description </td> <td> Optional </td> <td> Default </td> </tr> <tr> <td> tip </td> <td> transaction tip amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> total </td> <td> equal to Base Amount + Base amount for Reduced State Tax + City Tax + State Tax + Reduced State Tax + Tip or Cash back </td> <td> no </td> <td> NA </td> </tr> <tr> <td> cashback </td> <td> cash back amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> state_tax </td> <td> State tax amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> city_tax </td> <td> City tax amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> reduced_tax </td> <td> Reduced state tax amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> base_reduced_tax </td> <td> Reduced state tax base amount </td> <td> yes </td> <td> NA </td> </tr> </table> | no | NA |
