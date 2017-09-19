angular
  .module('myApp', [])
  .controller('ShapesController', function ($interval, $window) {
  //variable global to controller
  var vm = this;
  //empty array to push all 100 shapes to
  vm.shapesToDisplay = [];

  //function to create a circle object that can be created with any desired radius
  function circleObject (radius) {
    //set local type property
    this.type = "circle";
    this.radius = radius;
    //has a ‘getArea’ method that returns the area of the circle
    this.getArea = function () {
      return Math.PI * this.radius * this.radius;
    };//end getArea method
    //has a 'toString' method that returns the following: Circle: Radius = X, Area = Y, (where X and Y are the radius and the area of the circle)
    this.toString = function () {
      return "Circle: Radius = " + this.radius + ", Area = " + vm.getArea();
    };//end toString method
    // console.log(this);//logs out instance of circle object with varying radius and getArea()/toString() methods
  };//end circleObject

  //function to create a square object that can be created with any length of sides
  function squareObject (sideLength) {
    //set local type property
    this.type = "square";
    this.sideLength = sideLength;
    //has a 'getArea' method that returns the area of the square and
    this.getArea = function () {
      return this.sideLength * this.sideLength;
    };//end getArea method
    //has a 'toString' method that returns the following: Square: Size = X, Area = Y, (where X and Y are the side length and area of the square) 
    this.toString = function () {
      return "Square: Size = " + this.sideLength + ", Area = " + vm.getArea();
    };//end toString method
    // console.log(this);//logs out square object with varying side length and getArea()/toString() methods
  };//end squareObject

  //method that accepts array of Circles and Squares, and returns the array
  //sorted by area, in descending order.
  function sortingFunc (circSqArray) {
    //method to compare areas for sorting
    function compareAreas (a, b) {
      return b.getArea() - a.getArea();
    };
    //sort through compared areas and return new array
    return circSqArray.sort(compareAreas);
  };//end sortingFunc

  //method that generates array of 50 squares of varying side length between 1 and 100,
  //and 50 circles of varying diameter between 1 and 100. The sizes of each shape should be randomly generated.
  function generateFunc (total) {
    //empty shapes array to push randomly generated sizes
    var shapesArray = [];
    for(i = 0; i < total; i++) {
      var size = Math.floor((Math.random() * 100) + 1);
      shapesArray.push(new squareObject(size));
      shapesArray.push(new circleObject(size/2));
    }
    return shapesArray;
  };//end generateFunc

  //display the sorted list of shapes: Squares should be drawn with a red background  
  //Circles should be drawn with a blue background  
  //Each time the page is loaded, a new set of shapes should be generated
  vm.displaySorted = function() {
    //calls generateFunc and pass total of 50 shapes
    var allShapes = generateFunc(50);
    //calls sortingFunc with argument of all shapes
    var sortedShapes = sortingFunc(allShapes);
    for(i = 0; i < sortedShapes.length; i++) {
      var shape = sortedShapes[i]
      if(shape.type === "square") {
        vm.shapesToDisplay.push(sortedShapes[i]);
      }
      if(shape.type === "circle") {
        vm.shapesToDisplay.push(sortedShapes[i]);
      }
    }
    // $window.location.reload()
  };//end vm.displaySorted

  // vm.timer = function () {
  //   return $interval(vm.displaySorted, 500)
  // }//end vm.timer

}); //end ShapesController
