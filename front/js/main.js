
let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    
}
function displayProducts(productList) {
    let productsHTML = '';
    productList.forEach(element => {
        productsHTML +=
        `<div class="card">
        <img src="${element.imagen}" alt="${element.name}" style="width:100%">
        <h1>${element.name}</h1>
        <p>$${element.precio}</p>
        <p><button onclick="addcart('${element.name}','${element.precio}')" id="botoncarrito" >Añadir al carrito</button></p>
        </div>`
    });
    document.getElementById('page-content').innerHTML = productsHTML;
}

window.onload = async()=>{
	const productos = await(await fetch("/api/productos")).json();
	console.log(productos);
	displayProducts(productos);
} 	

// array que almacena los productos seleccionados 
const carrito = []

//funcion que suma cantidad 

function sumarcarrito(name){
    for (i = 0; i < carrito.length; i++) {
        if(name==carrito[i][0]){
            carrito[i][2] = carrito[i][2] + 1;
            };
        };
    console.log(carrito);
}

//funcion que añade al carrito 

function addcart(name,precio){
    let aceptar = true;
    if(carrito.length>0){
        for (i = 0; i < carrito.length; i++) {
            if(name==carrito[i][0]){
                aceptar = false; 
                };
            };
        if(aceptar==false){
            sumarcarrito(name);
        }else {
            let productoadd = [];
            productoadd.push(name,precio,1);
            carrito.push(productoadd);
            console.log(carrito);
        };
    }
    if(carrito.length==0){
        let productoadd = [];
        productoadd.push(name,precio,1);
        carrito.push(productoadd);
        console.log(carrito);
    };   
}





// script del menu responsive Abrir el menu
var btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', function (e) {
    e.preventDefault()
    let mySidenav = document.getElementById("mySidenav")
    mySidenav.classList.toggle("openOffCanvas")
})

// script del menu responsive sticky menu

var nav = document.getElementById('mySidenav')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add('nav-fixed')
    } else {
        nav.classList.remove('nav-fixed')
    }
})
 // script del menu responsive effecto accordeon
var submenu = document.getElementsByClassName('link-submenu')

for (var i = 0; i < submenu.length; i++) {
    submenu[i].onclick = function () {
        var content = this.nextElementSibling

        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
        }

    }
}

// script del slider de producto
let activeImg = 0
function slider(n) {
    let images = document.getElementsByClassName("slider-item")

    for (i = 0; i < images.length; i++) {

        if (images[i].className.includes("active")) {
            images[i].className = images[i].className.replace("active", "")

            break
        }
    }

    activeImg = n
    images[n].className += " active"
}

function next() {
    activeImg++
    if (activeImg > 2) {
        activeImg = 0
    }
    slider(activeImg)
}

function previus() {
    activeImg--
    if (activeImg < 0) {
        activeImg = 2
    }
    slider(activeImg)
}



