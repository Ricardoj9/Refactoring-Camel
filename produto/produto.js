/* === HEADER DA PÁGINA ================================*/
function openMenu() {
    document.body.classList.add('menu-expanded')
    document.getElementById("camada_bloq").style.display = "block"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
    document.getElementById("camada_bloq").style.display = "none"
  }
  
let isOpen = false;
function menu() {
  if(isOpen){
    closeMenu()
    isOpen = false
  } else{
    openMenu()
    isOpen = true
  }
}
  
  /* === MAIN DA PÁGINA ================================*/
  
  var splide = new Splide('#main-carousel', {
    type: 'loop',
    pagination: false
  })
  
  var thumbnails = document.getElementsByClassName('thumbnail')
  var current
  
  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i)
  }
  
  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      splide.go(index)
    })
  }
  
  splide.on('mounted move', function () {
    var thumbnail = thumbnails[splide.index]
  
    if (thumbnail) {
      if (current) {
        current.classList.remove('is-active')
      }
  
      thumbnail.classList.add('is-active')
      current = thumbnail
    }
  })
  
  splide.mount()
  

  // seletor de quantidades.

  var drop = document.getElementsByClassName("drop")[0];
  var dig = document.getElementsByClassName("dig")[0];

  function digitar(){
    if(drop.value == "10+"){
      dig.style.display = "inline";
      drop.style.display = "none";
      dig.value = 10;
    } 
  }

  function selecionar(){
    if(!(dig.value >=10)){
      dig.style.display = "none";
      drop.style.display = "inline";
      drop.value = 9;
    }
  }