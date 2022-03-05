// let num = Array(1,2,3,4,5,6,7,8,9,10);

// let suma = 0;
// for (let i = 0; i <= 10; i++){
//     if (i > 5){
//         suma = suma + i;
//     }
// }
// console.log(suma)

// // otro ejemplo utilizando Arrays Methods

// let numeros =  Array(1,2,3,4,5,6,7,8,9,10);

// let sumatoria = (numeros.filter(elemntoArray => elemntoArray > 5))
//                 .reduce((sum, elemntoArray) => sum + elemntoArray);

// console.log(sumatoria);

/*3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día */

// let numeroDias = 2;
// let i = 0;

// while(i < numeroDias){

//     let dia = prompt("Digite el dia que desea monitorear: ")
//     let temperaturaMax = parseFloat(prompt("Digite la cantidad maxima: "));
//     let temperaturaMin = parseFloat(prompt("Digite la cantidad minima"));

//     let temperaturaProm = (temperaturaMax + temperaturaMin) / 2;

//     console.log(`La temperatura media de la Luna de Endor en el dia ${dia} es de ${temperaturaProm} grados`);
//     console.log("--------------------------------------------------------------")

//     i++
// }

// 5. PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// nave vendida, menos el 5% de deducciones aplicada solo a las
// comisiones. Codifica un programa que calcule e imprima el
// salario mensual de un vendedor dado;

// let numeroTrabajadores = 2;
// let k = 0;

// while(k < numeroTrabajadores){

//     let nombreTrabajador = prompt("Digite el trabajador a liquidar")
//     let salario = parseFloat(prompt("Digite el salario del trabajador"));
//     let navesVendidas = parseInt(prompt("Digite la cantidad de naves vendidas"));

//     let comision1 = 1500000 * navesVendidas;
//     let deducciones = comision1 * 5 / 100;
//     let comisionTotal = comision1 - deducciones;

//     let salarioMensual = salario + comisionTotal;
//     console.log(`El salario mensual del trabajador ${nombreTrabajador} es de $${salarioMensual}`);
//     console.log("------------------------------------------------------------------------------");

//     k++
// }

// 4. PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo
// de 20 sables de luz y contabilizar la cantidad de sables que
// tienen energías menores a 20 Joules.

let sables =
[
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 18, portador: "York M"},
 {color: "Verde", energia: 10, portador: "Obi Wan"},
 {color: "Rojo", energia: 20, portador: "Juan C"},
 {color: "Azul", energia: 10, portador: "Jhon F"},
 {color: "Rosa", energia: 20, portador: "Luz M"},
 {color: "Purpura", energia: 10, portador: "Paola"},
 {color: "Amarillo", energia: 15, portador: "York M"},
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 20, portador: "York M"},
]

console.log(sables)

let filtradoEnergias = sables.filter(function(sable){
    return(sable.energia < 20)
})
console.log(filtradoEnergias)

filtradoEnergias.forEach(element => {
    element.energia
});
con

sables.forEach(element => {
    let energias = (element.energia < 20)
    console.log(energias)
});


