const boton1 = () =>{
    const element= document.querySelector('#container').innerHTML = 'Hello world';
    
}

const boton2 = () =>{
    const imagen= document.createElement('IMG');
    imagen.setAttribute('src','wraith.webp');
    imagen.setAttribute('width','304');
    imagen.setAttribute('height','228');
    imagen.setAttribute('alt','Rene Blasey');
    document.body.appendChild(imagen);
    
}

const boton3 = () =>{
    const boton = document.createElement('BUTTON');
    const textoBoton = document.createTextNode('boton')
    boton.appendChild(textoBoton)
    document.body.appendChild(boton);
    
}