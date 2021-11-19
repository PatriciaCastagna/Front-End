import { service } from "../services/index.js"
import { view } from "../view/index.js"
import { ListaClienteComponente } from "./lista-Clientes.js"

    export const updateComponent = (idParametro) => {

        const label = [];
        view.getSpinner();
        setTimeout(() => {
        

        service.getVeiculo().then((dados) => {

        dados.forEach(element => {
            if (element.label != null){
                label.push(element.label)

            }
            
         });

    })
        view.getUpdate()

    service.getVeiculo().then((dados) => {
        dados.forEach(element => {

            if(element.id == idParametro){
                console.log(element)

                adicionaParametroNoInput(element)

            }

            
            
        });



    })

    const formulario = document.getElementById("formulario")
            formulario.addEventListener('submit', function (event) {
                event.preventDefault()

    const clientUpdate = {

                model: document.getElementById('name').value,
                label: document.getElementById('modelo').value,
                type: document.getElementById('tipo').value,
                owner: document.getElementById('placa').value,
                observation: document.getElementById('obs').value


        }

        if(label.includes(clientUpdate.label)){

            return alert ('Essa placa ja existe')

        }else{

            service.putVeiculo(clientUpdate, idParametro).then(()=> {
                cancelar(); 
                ListaClienteComponente();
        
        
            })

        }

            })

            const cancelar = document.getElementById("cancelar");
            cancelar.addEventListener('click', (event) => {
            event.preventDefault();
            formulario.reset();
            ListaClienteComponent();
        })

            


        }, 600)
    }

    const adicionaParametroNoInput = (objeto) => {

            document.getElementById('name').value = objeto.owner
            document.getElementById('modelo').value = objeto.model
            document.getElementById('tipo').value = objeto.type
            document.getElementById('placa').value = objeto.label
            document.getElementById('obs').value = objeto.observation


    } 

    
  