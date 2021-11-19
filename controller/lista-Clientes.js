import {view} from "../view/index.js";
import { service } from "../services/index.js";
import { updateComponent } from "./atualiza.js";

export const ListaClienteComponente = () => {
    view.getSpinner();
    setTimeout(()=> {
    view.getListaClientesHtml()

    service.getVeiculo().then((dados) => {
        dados.forEach((element)=> {
            if(element.owner != null && element.label != null){

              criarNovaLinha(element.owner, element.type, element.model, element.label, element.observation, element.id)


            }
            
        })

    })
    const table = document.getElementById('tbody')

    table.addEventListener('click', (event)=> {
        const button = event.path[0].innerText
        const id = event.path[0].id
        
        if(button == 'Editar'){

            updateComponent(id);
        }
        if(button == 'Excluir'){

            deleteComponent(id);

        }
        if(button == 'Novo'){
            
            CadastroComponent();

        }    
        


    })
  

 }, 600)

}


const criarNovaLinha = (cliente, tipo, modelo, placa, observacoes, id) => {

    const table = document.getElementById('tbody')
    const NovaLinha = document.createElement('tr')

    const dadosHtml = ` 

                    <td class="none">${cliente}</td>
                    <td class="none">${tipo}</td>
                    <td>${modelo}</td>
                    <td>${placa}</td>
                    <td class="none">${observacoes}</td>
                    <td>

                        <div class="lista-btn">
                        <a id="${id}" class="btn-link editar">Editar</a> 
                        <a id="${id}" class="btn-link" type="button">Excluir</a>
                        </div>
                    
                    </td

    `

    NovaLinha.innerHTML = dadosHtml;
    return table.appendChild(NovaLinha);


}

const deleteComponent = (id) => {
    service.deletaVeiculo(id).then(()=> {

        ListaClienteComponente();

    })
}
