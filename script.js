// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual arrays that is ordered. 
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function answer(array) {
	let array2 = [...array]; //spread syntax. to copy the array
	array2.sort(compareNumbers); //sorting the array in order
	console.log("array: ", array);
	console.log("array2 (sorted): ", array2);
  let answerArray = order(array2);
	return answerArray;
}

//sorting numbers for the sort function
function compareNumbers(a, b) {
	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
}

function order(array) {
  let arrayB = [...array]; //cloning the original array (so it's unchanged)
	if (arrayB.length <= 1){ //if there's only 1 element or less
		  // console.log('1 element');
		return;
	}
	if (arrayB.length > 1) {
		  // console.log('more than 1 element');
	}	
	let i = 0;
  let newArray = [];
	while (i < arrayB.length) {
    let currentValue = arrayB[i];
    let lastIndexOfCurrent = arrayB.lastIndexOf(currentValue);
      // console.log(`last index of ${currentValue} is ${lastIndexOfCurrent}`);
    let sameCount = lastIndexOfCurrent + 1 - i;
    let subArray = arrayB.splice(i, sameCount);
    // console.log(`subArray of ${currentValue} is ${subArray}`);
    //if there's one element in subarray, the just add it as a value
    if (subArray.length === 1) {
      newArray.push(subArray[0]);
    } else {
      newArray.push(subArray);
    }
      // console.log('newArray: ', newArray);
    i = 0;
  }
  return newArray;
}


let array2 = answer(array);
console.log('answer', array2);


// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]




// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.