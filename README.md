# wordle-solver

Prints the solution to today's [Wordle](https://www.powerlanguage.co.uk/wordle/)
by default. To see another day's solution provide the desired date as a
command-line argument, e.g. `node index.js 2022-01-24`. This accepts any date
format accepted by JavaScript's `Date()` constructor.

When the New York Times acquired Wordle they changed the word list, removing six
words from the sequence. This tool uses the New York Times word list by default,
but you can tell it to use the original word list by including the `-o` or
`--old` flag.

Usage examples:
```
$ yarn start              # Start with yarn.
$ node index.js           # Start with node.
$ yarn start 2022-01-24   # Show the solution for a particular date.
$ yarn start -o           # Show solution using the original word list.
```
