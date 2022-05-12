// jadi kalo bentuk variabelnya belum array reversenya gamau jalan 
// jadio kita rubah dulu dari string ke array pake split
// baru kita masukin reverse 
// tapi kalo datanya udah array bisa langsung return ke reverse
// terus pake join biar balik lagi jadi string 
function balik(){
    var a = 'javascripts'
    return a.split('').reverse().join('')
}

console.log(balik())