const expressServer = require('express')
const employeeApi = require('./empoyee-api')

const port =3000
const app=expressServer();

app.use(expressServer.urlencoded({extended:true}))
app.use(expressServer.json());

app.use('/employee.-api',employeeApi)

app.listen(port,()=>{
    console.log(`Sever is listen at the port :${port}`)
})