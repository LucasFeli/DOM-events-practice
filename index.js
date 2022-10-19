const boton1 = () =>{
    const element= document.querySelector('#container').innerHTML = 'Hello world';
    
}

const boton2 = () =>{
    const element= document.querySelector('#container')
    const imagen= document.createElement('IMG');
    imagen.setAttribute('src','wraith.webp');
    imagen.setAttribute('width','304');
    imagen.setAttribute('height','228');
    imagen.setAttribute('alt','Rene Blasey');
    element.appendChild(imagen);
    
}

const boton3 = () =>{
    const element= document.querySelector('#container')
    const boton = document.createElement('BUTTON');
    const textoBoton = document.createTextNode('boton')
    boton.appendChild(textoBoton)
    element.appendChild(boton);
    
}


const boton4 = () =>{
    const borrar = document.getElementById('container')
    borrar.removeChild(borrar.firstChild);
    
}