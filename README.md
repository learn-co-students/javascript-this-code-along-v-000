JavaScript this Code-Along
---

## Objectives

1. Practice using `this` in JavaScript
2. Explain how to use `call()`
3. Explain how to use `apply()`
4. Explain the difference between `call()` and `apply()`
5. Explain how to use `bind()`

## Introduction

What's a good way to frame this discussion? We might want to talk about building blocks and placeholders, and how we can put different objects into a specific context and use that context there.

For example (going with the sandwich metaphor again), maybe `this` is like the bread used in a sandwich?

A brief refresher on POJOs might be helpful here.

It seems like the most straightforward way to go about this lesson is to walk students through passing different POJOs and arrays to functions using `call()` and `apply()`.

This will lead to a bunch of contrived examples, but I think it's really important for students to get the hang of how `this` works.

The main point is that students need a ton of practice with `call()` and `apply()`

`bind()` is a tricky sibling of `call()` and `apply()` in that it returns a new function. This might trip students up, so it's worth giving them a bit of practice. It's worth introducing in the context of, e.g., `setTimeout()` and `setInterval()` (which students should know about by this point).

## Resources

- [MDN: Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN: Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [MDN: Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
