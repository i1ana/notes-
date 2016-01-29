//--------UNDERSCORE------ \\

// console.log(_)


//Don't add you're own methods in Underscore

// [1,2,3,4,5].map(function())
// MAP \\
// var array = [7, 13, 11, 21, 42, 1880];

// Chanllenge - create a new arrau where each element is 2* its orginial value 

// var doubleDouble = _.map(array, function(num){
// 	return num * 2;
// })

// 	console.log(array, doubleDouble)


//same as angular.module() calling underscore with _

//anything in square brackets is optional 

//filter



// REDUCE \\

//Start: "Gym Tan Laundry"
// Goal: Is the String  "G.T.L"

// var newJoisy = "Gym Tan Laundry"


// var reduceResult = _.reduce(
// 	newJoisy.split(' '), 
// 	function(acronymSoFar, currentWord) {
// 		//console.log(currentWord)
// 		return acronymSoFar + currentWord[0] + '.'
// 	},
// 	''
// 	)
// console.log(reduceResult)

// FIND \\

//expects a value of true or false 
//great for finding ONE thing that matches your criteria 

var teddyBears = [

	{
		name: 'Steve', 
		fluffiness: 1, 
		diet: 'souls',  
		huggability: 3,
		ownedBySean: true
	},
	{
		name: 'Teddy Ruxspin', 
		fluffiness: 10, 
		diet: 'batteries',  
		huggability: 5,
		ownedBySean: false
	},
	{
		name: 'Ted', 
		fluffiness: 1, 
		diet: 'childrens\' tears',  
		huggability: 7,
		ownedBySean: true
	}, 
	{
		name: 'Hulk', 
		fluffiness: 1, 
		diet: 'batteries',  
		huggability: 7,
		ownedBySean: true
	}
	]
//Find a bear with a huggability of 5 
//Filter would return ALL bears with a huggability of 5
// Syntax of both is the same 

// var huggyBear = _.find(teddyBears, function(bear){
// 	return bear.huggability ===  5
// })

// console.log(huggyBear)

// PLUCK \\ 

// Challenge - use pluck to make an array of dietary needs 
//Designed to work well with arrays of objects 

var pluckyBear = _.pluck(teddyBears, 'diet')
console.log(pluckyBear)

// UNIQ \\ 

//attempts to remove duplicates 

var unique = _.uniq(pluckyBear);
console.log(unique)

//CHAIN \\

// allows us to call multiple methods and pass the value 
//Start with chain and end with value 
//like a waterfall, passes methods down the chain 
// needs to accept an array in order to be chained together 

console.log('Chained List:', _.chain(teddyBears)
	.pluck('diet')
	.uniq() // don't need to specify the array here
	.value()

)


