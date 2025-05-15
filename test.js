function addOne(n) {
  if (typeof n === 'number') {
    return ++n;
  } else if (isNaN(Number(n))) {
    return 0;
  } else {
    let tempNumber = Number(n);
    return ++tempNumber;
  }
}
console.log(addOne('12313'))
console.log('我也改一下')
console.log(addOne('12313sdas'))
