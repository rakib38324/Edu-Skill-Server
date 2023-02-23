const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());


// async function run() {
//     try {

//         // const usersCollections = client.db('UpScale_ReSale').collection('Users');
        


//     }
//     finally {

//     }
// }
// run().catch(console.log);


app.get('/', async (req, res) => {
    res.send('Edu Skill Server is Running...');
})

app.listen(port, () => console.log(`Edu Skill Serve Running on ${port}`))