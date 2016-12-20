# Sass Errors [![Build Status](https://travis-ci.org/ncoden/sass-errors.svg?branch=chore%2Ftravis)](https://travis-ci.org/ncoden/sass-errors)
✨ Awesome Error Handling in Sass

### Install with NPM
```
npm install ncoden/sass-errors
```

### Usage

Documentation: https://ncoden.github.io/sass-errors/docs

#### Basic Example
```scss
@import 'sass-errors';
@import 'sass-errors-alias'; // se- alias

@function division($number, $divisor) {
  @if $divisor == 0 {
    @return se-throw('Dividor cannot equal to 0.', 'dividor_zero');
  }
  @return $number / $divisor;
}

$ret: division(42, 0); // -> false

$e: se-catch();
@if $e {
  // Display @error 'Dividor cannot equal to 0.'
  $_: se-error($e);
}
```

---

Version 0.3.0 - MIT License.
