
//1.
for (let i = 0; i <= 20; i++) {
		if([i] % 2 === 0) {
			console.log([i]+ "is even");
		} else {
			console.log([i]+ "is odd");
		}

};

//2.
const bagOfBeans = 50;

for (i = 100; i >= 0; i--) {
 if(i % 2 === 0){
   console.log(i + bagOfBeans)
 } else { 
   console.log(" ")
 }
};

//3. 
const drink = [];
const food = [];
const sauces = [];
const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 
'sausage', 'coca cola', 'lemonade','dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
 if()

//4.

const myNewArray = []
const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts',
 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos",
  "Death blow", "Firestorm", "48", 30]

for (var i = 0; i < mixedArray.length; i++) {
    if (Number.isInteger(i)) myNewArray.push(i);
    console.log(myNewArray);
};


