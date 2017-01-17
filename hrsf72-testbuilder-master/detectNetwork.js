// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstTwo = cardNumber[0] + cardNumber[1];
  var firstThree = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var firstFour = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var firstSix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5];
  
  var mcPrefix = ['51','52','53','54','55'];
  var diPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65']
  var maePrefix = ['5018', '5020', '5038', '6304'];

  for(var j = 0; j < maePrefix.length; j++){
    for(var k = 12; k < 20; k++){
      if(firstFour === maePrefix[j] && cardNumber.length === k){
        return 'Maestro';
      }
    }
  }

  if(cardNumber.length === 13){
      if(cardNumber[0] === '4'){
        return 'Visa';
      }
  }
  
  if(cardNumber.length === 14){
    if(firstTwo === '38' || firstTwo === '39'){
      return 'Diner\'s Club';
    }
  }
  
  if(cardNumber.length === 15){
    if(firstTwo === '34' || firstTwo === '37'){
      return 'American Express';
    }
  }
  
  if(cardNumber.length === 16){
    if(cardNumber[0] === '4'){
      var swiFix = ['4903', '4905', '4911', '4936'];
      for(var s = 0; s < swiFix.length; s++){
        if(firstFour === swiFix[s]){
          return 'Switch'
        }
        if(s === swiFix.length-1 && firstFour !== swiFix[s] ){
          return 'Visa';
        }
      }
    }
    if(firstSix === '564182' || firstSix === '633110' || firstFour === '6333' || firstFour === '6759'){
      return 'Switch'
    }
    for(var i = 0; i < mcPrefix.length; i++){
      if(firstTwo === mcPrefix[i]){
        return 'MasterCard'
      }
    }
    for(var i = 0; i < diPrefix.length; i++){
      if(firstFour === diPrefix[i] || firstThree === diPrefix[i] || firstTwo === diPrefix[i]){
        return 'Discover';
      }
    }
    for(var c = 622126; c <= 622925; c++){
      if(firstSix === JSON.stringify(c)){
        return 'China UnionPay'
      }
    }
    for(var u = 624;u <= 626;u++){
      if(firstThree === JSON.stringify(u)){
        return 'China UnionPay' 
      }
    }
    for(var p = 6282; p <= 6288; p++){
      if(firstFour === JSON.stringify(p)){
        return 'China UnionPay'
      }
    }
  }
  
  if(cardNumber.length === 17){
    for(var c = 622126; c <= 622925; c++){
      if(firstSix === JSON.stringify(c)){
        return 'China UnionPay'
      }
    }
    for(var u = 624;u <= 626;u++){
      if(firstThree === JSON.stringify(u)){
        return 'China UnionPay' 
      }
    }
    for(var p = 6282; p <= 6288; p++){
      if(firstFour === JSON.stringify(p)){
        return 'China UnionPay'
      }
    }
  }

  if(cardNumber.length === 18){
    var swiFix = ['4903', '4905', '4911', '4936'];
    for(var s = 0; s < swiFix.length; s++){
      if(firstFour === swiFix[s]){
        return 'Switch'
      }
    }
    if(firstSix === '564182' || firstSix === '633110' || firstFour === '6333' || firstFour === '6759'){
      return 'Switch'
    }
    for(var c = 622126; c <= 622925; c++){
      if(firstSix === JSON.stringify(c)){
        return 'China UnionPay'
      }
    }
    for(var u = 624;u <= 626;u++){
      if(firstThree === JSON.stringify(u)){
        return 'China UnionPay' 
      }
    }
    for(var p = 6282; p <= 6288; p++){
      if(firstFour === JSON.stringify(p)){
        return 'China UnionPay'
      }
    }
  }

  if(cardNumber.length === 19){
    if(cardNumber[0] === '4'){
      var swiFix = ['4903', '4905', '4911', '4936'];
      for(var s = 0; s < swiFix.length; s++){
        if(firstFour === swiFix[s]){
          return 'Switch'
        }
        if(s === swiFix.length-1 && firstFour !== swiFix[s] ){
          return 'Visa';
        }
      }
    }
    if(firstSix === '564182' || firstSix === '633110' || firstFour === '6333' || firstFour === '6759'){
      return 'Switch'
    }
    for(var i = 0; i < diPrefix.length; i++){
      if(firstFour === diPrefix[i] || firstThree === diPrefix[i] || firstTwo === diPrefix[i]){
        return 'Discover';
      }
    }
    for(var c = 622126; c <= 622925; c++){
      if(firstSix === JSON.stringify(c)){
        return 'China UnionPay'
      }
    }
    for(var u = 624;u <= 626;u++){
      if(firstThree === JSON.stringify(u)){
        return 'China UnionPay' 
      }
    }
    for(var p = 6282; p <= 6288; p++){
      if(firstFour === JSON.stringify(p)){
        return 'China UnionPay'
      }
    }
  }
};


console.log(detectNetwork('6011567890123456'))
console.log(detectNetwork('6333567890123456789'))

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.