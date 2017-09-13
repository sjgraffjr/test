//loops
const arr = [1,2,3];
for ( let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};
// write a for loop to cyle through 'arr' and print out whether the number is od or even

const arr = [1, 2, 3,]
for (let i = 0; i < arr.length; i++)
	if(arr[i] % 2 === 0) {
		console.log(arr[i]+ "is even");
	} else {
		console.log(arr[i]+ "is odd");
	}






const arr = [1, 2, 3];
for (let i = 0; i < 3; i++) {
	const poppedItem = arr.pop()
console.log(poppedItem + " is leaving the array");
console.log (arr)
}
	

//looping through objects
//for in loop
const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true

};	

for (let temp in turtle) {
		console.log (temp, ' this is temp')
		console.log(turtle[temp])
	}

// write a for in loop for the turtle and on each key value pair
//I want you to add on to it the message Kowabunga

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true

};	

for (let temp in turtle) {
		turtle[temp] += ' Kowabunga'
		console.log(turtle[temp])
	};

	







const bagOfBeans = 50;

for (let i = 50; i <= 100; i++)
	if(bagOfBeans[i] % 2 === 0){
    console.log(bagOfBeans[i] + "add value to Bag of Beans")
	}

	const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 'sausage', 'coca cola',
	 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];

