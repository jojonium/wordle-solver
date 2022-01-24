# wordle-solver

Prints the solution to today's [https://www.powerlanguage.co.uk/wordle/](Wordle)
by default. To see another day's solution provide the desired date as a
command-line argument, e.g. `node index.js 2022-01-24`. This accepts any date
format accepted by JavaScript's `Date()` constructor.

Usage examples:
```
$ yarn start              # Start with yarn.
$ node index.js           # Start with node.
$ yarn start 2022-01-24   # Show the solution for a particular date.
```
