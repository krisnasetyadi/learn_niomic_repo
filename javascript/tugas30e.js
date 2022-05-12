// harusnya bisa di maksimalin lagi tapi belum ketemu caranya
// cara ini terlalu panjang harusnya ada cara lebih ringkas
function nestedLoop2(value){
    // write your code
    var data = []
    for(i=0;i<value.length;i++){
     data.push(value[i][0])
        var data2 = []
        for(a=0;a<value.length;a++){
        data2.push(value[a][1])
            var data3 = []
            for(b=0;b<value.length;b++){
            data3.push(value[b][2])
                var data4 = []
                for(c=0;c<value.length;c++){
                data4.push(value[c][3])
                }
            }
        }
    }
    
    console.log(data)
    console.log(data2)
    console.log(data3)
    console.log(data4)
}
var nestedArray=[
    [1,2,3,4],
    ['Mark Zuckerberg','Elon Musk','Bill Gates','Steve Jobs'],
    ['Facebook','Tesla','Microsoft','Apple']
]
nestedLoop2(nestedArray)