/*Ejercicios Basicos JS Nivel 7
    24.Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    25.Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
    26.Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
    */

//Soluciones:

//--------------------------------------------------------------------------------------------

//E24S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 24:")

const arrAscDes = (arr) => {
    
    let acs = [...arr]
    let dsc = [...arr]
    const order = {}

    return console.info({
        acs : acs.sort(function(a, b) {
            return a - b}),
        dsc : dsc.sort(function(a, b) {
            return b - a})
    })
}
arrAscDes([91,20,2,87,5,17,48])

//E24.S2 validation map sort and reverse

const ordenarArreglo = (arr=undefined) =>{
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    for (let num of arr) {
        if(typeof num !== "number") return console.error('El arreglos solo puede contener numeros')
    }

    return console.info({
        arr,
        asc: arr.map(el =>el).sort(),
        desc: arr.map(el =>el).sort().reverse()
    })
}
ordenarArreglo([34,21,52,17,99,18])


//--------------------------------------------------------------------------------------------

//E25S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 25:")

const qutarDuplicados = (arr=undefined) => {
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    if (arr.length===1) return console.error('el arreglo debe tener mas de 1 elemento')

    return console.info({
        original:arr,
        sinDuplicados: arr.filter((value,index,self)=>self.indexOf(value) ===index)
    })
}
qutarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

//E25S2 SET
const quitarDuplicados = (arr=undefined) => {
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    if (arr.length===1) return console.error('el arreglo debe tener mas de 1 elemento')

    return console.info({
        original:arr,
        sinDuplicados: [...new Set(arr)]
    })
}
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

//--------------------------------------------------------------------------------------------

//E26S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 26:")

const arrProm = (arr) => {
    let sum=0
    arr.forEach(element => {
        sum +=element
    });
    console.log(sum/arr.length)
}
arrProm([2,3,4,5,6])

//another solutions validations and more efficient with reduce()

const promedio = (arr=undefined) =>{
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    for (let num of arr) {
        if(typeof num !== "number") return console.error('El arreglos solo puede contener numeros')
    }

    return console.info(
        arr.reduce((total,num,index,arr)=>{
            total +=num
            if(index ===arr.length-1){
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`
            }else {
                return total;
            }
        })
    )
}
promedio([2,3,5,6,7,8,9,10])