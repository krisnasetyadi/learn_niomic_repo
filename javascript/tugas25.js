function numberr(){
    var number = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    console.log('Sebelumnya : ',number.join())
    number2 = number.sort()
    console.log('Ascending : ', number2.join())
    var number3 = number2.reverse()
    console.log('Descending : ',number3.join())
    var greater = (x)=>x>10
    var out = number2.filter(greater)
    console.log('Filter > 10 : ',out.join())
}
numberr()