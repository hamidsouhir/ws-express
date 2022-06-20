const express=require('express')
const app =express()


const menu=[
    {id:0 , coffee:'Espresso' , description:'espresso' ,  price : '2.00'},
    {id:1 ,coffee:'Americano' , description:'hot water,espresso' ,  price : 4.00},
    {id:2 , coffee:'Cappuchino' , description:'wipped milk,espresso' ,  price : 7.00},
    {id:3 , coffee:'Mocha' , description:'wipped cream,choclate,espresso' , price : 6.00}
]

app.use(express.static('views'))

app.set('view engine','ejs')
app.set('views','views')

const msg=(req,res,next)=>{
 
   const d = new Date();
    let day = d.getDay();
    let hours = d.getHours()
    
    if((day===6 || day===0)||(hours<9 && hours>17)){
        res.send(error)
    } else {
    next();
}
}
app.use(msg);
app.get('/',(req,res,next)=>{
    res.render('index')
})
app.get('/home%20page',(req,res,next)=>{
    res.render('home')
})
app.get('/services',(req,res,next)=>{
    
    res.render('service',{menu})
    
})
app.get('/contact',(req,res,next)=>{
    res.render('contact')
})









app.listen(8000,(err)=>err?console.log(error):console.log('server is running on port 8000'))