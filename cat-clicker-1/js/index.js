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


let cont = 0;
    let elem = document.getElementById('gato');
    elem.addEventListener('click', contador);

function contador(){
  cont++;
  document.getElementById('cont').innerHTML = cont;
  
}