const express=require('express');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser());

const db = require("./model");
db.sequelize.sync();




app.get('/', (req,res)=>{

    res.send('Hello World');
});


require("./routes/todo.routes")(app);
app.listen(1337);