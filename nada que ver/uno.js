
function mostrar()
{
	let nombre;
	let tipo;
    let precio;
    let cantidad;
    let categoria;
    let fabricante;
    let acumA = 0;
    let acumI = 0;
    let acumQ = 0;
    let acumDes = 0;
    let acumBac = 0;
    let acumDet = 0;
    let contA = 0;
    let contI = 0;
    let contQ = 0;
	let contDetPrecioMenor = 0;
    let promedioA;
    let promedioI;
    let promedioQ;
    let tipoMayor;
    let precioMasCaro = 0;
    let FabricanteMasCaro;
    let CategoriaMasCaro;
    let flag = 0;

    for (let i = 1; i <= 5; i++){

		nombre = prompt("Ingrese nombre de producto");

      tipo = prompt("Ingrese tipo (ALCOHOL/IAC /QUAT)");
      while (tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT") {
        tipo = prompt("Error. Ingrese tipo (ALCOHOL/IAC/QUAT)");
      }
  
      precio = parseFloat(prompt("Ingrese precio (entre 100 y 300"));
      while (isNaN(precio) || !(precio >= 100 && precio <= 300)) {
        precio = parseFloat(prompt("Error. Ingrese precio (entre 100 y 300"));
      }
      cantidad = parseInt(
        prompt("Ingrese cantidad (no puede superar las 1000 unidades")
      );
      while (isNaN(cantidad) || cantidad <= 0 || cantidad > 1000) {
        cantidad = parseInt(
          prompt("Error. Ingrese cantidad (no puede superar las 1000 unidades")
        );
      }
      categoria = prompt("Ingrese categoria (desinfectante/bactericida/detergente)"
      );
      while (categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente" ) {
        
        }
  
        fabricante = prompt("Ingrese fabricante");

  
        switch (tipo) {
          case "ALCOHOL":
              acumA += cantidad;
              contA++;
            break;
          case "IAC":
              acumI += cantidad;
              contI++;
            break;
          case "QUAT":
              acumQ += cantidad;
              contQ++;
            break;
        }
        switch (categoria) {
            case "desinfectante":
                acumDes += cantidad;
                
                break;
                case "bactericida":
                    acumBac += cantidad;
                
                break;
                case "detergente":
                    acumDet += cantidad;
					if(precio <= 200){
						contDetPrecioMenor += cantidad;
					}
                
                break;
        
            
        }
        if(flag == 0 || precio > precioMasCaro){
            precioMasCaro = precio;
            FabricanteMasCaro = fabricante;
            CategoriaMasCaro = categoria;
            flag = 1;
        }
        


          
   
    }
    
    promedioA = acumA/contA;
    promedioI = acumI/contI;
    promedioQ = acumQ / contQ;

    if(acumDes > acumBac && acumDes > acumDet){
        tipoMayor = "desinfectante";

    }
    else if(acumBac > acumDes && acumBac > acumDet){
        tipoMayor = "bactericida";
    }
    else{
        tipoMayor = "detergente";
    }
    
    //a)
    console.log("Promedio por tipo: ALCOHOL = " + promedioA + 
    " IAC = " + promedioI + " QUAT = " + promedioQ);
    //b)
    console.log("La categoria con mayor cantidades en total es " + tipoMayor);
    //c) 
    console.log("En total hay " + contDetPrecioMenor + " unidades de Iac menor a 200 (inclusive)");
    // d)
    console.log("El productos más caro es " + CategoriaMasCaro + " , su fabricante es " + FabricanteMasCaro + " y su precio es de $ " + precioMasCaro);
}
