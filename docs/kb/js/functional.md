# Functional Programming

```uml
Bob->Alice : hello
```

```
const splitName = (name) => name.split('_').join(' ');

const returnNameCapitalized = (name) => name.toUpperCase();

console.log(returnNameCapitalized(splitName('leonardo_maldonado')));
```