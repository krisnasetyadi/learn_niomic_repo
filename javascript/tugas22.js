
function each(){
    var data = 'saya ingin belajar bersama'
    var splitter = data.split(' ')
    splitter.forEach((item,index)=>{
        console.log("item :",item,"Index ke",index)
    })
}
each()