
 const express = require("express");
 const app = express();
 const port = process.env.PORT ||3000;


const path = require("path")

const x = path.join(__dirname,'../public')
// console.log(path.join(__dirname,'../main'));
app.use(express.static(x))

const viewsdirectory = path.join(__dirname , "../temp1/views")
app.set('views' , viewsdirectory)

var hbs = require('hbs')
const partialspath = path.join(__dirname ,'../temp1/partials' )
hbs.registerPartials( partialspath )

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('index',{
        title:"HOME",
        img1:"images/product5.jpg",
        desc:"Welcome In Our Page",
        para:"We are glad that you visited our site and we hope to fulfill what you want... "
    })
})
app.get('/ourproducts',(req,res)=>{
    res.render('ourproducts',{
        title:"ourproducts",
        desc:"We Show Some Of Our Products",
        image1:"images/product1.jpg",
        image2:"images/product2.jpg",
        image3:"images/product3.jpg",
        image4:"images/product4.jpg",
        image6:"images/product6.jpg",
        image7:"images/product7.jpg",

    })
})


app.get('/login',(req,res)=>{
    res.render('login',{
        title:"Login",
        desc:"For Get Your Password"
    })
})

app.get('/register',(req,res)=>{
    res.render('register',{
        title:"Register",
        desc:""
    })
})

app.listen(port , ()=>{
    console.log(`port ${port}`);
})