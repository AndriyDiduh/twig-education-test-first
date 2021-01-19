/**
 * This code test was completed by Andriy Diduh < andriy.work@yahoo.com >.
 *
 * @param {(number | (string | number)[])[]} inputArray - an array of the following format [[1, 2, 3, 4, 5], 3].
 */

// Group array elements
const groupArrayElements = (inputArray) => {
  // Get the array, it should be the first element
  const originalArray = inputArray[0];

  // For easy use we specify the Original Array length in a constant
  const originalArrayLength = originalArray.length;

  // Get the "numberOfPieces" for number of pieces, should be the second element
  let numberOfPieces = inputArray[1];

  // Check for correct data, Integers only
  numberOfPieces =
    Number.isInteger &&
    typeof numberOfPieces === "number" &&
    isFinite(numberOfPieces) &&
    Math.floor(numberOfPieces) === numberOfPieces
      ? numberOfPieces
      : 0;

  // Limit the number of pieces to the max length of the array
  numberOfPieces =
    originalArrayLength < numberOfPieces ? originalArrayLength : numberOfPieces;

  // Resulted array
  const newGropedArray = [];

  // First, get the number of items for each piece (for each sub array)
  // - Match.floor rounds our number Down, for example 2.8 shall become 2
  const amountForEachPiece = Math.floor(originalArray.length / numberOfPieces);

  // Now we need to take the pieces from the original array and push it to the new one
  // Reverse loops work faster so we will use a while loop, and looks nicer than a for loop
  let loopIndex = numberOfPieces;
  while (loopIndex--) {
    if (loopIndex > 0) {
      // Get the chucks of the originalArray and push to newGropedArray
      newGropedArray.push(originalArray.splice(0, amountForEachPiece));
    } else {
      // Push the rest of the array, the remainder
      newGropedArray.push(originalArray.splice(0, originalArrayLength));
    }
  }

  return newGropedArray;
};

// TO TEST > put your array here and then re-run the script
const inputArray = [
  [4, 6, 3, 4, 37, 7, 8, 3, 8, 0, 9, 3, 49, 6, 46, 45, 6, 4, 56, 5],
  7,
];

// Console log the results
console.log(groupArrayElements(inputArray));
