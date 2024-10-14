let htmlstring;
/*let data  =
  [
    {
        "nombre": "Miau",
        "imagen": "https://ejemplo.com/imagen1.jpg",
        "toques": 0
    },
    {
        "nombre": "Pelusa",
        "imagen": "https://ejemplo.com/imagen2.jpg",
        "toques": 0
    },
    {
        "nombre": "Gatito",
        "imagen": "https://ejemplo.com/imagen3.jpg",
        "toques": 0
    },
    {
        "nombre": "Nube",
        "imagen": "https://ejemplo.com/imagen4.jpg",
        "toques": 0
    },
    {
        "nombre": "Sombra",
        "imagen": "https://ejemplo.com/imagen5.jpg",
        "toques": 0
    }
];

for(let j=0; j < data.length;j++){

}*/


let cont1 = 0;
    let elem1 = document.getElementById('gato1');
    elem1.addEventListener('click', contador1);

function contador1(){
  cont1++;
  document.getElementById('cont1').innerHTML = cont1;
  
}


let cont2 = 0;
    let elem2 = document.getElementById('gato2');
    elem2.addEventListener('click', contador2);

function contador2(){
  cont2++;
  document.getElementById('cont2').innerHTML = cont2;
  
}
