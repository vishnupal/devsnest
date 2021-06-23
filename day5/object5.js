function cyvol(radius, height) {
  radius = Number(radius);
  height = Number(height);

  if (isNaN(radius) || isNaN(height)) {
    return "Input is not a number";
  }

  if (radius < 0 || height < 0) {
    return "Please input valid radius and ";
  } else {
    return (Math.PI*2*radius*height).toFixed(4)
  }
}
console.log(cyvol(4,5));
