function encuentraTienda(){
    //array con ciudades en donde hay tiendas
    const ciudades=['santiago','buenos aires','asuncion','montevideo','bogota','lima','caracas','quito'];
    //Preguntar al usuario
    ciudadUser=prompt('En que ciudad vives?');
    apto=aptoFuncti(ciudadUser.toLowerCase());
    //Esta funcion usa indexOf para recorrer el array en busca de lo que el usuario escribio
    function aptoFuncti(x){
        if(ciudades.indexOf(x) !== -1){  
            return x=true;
        }   
        else{  
            return x=false;
        } 
    }
    //Dependiendo si la ciudad esta o no en el array, el proceso sigue o no.
    if (apto){
        alert('Este simulador esta en tu ciudad, seguiremos con el proceso');
    }else{
        alert('No estamos en tu ciudad');
    }
    //Voy a construir un objeto con todo lo que tengo del usuario
    class construirObjeto{
        constructor(x,y){
            this.Ciudad=x;
            this.Apto=y;
        }
    }
    const objetoUsuario=new construirObjeto(ciudadUser,apto);
    console.log(objetoUsuario)
    //Voy a construir un objeto con lo extraido del HTML
    class construirCiudades{
        constructor(x){
            this.Ciudad=x;
        }
    }
    //Obtengo ciudades desde el HTML
    let ciudadesActivas=document.getElementsByClassName("ciudades");
    for (let i=0;i<ciudadesActivas.length; i++){
        const objetoCiudades=new construirCiudades(ciudadesActivas[i]);
        console.log(objetoCiudades)
    }
    //Crer elementos en HTML
    let div=document.createElement("div");
    div.innerHTML=`<p>${objetoUsuario.Ciudad}</p>`;
    div.innerHTML+=`<p>${objetoUsuario.Apto}</p>`;
    document.body.appendChild(div);
}
//La idea que tengo es recolectar la data del usuario y despues mostrar un mapa de google con las tiendas en su ciudad. Para hacer esto tengo pensado que con las coordenadas de cada tienda en un array y por medio de la API de maps se grafiquen. Puede ser un array por ciudad. Yo tengo experiencia trabajando la API de maps en el curso de data science y creo que lo podria lograr aqui