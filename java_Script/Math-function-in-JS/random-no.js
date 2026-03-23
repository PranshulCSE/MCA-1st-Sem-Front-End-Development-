// Formula is
//   math.random()*(max-min+1)+min
// in simple
// math.random*(total no. of outcome)+shift
// example we want to generate a no. b/w 20-30
console.log((Math.floor(Math.random()*(11))+20));
// Similarly if we want to generate outcome of dice i.e 1-6
console.log((Math.floor(Math.random()*6)+1));
// Lets understand this one 
// first math.floor generate a random no b/w 0 & 1 say 0.5678
// then we are multiplying it with no. of outcome say 6 so min:0*6=0 and max : .999*6=5.54somewhat
// 0.5678*6=3.4068
//it,s floor will be 3 and +1 will give 4;
// we are adding 1 just because if it give 0 then value should become 1


// Let's Generate a 4 Digit Otp
console.log(Math.floor(Math.random()*(9999-1000)+1)+1000);