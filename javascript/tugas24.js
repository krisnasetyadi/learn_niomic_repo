function numberr(){
    var number = [32,33,16,40,9,7,11,2,44,1,66]
    console.log('Sebelumnya : ',number.join())
    number2 = number.sort()
    console.log('Ascending : ', number2.join())
    var number3 = number2.reverse()
    console.log('Descending : ',number3.join())
}
numberr()