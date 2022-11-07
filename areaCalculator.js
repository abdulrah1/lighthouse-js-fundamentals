// In this exercise, we will define 3 functions to calculate the areas of 3 different shapes: rectangles , triangles, circles


const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width; 
}
}
console.log(calculateRectangleArea(10,5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));



const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    return undefined; 
    
  } else {
  return base * (height/2);
}
}
console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));




const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  } else {
  return Math.PI * Math.pow(radius, 2)
}
}
console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));





