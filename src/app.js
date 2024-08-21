const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

let user = [
    {name: "John Doe", email: "johndoe@example.com"},
]

app.get("/test", (req,res)=>{
    res.status(200).send("Test node emdpoint is work")
})

app.post('/new/user',(req,res)=>{
    let {name, email} = req.body

    if(!name || !email) return res.status(404).send("Enter name or email")

    user.push({name, email})
    res.status(201).send(user)

})

app.get('/user', (req,res) => {
   res.status(200).send(user)
})

module.exports = app