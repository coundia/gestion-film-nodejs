const express = require('express');
const app = express();
require('dotenv').config();
const MovieRoute = require('./src/routes/MovieRoute');
/** Content-type setup  */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** get status*/
app.get('/', (req, res) => {
    res.json({'status': 'UP'});
})
/** get films  routes */
app.use('/movies', MovieRoute);
/** get port */
const { PORT } = process.env;
/** Listen  */
app.listen(PORT, '0.0.0.0', () => {
    console.log(`http://localhost:${PORT}`)
});
