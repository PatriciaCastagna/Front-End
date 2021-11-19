import { service } from "../services/index.js"
import { view } from "../view/index.js"

    
 export const CadastroComponent = () => {
     
    view.getSpinner();

    setTimeout(() => {
        const label = []

    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if (element.label != null){
                label.push(element.label)

            }
            
        });

    })


        view.getCadastroHtml();
   

        const formulario = document.getElementById("formulario")
        formulario.addEventListener('submit', function(event) {
            event.preventDefault()

            const cadastroCliente = {

                model: document.getElementById('name').value,
                label: document.getElementById('modelo').value,
                type: document.getElementById('tipo').value,
                owner: document.getElementById('placa').value,
                observation: document.getElementById('obs').value


            }

            if(label.includes(cadastroCliente.label)){

                return alert ('Essa placa ja existe')

            }else{

                service.postVeiculo(cadastroCliente)

            }

        })
         const cancelar = document.getElementById("cancelar");
         cancelar.addEventListener('click', (event) => {
            event.preventDefault();
            formulario.reset();

        })

    }, 600)

}

