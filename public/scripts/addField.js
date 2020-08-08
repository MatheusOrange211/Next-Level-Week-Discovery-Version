//procurar o botão, poe um ouvidor de eventos, que será executado qundo clicar e realizará a função passada

document.querySelector("#add-time").addEventListener('click',clonefield)


//Executar uma ação
function clonefield(){
    //clonenode vai duplicar os elementos HTML da class  schedule-item
    //duplicar os campos
    const newFieldContainer =document.querySelector(".schedule-item").cloneNode(true)

    //limpar campos das horas
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada field, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpar ele
        field.value= ""
    })
        //Aonde ele deve aparecer?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    
}

    //colocar na pagina