const getIndex = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
    <section class="index">
      <h1 class="index__item">Bem vindo ao modulo 3 newDev() Traco!</h1>
      <a class="index__link" href="../checkin.html"><img src="../assets/img/traco-principal.png" /></a>
    </section>
    `
  main.innerHTML = dadosHtml
}

const getSpinner = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <section class="container">
      <div id="spinner"></div>
  </section>
    `
  main.innerHTML = dadosHtml

}










const getCadastroHtml = () =>{

    const main = document.getElementById('root')

    const dadosHtml = ` 
        <form id="formulario">
                <h1>Novo Cliente</h1>
                <label>Nome do Cliente</label>
                <input id="name" type="text" placeholder="Digite o seu nome">
                <br/><br/
                <label>Modelo</label>
                <input id="modelo" type="text" placeholder="DigHite o modelo">
                <br/><br/>
                <label>Tipo</label>
                <select id="tipo" type="text">
                    <option value="1">Carro</option>
                    <option value="0">Moto</option>
                </select>
                <br/><br/>
                <label>Placa</label>
                <input id="placa" type="text" placeholder="Digite a placa do veiculo">
                <br/><br/>
                <label>Observações</label>
                <input id="obs" type="text" placeholder="Digite a Observação:">
                <br/><br/>

                <div>
                    <button id="Cancelar" type="button">Cancelar</button>
                    <button id="Salvar" type="submit">Salvar</button>
                </div>
       </form>`

main.innerHTML = dadosHtml;


}

const getListaClientesHtml = () => {

    const main = document.getElementById('root');

    const dadosHtml = ` 
                <section>
                    <h1>Lista de Clientes</h1>
                    <table id="tbody">
                        <tr>
                            <th>Cliente</th>
                            <th>Tipo</th>
                            <th>Modelo</th>
                            <th>Placa</th>
                            <th>Observações</th>
                            <th><a>Novo</a></th>
                        </tr>
                    </table>
                </section>`
   

main.innerHTML = dadosHtml;

}

const getUpdate = () =>{

    const main = document.getElementById('root');

    const dadosHtml = ` 
        <form id="formulario">
                <h1>Editar Cliente</h1>
                <label>Nome do Cliente</label>
                <input id="name" type="text" placeholder="Digite o seu nome">
                <br/><br/
                <label>Modelo</label>
                <input id="modelo" type="text" placeholder="DigHite o modelo">
                <br/><br/>
                <label>Tipo</label>
                <select id="tipo" type="text">
                    <option value="1">Carro</option>
                    <option value="0">Moto</option>
                </select>
                <br/><br/>
                <label>Placa</label>
                <input id="placa" type="text" placeholder="Digite a placa do veiculo">
                <br/><br/>
                <label>Observações</label>
                <input id="obs" type="text" placeholder="Digite a Observação:">
                <br/><br/>

                <div>
                    <button id="Cancelar" type="button">Cancelar</button>
                    <button id="Salvar" type="submit">Atualizar</button>
                </div>
       </form>`

main.innerHTML = dadosHtml


}



const getCheckinHtml = () => {
    const main = document.getElementById('root');
    const dadosHTML = `
      <section class="checkin">
        <h2 class="checkin__title">Lista de Clientes do Estacionamento</h2>
        <br>
        <table id="tbody" class="checkin__table">
          <tr>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Opção</th>
          </tr>
        </table>
  
        <div class="checkin__item">
          <label for="select">Placa</label>
          <select class="checkin__input" id="select"></select>
          <a type="button" id="adicionar-novo" class="checkin__item__link">Adicionar Novo</a>
          <br>
          <div class="class="checkin__button"">
            <button id="checkin" class="btn-link">Check-in</button>
          </div>
        </div>
      </section>
    `
    main.innerHTML = dadosHTML;
  }
  
  const getCheckoutHTML = () => {
    const main = document.getElementById('root');
    const dadosHTML = `
      <section class="checkout">
        <h2 class="checkout__title">Dados do Cliente</h2>
        <br>
        <table class="checkout__table">
          <tr>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Placa</th>
          </tr>
          <tr id="tbody"></tr>
        </table>
  
        <div>
          <label>Total de Horas</label>
          <input 
            id="totalHora"
            class="input"
            type="text"
            placeholder="Total de Horas"
            disabled
          />
        </div>
        <br/>
        <div> 
          <label>Valor a pagar</label>
          <input
            id="valorPagar"
            class="input"
            type="text"
            placeholder="Valor a pagar"
            disabled
          />
        </div>
        <br/>
        <div class="btn">
          <button class="btn-link" id="finalizar">Finalizar</button>
        </div>
      </section>
    `
    main.innerHTML = dadosHTML;
  }
  
  const getBillingHTML = () => {
    const main = document.getElementById('root');
    const dadosHTML = `
    <section>
      <h1>Lista de Faturamento</h1>
      <table class="tabela">
        <thead>
          <tr>
            <th>Qtd. Veículos</th>
            <th>Total</th>
            <th>Dia</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
      <div class="grafico">
        <div id="piechart_3d"></div>
      </div>
    </section>
    `
    main.innerHTML = dadosHTML;
  }

export const view = {
    getListaClientesHtml,
    getCadastroHtml,
    getUpdate,
    getCheckinHtml,
    getCheckoutHTML,
    getBillingHTML,
    getSpinner,
    getIndex


}