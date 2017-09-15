# FRONT-END DEVELOPER CODING TEST

## Getting Started
- $ yarn (or npm) install
- Open in Browser index.html

## Built With
- HTML5, CSS3, JavaScript ES5, AngularJS 1, Yarn.

## Notes
- I believe I've completed all of "base-mode" of the code assessment. I commented
a bit more than usual, but felt it was appropriate for the circumstance.
- I took a crack at the Bonus, but didn't quite land it and wanted to send this in
sooner than later. My attempts were:
  - $timeout in a recursive function,
  - $interval:
  ```
  vm.timer = function() {
    $interval(vm.displaySorted, 500);
  };//end timer function
  ```
  - calling vm.timer after displaySorted() was executed.
  - I also tried reloading the page with `$window.location.reload()`, but couldn't
  get the timing right.

- Regarding styling, I chose to use a little flexbox for a simple grid with a small amount
of margin added for extra spacing.
