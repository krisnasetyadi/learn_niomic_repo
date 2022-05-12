// 1. lowerupper
function lower(){
    var p = 'Saya beLajar bahaSa peMrograman deNgan khUsuk.'
    var p2 = 'Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.'
    console.log(p.toLowerCase())
    console.log(p.toUpperCase())
    console.log('-------------------------')
    console.log(p2.toLowerCase())
    console.log(p2.toUpperCase())
}
lower()

//2. Tentukan Kode ASCII
console.log('--------------------')
function ascii(){
    var p3 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    console.log(`${p3.charCodeAt(0)}-${p3.charCodeAt(1)}-${p3.charCodeAt(2)}-${p3.charCodeAt(3)}-${p3.charCodeAt(4)}-${p3.charCodeAt(5)}`)
}
ascii()