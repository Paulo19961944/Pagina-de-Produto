const bodyElement = window.document.body // Captura o Elemento Body
const abrirMenuMobile = document.getElementById('abrirMenuMobile')
const fecharMenuMobile = document.getElementById('fecharMenuMobile')
const menu = document.getElementById('menu')
abrirMenuMobile.addEventListener('click', abrirMenu) // Adiciona evento no Botão de Abrir Menu
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona evento no Botão de Fechar Menu

//Função para Abrir o Menu
function abrirMenu(){
    bodyElement.classList.add('responsive-body') // Trava o elemento do Body em 100%
    abrirMenuMobile.classList.add('abrir-responsive') // Esconde o Botão de Abrir Menu
    fecharMenuMobile.classList.add('fechar-responsive') // Esconde o Botão de Fechar Menu
    menu.classList.add('menu-responsive') // Aparece o Menu
}

// Função de Fechar Menu
function fecharMenu(){
    bodyElement.classList.remove('responsive-body') // Trava o elemento do Body em 100%
    abrirMenuMobile.classList.remove('abrir-responsive') // Esconde o Botão de Abrir Menu
    fecharMenuMobile.classList.remove('fechar-responsive') // Esconde o Botão de Fechar Menu
    menu.classList.remove('menu-responsive') // Aparece o Menu
}