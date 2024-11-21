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
        const account = accounts.find(account => account.username === username);
        if(account) {
            const passwordMatch = account.password === password;
            if(passwordMatch) {
                res.send({'message': 'Login Successful'});
            } else {
                res.send({'message': 'Invalid Password'});
            }
        } else {
            res.send({'message': 'Account not registered'});
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
