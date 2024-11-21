const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express ();
app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

const upload = multer();

const accounts = [
    {
        username: 'admin',
        password: 'admin'
    },
    {
        username: 'user',
        password: 'user'
    }
]

app.post('/login', upload.none(), (req, res) => {
    const { username, password} = req.body;
    try {
        const account = accounts.find(account => account.username === username && account.password === password);
        if(account) {
            res.json({'message': 'Login Success'});
        } else {
            res.send({'message': 'Login Failed'});
        }
    } catch (error) {
        console.log(error)
    }

});

app.post('/register', upload.none(), (req, res) => {
    const { username, password} = req.body;
    try {
        const account = accounts.find(account => account.username === username);
        if(account) {
            res.send({'message': 'Username Already Exists'});
        } else {
            accounts.push({username, password});
            // console.log(`User Accounts: ${accounts}`)
            res.send({'message': 'Account Created'});
        }
    } catch (error) {
        console.log(error)
    }
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
