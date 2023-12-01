function intersection(nums1, nums2) {
    // Create sets from the input arrays to store unique elements
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Initialize an empty array to store the intersection result
    const result = [];
    
    // Iterate over the elements in the first set
    for (const num of set1) {
        // Check if the element exists in the second set
        if (set2.has(num)) {
            // If yes, add it to the result array
            result.push(num);
        }
    }

    // Return the final result array
    return result;
}


const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersection(nums1, nums2);

// Log the result to the console
console.log(result);
