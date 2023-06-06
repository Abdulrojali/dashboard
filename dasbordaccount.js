let bars=document.querySelector('.bars')
bars.addEventListener('click',handlerBars)
function handlerBars(){
    document.querySelector('.navigasiContainer').classList.toggle('active')
}