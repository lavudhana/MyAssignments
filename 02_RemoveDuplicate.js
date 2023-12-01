
function removeDuplicates(Array1) {
    // Use a Set to store unique elements while preserving order
    const uniqueSet = new Set();

    // Use Array.filter to create a new array with unique elements
    const resultArray = Array1.filter((element) => {
        if (!uniqueSet.has(element)) {
            uniqueSet.add(element);
            return true;
        }
        return false;
    });

    return resultArray;
}


const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
const resultArray = removeDuplicates(inputArray);


console.log(resultArray); 


