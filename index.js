const express = require('express')
const app = express()
const port = 3000

// Aq
const productos = [
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
        stock: 30,
        descripcion: "calendario"
    },
    {
        id:1,
        name: "Calendario 1",
        precio: 50,
        imagen: "imgnew/calendario1.jpg",
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