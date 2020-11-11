// Bloco de carregamento do Modal
const modalOverlay = document.querySelector('.modal-overlay')
const cep = document.querySelector('#cep')

// Carregamento do modal assim que a página carregar
window.onload = addActive
function addActive(){
    modalOverlay.classList.add('active')
}

// Desativando o modal, validação temporaria.
document.querySelector('.button-map').addEventListener('click', () =>{
    const cepClear = cep.value.replace("-", "") 
        if(cepClear){
            modalOverlay.classList.remove("active")
        }else{
            alert("informe um cep válido")
        }
})

