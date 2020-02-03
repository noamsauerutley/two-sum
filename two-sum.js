
let  bruteForceTwoSum = (array, sum) => {
    let nums = []
    let prevNums = []

    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                if(!!nums.length){ 
                    if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                        prevNums.push(array[x])
                        nums.push([array[x], array[y]])
                        } 
                } else {
                    nums.push([array[x], array[y]])
                    prevNums.push(array[x])
                }
            }
        }
    }
   return nums
}


let binarySearch = (array, target, start=0, end=array.length-1) => {

    let midPoint = ~~(start + (end - start)/2)

    switch(true){
        case array[start] === target:
            return array[start]
        case array[midPoint] === target:
            return array[midPoint]
        case array[end] === target:
            return array[end]
        case end - start === 0:
            return false
        case array[midPoint] > target:
            return binarySearch(array, target, start+1, midPoint-1)
        case array[midPoint] < target:
            return binarySearch(array, target, midPoint+1, end-1)    
    }
    return false
}


let binarySearchTwoSum = (array, sum) => {
    let nums = []
    let prevNums = []
    let sortedArray = array.sort()
    for (let i in sortedArray){
        let addend = binarySearch(sortedArray, sum-sortedArray[i])
        if (!!addend && !prevNums.includes(array[i]) && !prevNums.includes(addend)){
            nums.push([sortedArray[i], addend])
            prevNums.push(addend)
        }
    }
    return nums
}

let hashTwoSum = (array, sum) => {
    let numsObj = {}
    let nums = []
    
    for(let i in array){
        let addend = sum - array[i]
        
        if (addend in numsObj){
            nums.push([addend, array[i]])
        }
        numsObj[array[i]] = i
    }
    return nums
}


