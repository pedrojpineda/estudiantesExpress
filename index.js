const mongoose = require('mongoose');
const app = require('./app');

const port = 3000;

const URI = 'mongodb://localhost:27017/estudiantes';

mongoose.connect(URI, (err, res) => {
    if (err) {
        console.log(`El error es: ${err}`);
    } else {
        console.log('Conexión exitosa!!');
        app.listen(port, () => {
            console.log(`Puerto: ${port}`);
        })
    }
})