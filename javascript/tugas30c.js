// kalo fizzbuzz hasilnya kan nurun kebawah 
// kalo ini kita masukin ke variabel

function numbers(value){
    var data = ''
    for(var i =1; i<value;i++){
        if(i%3===0) {
            data += 'NIO '
        } else if(i%5===0){
            data += 'MIC '
        }else{
            data += i+' '
        }

    }
    return data
    
}
console.log(numbers(50))