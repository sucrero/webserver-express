'use strict'
const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

//Express HBS enginen
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    // res.send('Hola mundo')
    // let salida = {
    //     nombre: 'Oswaldo',
    //     edad: 35,
    //     url: req.url

    // }

    res.render('home', {
        nombre: 'oswaldo franco'
    })

})
app.get('/about', (req, res) => {
    res.render('about')
})

// app.get('/data', (req, res) => {
//     res.send('Hola data')

// })

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
})