const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect database
connectDB();

//Init Middlewere
app.use(express.json({ extended: false }));

app.get(
  '/',
  (req, res) => res.json({ msg: 'Welcome to the contact Keeper API' })

  //since this is a json api we use res.json
  //you can also use res.send('to send a string or HTML')
  //you can also send a file to the browser using res.sendFile()
);

// Defin Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
