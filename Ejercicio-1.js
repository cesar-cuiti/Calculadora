//calculadora
var dato1 = prompt("Ingrese el primer numero: ");
var dato2 = prompt("Ingrese el segundo numero: ");
var operacion = prompt(" Indique el tipo de operacion (+,-,/ o x:): ");

var numero1 = parseInt(dato1);
var numero2 = parseInt(dato2);

var resultado =null;
var texto = null;

if (operacion=="+"){resultado=numero1+numero2;
texto = "El resultado es: "+resultado;
}
else if (operacion=="-") {resultado=numero1-numero2;
  texto = "El resultado es: "+resultado;
}
else if (operacion=="*") {resultado=numero1*numero2;
  texto = "El resultado es: "+resultado;
}
else if (operacion=="/") {resultado=numero1/numero2;
  texto = "El resultado es: "+resultado;
}
alert(texto);
console.log(texto);
