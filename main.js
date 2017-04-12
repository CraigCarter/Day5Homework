// function addition(x , y , z){
//  var result = x * y - z;
//  return result;

//};
//console.log(addition(1,2));

//function sentence(name) {
//  return "Hello," + " " + name + "!";
//};
//console.log(sentence("Jennifer"));

//var i;
//for (i = 0; i<15; i++){

//  console.log(i);
//}

//var ray = ["sunshine", "sting", "Steve Erwin"];

//console.log(ray[0], ray[1]);

//ray [3]= "Charles";

//console.log(ray[3]);

//console.log(ray.length);

//for(i=0; i < ray.length; i++){
//  console.log(ray[i]);

//}

//var beer = {

//};

//beer.hops = "cascade";
//beer.color = "gold";

//console.log(beer.hops);

// var zebra = {
//  color: "white and black";
//  eyeColor: "brown";
//  height: 5 + "ft";
//};

//var name = "Briana";

//function people(name){
//  var greeting = "hello";
//  return greeting + " " + name;
//};

//console.log(greeting);

//var elephant = {
//  name: "Elle",
//  age: "6 years old",
//  location: "Wildlife Trust",
//  foods: "tomatoes and corn on the cob",
//  hobbies: "laying in the sun and swimming in the pond",
//};
//console.log(elephant.name + " " + "the elephant is" + " " + elephant.age + " " + "and is currently living in the" + " " + elephant.location + ". " + "She loves to eat" + " " + elephant.foods);


//  1. Log the price
//  2. Log the title
//  3. Log the third tag listed in tags
//  4. Log the image URL.
//  5. Log the first category

/* var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};
console.log(productData.price);
console.log(productData.title);
console.log(productData.tags[2]);
console.log(productData.image.small.url);
console.log(productData.category_path[0]); */

/* Get the sum of two numbers
  function sum (x, y) {
  return x + y;
};
  console.log(sum(1,2));
  console.log(sum(10,20)); */

/*// Find the largest of two numbers
  function max(a, b){
    var largest;
    if (a > b) {
      largest = a;
    } else {
      largest = b;
    }
    return largest;
};
  console.log(max(8,5));
  console.log(max(7,10)); */

//                                   Homework
// Exercise 1

  function addNumbers(numberA, numberB) {
    return numberA + numberB;
  }

  var twoPlusTwo = addNumbers(2, 2);

  console.log(twoPlusTwo); // 4

//Exercise 2
  function yell(statement){
    return statement.toUpperCase();
  }
  console.log(yell("computer"));
  var i = 0;
  while (i < 10) {
  console.log(yell("computer")+ i);
  i++;
};

//Exercise 3
var word1 = "hello";
var word2 = "goodbye";

  function longest(x,y){
    if (x.length < y.length){
      return y
    } else {
      return x
    }
  };

 console.log(longest(word1,word2));


//Exercise 4
  function isVowel(x){
    x = x.toLowerCase();
  if (x == "a" || x == "e" || x == "i" || x == "o"|| x == "u" || x == "y"){
    return true
  } else {
    return false
  }
};
console.log(isVowel("c"));
