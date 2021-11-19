
const url = "https://traco-3.herokuapp.com/api"

//"http://localhost:8000/api"



            

    //---------------------POST-------------------

        const postVeiculo = (objetoCliente) => {
        console.log("objetoCliente: ", JSON.stringify(objetoCliente))
        return fetch(url + "/vehicles", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
        
            },
            body: JSON.stringify(objetoCliente)
        
        }).then((response) => {
            if(response.status != 200){
                console.log(`erro no servidor: ${response.status}`)
        
            }else{
                alert(`sucesso ao salvar: ${response.status}`)
            }


        })


        }

        const postCheckin = (label) => {
            
            return fetch(url + "/activities/checkin", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
            
                },
                body: JSON.stringify({label})
            
            }).then((response) => {
                if(response.status != 200){
                    console.log(`erro no servidor: ${response.status}`)
            
                }else {
                    return response.json()
                }
    
    
            })
    
    
            }
    







    //---------------------get-------------------

    const getVeiculo = () => {
    return fetch(url + "/vehicles" )
    .then((response) => {
        if(response.status != 200){
            console.log(`erro no servidor: ${response.status}`)
    
        }else{
            return response.json()
        }


})


    } 

    const getActivities = () => {

        return fetch(url + "/activities" )
    .then((response) => {
        if(response.status != 200){
            console.log(`erro no servidor: ${response.status}`)
    
        }else {
            return response.json()
        }


})


    }


    //---------------------put-------------------


    const putVeiculo = (objetoCliente, id) => {

        console.log("objetoCliente: ", JSON.stringify(objetoCliente))
        return fetch(`${url}/vehicles/${id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
        
            },
            body: JSON.stringify(objetoCliente)
        
        }).then((response) => {
            if(response.status != 200){
                console.log(`erro no servidor: ${response.status}`)
        
            }else{
                return response.json()
            }


        })


        }
    //--------------export---------------------
    const deletaVeiculo = (id) => {

        return fetch(`${url}/vehicles/${id}`, {
            method: "DELETE",
           
        
        }).then((response) => {
            if(response.status != 200){
                console.log(`erro no servidor: ${response.status}`)
        
            }else{
                return response.json()
            }

        })
    }    






    
    //--------------export---------------------

export const service = {
    postVeiculo,
    getVeiculo,
    putVeiculo,
    deletaVeiculo,
    getActivities,
    postCheckin

}    





