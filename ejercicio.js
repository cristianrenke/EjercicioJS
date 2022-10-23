let producto1=1;
let producto2=2;
let producto3=3;
let producto4=4;
let cantidad=0;
let pcantidad1=0;
let pcantidad2=0;
let pcantidad3=0;
let pcantidad4=0;
let precio1=400;
let precio2=300;
let precio3=500;
let precio4=200;
let total=0;
let tot1=0;
let tot2=0;
let tot3=0;
let tot4=0;
let n=parseInt(prompt("ingrese la cantidad de productos a comprar"));
while (cantidad<n){
p= parseInt(prompt("seleccione un producto"));
if(p==producto1){
pcantidad1++;
tot1=pcantidad1*precio1;
}
else if( p==producto2){
pcantidad2++;
tot2=pcantidad2*precio2;
}
else if(p==producto3){
pcantidad3++;
tot3=pcantidad3*precio3;
}
else{
pcantidad4++;
tot4=pcantidad4*precio4;
}
cantidad++;
total=(tot1+tot2+tot3+tot4);
}
console.log(" Usted compro   " + pcantidad1 +  "  unidad del producto 1");
console.log(" Usted compro   " + pcantidad2  + "  unidad del producto 2");
console.log(" Usted compro   " + pcantidad3  + "  unidad del producto 3");
console.log(" Usted compro   " + pcantidad4  + "  unidad del producto 4");
console.log(" El precio a pagar es    " +  total);


