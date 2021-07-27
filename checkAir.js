const checkAir = function (samples, threshold) {
  // Code here!
  let counter = 0;
  for(let sample of samples){
    if(sample === 'dirty'){
      counter++;
    }
  }

  if((counter / samples.length) < threshold){
    return 'Clean'
  } else {
    return 'Polluted'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))