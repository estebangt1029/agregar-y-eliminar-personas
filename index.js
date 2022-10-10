class Persona{
    constructor(nombre,apellido,documento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}

class Interfaz{
    anadirpersonas(persona){
        const lista=document.getElementById('personas-list');
        const elemento=document.createElement('div');
        elemento.innerHTML=`
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <p><strong>Nombre</strong>:${persona.nombre}</p> 
                        <p><strong>Apellido</strong>:${persona.apellido}</p> 
                        <p><strong>Documento</strong>:${persona.documento}</p> 
                        <a href="#" class="btn btn-danger" name="eliminar">Eliminar</a>
                    </div>
                </div>`;
        lista.appendChild(elemento)
        this.dejarenblanco()
    }
    dejarenblanco(){
        document.getElementById('personas-form').reset();
    }
    eliminarPersona(elemento){
        if(elemento.name==='eliminar'){
            elemento.parentElement.parentElement.parentElement.remove()
            
        }
    }
    mostrarmensaje(mensaje,tipo){
        const div = document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
        const contenedor =document.querySelector('.container')
        const app=document.getElementById('app')
        contenedor.insertBefore(div, app)
        
        setTimeout(function(){
            document.querySelector('.alert').remove()
            
        },(2000))

    }
}

document.getElementById('personas-form').addEventListener('submit',evento=>{
    evento.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const documento = document.getElementById('documento').value;
    
    if(nombre==='' || apellido==='' || documento===''){
        const interfaz = new Interfaz
        interfaz.mostrarmensaje('campos vacios','warning')
    }else{
        const persona = new Persona(nombre,apellido,documento)
        const interfaz = new Interfaz;
        interfaz.anadirpersonas(persona);
        interfaz.mostrarmensaje('añadido correctamente','success')
        
    }
})

document.getElementById('personas-list').addEventListener('click',evento=>{
    const interfaz = new Interfaz
    interfaz.eliminarPersona(evento.target)
    interfaz.mostrarmensaje('elemento eliminado','danger');
})













