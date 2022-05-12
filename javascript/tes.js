// var number = 
// console.log(number)
// var result = number.split(' ')
// console.log(result)
function createGroups(arr,numGroups){

    var pergroup = Math.ceil(arr.length/numGroups)
    return new Array(numGroups) 
    .fill('')
    .map((__,i)=> arr.slice(i*pergroup,(i+1)*pergroup))
    
}
var neww = console.log(createGroups([1, 11, 16,  2, 32,
    33, 40, 44, 66,  7,
     9],3))
var numberr = [ [ 1, 11, 16, 2 ], [ 32, 33, 40, 44 ], [ 66, 7, 9 ]].reduceRight((acumulator,currentValue)=>acumulator.concat(currentValue))
console.log(numberr)