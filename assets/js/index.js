/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
/***************************************/
//DADOS DO ESTABELECIMENTO
const estabelecimento = 'Guilherme Nestor'
const telefone = '00000000000'
const instagram = ''
/***************************************/
const telefoneFormatado = `(`+telefone.substring(0, 2)+`) `+telefone.substring(2, 7)+`-`+telefone.substring(7)+``
const iFoodLink = 'https://www.ifood.com.br/'
const whatsLink = 'https://wa.me/55' + telefone
const instaLink = 'https://www.instagram.com/' + instagram
const msgPedido = 'Olá, gostaria de pedir um'
//Função de rolagem menu superior
document.addEventListener('DOMContentLoaded', function(){
  const mainHome = document.getElementById('mainHome')
  const mainPromocoes = document.getElementById('mainPromocoes')
  const mainContato = document.getElementById('mainContato')
  const mainSobre = document.getElementById('mainSobre')

  const idHome = document.getElementById('home')
  const idPromocoes = document.getElementById('promocoes')
  const idContato = document.getElementById('contato')
  const idSobre = document.getElementById('sobre')
  idHome.addEventListener('click', function(){
    const targetPosition = mainHome.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idPromocoes.addEventListener('click', function(){
    const targetPosition = mainPromocoes.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idContato.addEventListener('click', function(){
    const targetPosition = mainContato.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idSobre.addEventListener('click', function(){
    const targetPosition = mainSobre.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })

  const idHome2 = document.getElementById('home2')
  const idPromocoes2 = document.getElementById('promocoes2')
  const idContato2 = document.getElementById('contato2')
  const idSobre2 = document.getElementById('sobre2')
  idHome2.addEventListener('click', function(){
    const targetPosition = mainHome.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idPromocoes2.addEventListener('click', function(){
    const targetPosition = mainPromocoes.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idContato2.addEventListener('click', function(){
    const targetPosition = mainContato.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idSobre2.addEventListener('click', function(){
    const targetPosition = mainSobre.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
})
//Menu bar superior
const botaoMenu = document.querySelector('.threeBar')
const botaoMenuX = document.querySelector('.xBar')
const dropdownMenu = document.querySelector('.menu2Header')
botaoMenu.addEventListener('click', function(){
  dropdownMenu.classList.remove('menu2HeaderNone')
  botaoMenu.classList.add('displayNone')
  botaoMenuX.classList.remove('displayNone')
})
botaoMenuX.addEventListener('click', function(){
  dropdownMenu.classList.add('menu2HeaderNone')
  botaoMenu.classList.remove('displayNone')
  botaoMenuX.classList.add('displayNone')
})
//Aparecimento texto e imagem página principal
document.addEventListener('DOMContentLoaded', function(){
  var animationStart = document.querySelectorAll('.animationStart')
  animationStart.forEach((div, time) => {
    setTimeout(() => {
      div.classList.add('visible')
    }, time * 250);
  });
})
//Função para abrir PopUp
var popUp = document.querySelector('.popUpPedido')
var fecharPopUp = document.querySelector('.closePopUp')
//Tempo para o PopUp aparecer
setTimeout(() => {
  popUp.classList.remove('popUpPedidoNone')
}, 5000);
//Função para fechar PopUp
fecharPopUp.addEventListener('click', function(){
  popUp.classList.add('popUpPedidoNone')
})
//Promoções
let promocoes = [
  {
    id: 1,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo individual',
    description: '1 baguncinha <br> 1 refrigerante lata <br> 1 batata mini',
    price: 20,
    quantidade: 0
  },
  {
    id: 2,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo da casa',
    description: '1 X-da casa <br> 1 refrigerante lata <br> 1 batata pequena com cheedar',
    price: 20,
    quantidade: 0
  },
  {
    id: 3,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo para dividir',
    description: '2 baguncinha <br> 2 refrigerante lata <br> 1 batata pequena com cheedar',
    price: 20,
    quantidade: 0
  },
  {
    id: 4,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo casal',
    description: '2 X-da casa <br> 1 Coca cola 1,5L <br> 1 batata pequena com cheedar',
    price: 20,
    quantidade: 0
  },
  {
    id: 5,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo pra galera',
    description: '3 baguncinha <br> 1 Coca cola 1,5L <br> 1 batata pequena com cheedar',
    price: 20,
    quantidade: 0
  },
  {
    id: 6,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo pra geral',
    description: '4 baguncinha <br> 1 Coca cola 1,5L <br> 1 batata pequena com cheedar',
    price: 20,
    quantidade: 0
  },
  {
    id: 7,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo amizade',
    description: '5 baguncinha <br> 1 Coca cola 1,5L <br> 1 batata pequena com cheedar',
    price: 20,
    quantidade: 0
  },
  {
    id: 8,
    image: 'burger_sandwich_PNG4135.png',
    name: 'Combo Miague Tradicional',
    description: '3 baguncinha <br> 1 porção grande de calabresa acebolada <br> 1 porção grande de batata com cheddar e bacon',
    price: 20,
    quantidade: 0
  }
]
function promocao(){
  const cards = document.getElementById('cards')

  promocoes.forEach(value => {
    cards.innerHTML += `
      <a href="https://wa.me/55`+telefone+`?text=Olá, `+msgPedido+` `+value.name+`" class="cardPromotion observerNone" target="_blank">
        <img src="assets/images/`+value.image+`" alt="">
        <div class="sombraImgCardPromotion"></div>
        <h2>`+value.name+`</h2>
        <div class="descricao">`+value.description+`</div>
        <strong>R$`+value.price+`,00</strong>
        <p>Peça Já!</p>
      </a>
    `
  });
}
promocao()
//função para shadow Header (Cabeçalho)
var shadowHeader = document.querySelector('#header')
window.addEventListener('scroll', function(){
  if (window.scrollY > 64) {
    shadowHeader.classList.add('headerShadow')
  } else {
    shadowHeader.classList.remove('headerShadow')
  }
})
//Observar menu activeLink
//Observar Home
const textHome = document.querySelector('.textHome')
const menuHome = document.getElementById('home')
const menuHome2 = document.getElementById('home2')
const observerMainHome = new IntersectionObserver((value) =>{
  value.forEach(element => {
    if (element.isIntersecting) {
      menuHome.classList.add('activeLink')
      menuHome2.classList.add('activeLink')
    }else{
      menuHome.classList.remove('activeLink')
      menuHome2.classList.remove('activeLink')
    }
  });
})
observerMainHome.observe(textHome)

const mainPromocoes = document.getElementById('mainPromocoes')
const menuPromocoes = document.getElementById('promocoes')
const menuPromocoes2 = document.getElementById('promocoes2')
const observerMainPromocoes = new IntersectionObserver((value) =>{
  value.forEach(element => {
    if (element.isIntersecting) {
      menuPromocoes.classList.add('activeLink')
      menuPromocoes2.classList.add('activeLink')
    }else{
      menuPromocoes.classList.remove('activeLink')
      menuPromocoes2.classList.remove('activeLink')
    }
  });
})
observerMainPromocoes.observe(mainPromocoes)
//Observar Contato
const mainContato = document.getElementById('mainContato')
const menuContato = document.getElementById('contato')
const menuContato2 = document.getElementById('contato2')
const observerContato = new IntersectionObserver((value) => {
  value.forEach(element => {
    if (element.isIntersecting) {
      menuContato.classList.add('activeLink')
      menuContato2.classList.add('activeLink')
    }else{
      menuContato.classList.remove('activeLink')
      menuContato2.classList.remove('activeLink')
    }
  });
})
observerContato.observe(mainContato)
//Observar Sobre
const mainSobre = document.getElementById('mainSobre')
const idSobre = document.getElementById('sobre')
const idSobre2 = document.getElementById('sobre2')
const observerSobre = new IntersectionObserver((value) => {
  value.forEach(element => {
    if(element.isIntersecting) {
      idSobre.classList.add('activeLink')
      idSobre2.classList.add('activeLink')
    }else{
      idSobre.classList.remove('activeLink')
      idSobre2.classList.remove('activeLink')
    }
  });
})
observerSobre.observe(mainSobre)
//Observar título promoções
const title = document.querySelector('.titlePromocoes')
const observerTitle = new IntersectionObserver((value) => {
  value.forEach(element => {
    if(element.isIntersecting) {
      title.classList.remove('observerNone')
    }
  });
})
observerTitle.observe(title)
//Observar promoções
const promotions = document.querySelectorAll('.cardPromotion')
const observerPromotions = new IntersectionObserver((value) => {
  value.forEach(element => {
    if (element.isIntersecting) {
      element.target.classList.remove('observerNone')
    }
  });
})
promotions.forEach(element => {
  observerPromotions.observe(element)
})
//Adicionando links do site
document.addEventListener('DOMContentLoaded', function(){
  //WhatsApp
  var linkWhats = document.querySelectorAll('#WhatsLink')
  linkWhats.forEach(element => {
    element.href = whatsLink
    element.target = '_blank'
  });
  //iFood
  var linkIfood = document.querySelectorAll('#iFoodLink')
  linkIfood.forEach(element => {
    element.href = iFoodLink
    element.target = '_blank'
  });
  //Instagram
  var linkInsta = document.querySelectorAll('#InstaLink')
  linkInsta.forEach(element => {
    element.href = instaLink
    element.target = '_blank'
  });
})
//Telefone
const fone = document.getElementById('fone')
fone.textContent = telefoneFormatado

//Footer estabelecimento
const nome = document.getElementById('estabelecimento')
nome.textContent = estabelecimento
