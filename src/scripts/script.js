const bodyElement = window.document.body // Captura o Elemento Body
abrirMenuMobile.addEventListener('click', abrirMenu) // Adiciona evento no Botão de Abrir Menu
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona evento no Botão de Fechar Menu

//Função para Abrir o Menu
function abrirMenu(){
    bodyElement.style.overflow = 'hidden' // Trava o elemento do Body em 100%
    abrirMenuMobile.style.display = 'none' // Esconde o Botão de Abrir Menu
    fecharMenuMobile.style.display = 'flex' // Esconde o Botão de Fechar Menu
    menu.style.display = 'flex' // Flexbox
    menu.style.flexDirection = 'column' // Alinha em Colunas
    menu.style.alignItems = 'center' // Alinha o Eixo Perpendicular ao Centro
    menu.style.justifyContent = 'center' // Alinha o Eixo Principal ao Centro
    menu.style.gap = '48px' // Espaçamento entre os Itens
}

// Função de Fechar Menu
function fecharMenu(){
    window.location.reload() // Recarrega a Página
}