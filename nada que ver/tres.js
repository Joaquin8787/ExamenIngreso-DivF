function mostrar() {
  /*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer sque tenga pami mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */

  let seguir;
  let nombre;
  let obrasocial;
  let edad;
  let temperatura;
  let sexo;
  let acumPAMI = 0;
  let acumOSDE = 0;
  let acumOtros = 0;
  let flag = 0;
  let edadmenor = 0;
  let nombreEdadMenor;
  let tempEdadMenor = 0;
  let acumpasajero = 0;
  let preciototal = 0;
  let acumMas60 = 0;
  let Descuento = 0;
  let precioDescuento = 0;


  do {
    nombre = prompt("Ingrese nombre del pasajero");

    obrasocial = prompt("Ingrese obra social (PAMI/ OSDE / otras");
    while (
      obrasocial != "PAMI" &&
      obrasocial != "OSDE" &&
      obrasocial != "otras"
    ) {
      obrasocial = prompt("Error. Ingrese obra social (PAMI/ OSDE / otras");
    }
    edad = parseInt(prompt("Ingrese edad (solo mayores de edad)"));
    while (edad < 17 || isNaN(edad)) {
      edad = parseInt(prompt("Error. Ingrese edad (solo mayores de edad)"));
    }
    temperatura = parseFloat(prompt("Ingrese temperatura del pasajero"));
    while (isNaN(temperatura)) {
      temperatura = parseFloat(
        prompt("Error. Ingrese temperatura del pasajero")
      );
    }
    sexo = prompt("Ingrese sexo de pasajero");
    while (!(sexo == "f" || sexo == "m")) {
      sexo = prompt("Error. Ingrese sexo de pasajero");
    }
    
    acumpasajero++;

    switch (obrasocial) {
      case "PAMI":
        acumPAMI += acumpasajero;

        if(flag = 0 || (edad < edadmenor && sexo == "f" )){
          edadmenor += edad;
          tempEdadMenor += temperatura;
         nombreEdadMenor = nombre;
         flag = 1;
        }


        break;
  
      case "OSDE":
        acumOSDE += acumpasajero;

        if(edad > 60){
          acumMas60++;
        }

        break;
  
      case "otros":
        acumOtros += acumpasajero;
  
        break;
    }

    /*if(flag = 0 || edad < edadmenor && sexo == "f"){
      edadmenor = edad;
      tempEdadMenor = temperatura;
      nombreEdadMenor = nombre;
      flag = 1;
    }*/






    seguir = prompt("¿Quiere ingresar otro pasajero?");
  } while (seguir == "si");

  preciototal += acumpasajero * 600
  Descuento = preciototal * 0.25;
  

  //Informar

  //a)
  console.log("La cantidad de pasajeros con OSDE mayores a 60 son " + acumMas60);

  //b)
  console.log("La mujer más joven con PAMI es " + nombreEdadMenor + " y su temperatura es de " + tempEdadMenor);

  //c)
  console.log("El viaje total sin descuento sale $ " + preciototal);

  //d)
  if((acumPAMI / 2) > acumpasajero / 2){
    
    precioDescuento = preciototal - Descuento; 
    console.log("El precio con descuento de 25% es de " + precioDescuento);
    
  }
}
