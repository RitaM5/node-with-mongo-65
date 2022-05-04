const express = require('express');
const cors = require('cors')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
//use middlewere
app.use(cors());
app.use(express.json());
//mongodbuser1
//jIyEQUnwLjoJUZMX

const uri = "mongodb+srv://mongodbuser1:jIyEQUnwLjoJUZMX@cluster0.z4qga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");
        const user= {name:'nodi' , email: 'nodi@gmail.com'}
        const result = await userCollection.insertOne(user);
        console.log(`user inserted with id: ${result.insertedId}`);
    }
   
    finally{
       // await client.close();
    }
}
  
run().catch(console.dir);

app.get('/', (req,res) =>{
    res.send('running my node crud server')
})

app.listen(port, () =>{
    console.log('CRUD server is running');
})