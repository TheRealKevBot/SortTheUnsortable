//  Create a function that, given an array similar to the above, 
//  sorts the array according to the "content of the elements".



function sortIt(arr) {
    return arr.sort()
}

console.log(sortIt([4, 1, 3]), [1, 3, 4])
console.log(sortIt([[4], [1], [3]]), [[1], [3], [4]])
console.log(sortIt([4, [1], 3]), [[1], 3, 4])
console.log(sortIt([[4], 1, [3]]), [1, [3], [4]])
console.log(sortIt([[3], 4, [2], [5], 1, 6]), [1, [2], [3], 4, [5], 6])
console.log(sortIt([[3], 7, [9], [5], 1, 6]), [1, [3], [5], 6, 7, [9]])
console.log(sortIt([[3], 7, [9], [5], 1, 6, [0]]), [[0], 1, [3], [5], 6, 7, [9]])
