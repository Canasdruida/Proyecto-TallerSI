const express = require('express')
const app = express()
const port = 3000

// Aq
const productos = [
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/productos/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Caja AMONG US",
        precio: 12000,
        imagen: "imgnew/productos/caja amongus.png",
        stock: 30,
        descripcion: "100 cajas, precio efectivo",
        tipo: "caja"
    },
    {
        id:1,
        name: "Papel antigrasa",
        precio: 7000,
        imagen: "imgnew/productos/papel antigrasa.png",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Caja Spiderman",
        precio: 13000,
        imagen: "imgnew/productos/caja spiderman.png",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Funda vasos",
        precio: 9000,
        imagen: "imgnew/productos/fundas para vasos.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Autoarmables",
        precio: 7000,
        imagen: "imgnew/productos/autoarmables.png",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Caja Generica",
        precio: 7000,
        imagen: "imgnew/productos/caja generica.jpg",
        stock: 30,
        descripcion: "calendario"
    }
    
]

app.get('/api/productos', (req, res) => {
  res.send(productos)
});

app.use('/',express.static("front"));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})