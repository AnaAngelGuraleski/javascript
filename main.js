function soma(num1,num2) {
    return  num1+num2;
}
console.log(soma(7,8));
function areaQuadrado(lado) {
    return  lado*lado;
}
console.log(areaQuadrado(7));
let media = function(num4,num5,num6){
    return  (num4+num5+num6)/3;
}
console.log(media(3,4,5));

let num1 = parseInt(prompt('digite valor 1'));
let num2 = parseInt(prompt('digite valor 2'));
let num3 = parseInt(prompt('digite valor 3'));

document.write(media(num1,num2,num3));
