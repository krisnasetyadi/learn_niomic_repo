function nestedLoop(value){
    // write your code here
    for(i=0;i<value.length;i++){
        console.log('id :',value[i][0]) //ngambil index 0 dari nested gaperlu pake '.'
        console.log('name :',value[i][1]) // kalo array cukup sebelahan aja
        console.log('company :',value[i][2])
        console.log('\n') //buat ngasih space
    }
}
var nestedArray = [
    [1,'Mark Zuckerberg','Facebook'],
    [2,'Elon Musk','Tesla'],
    [3,'Bill Gates','Microsoft'],
    [4,'Steve Jobs','Apple']
]
nestedLoop(nestedArray)