const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8081;
const app = require("./app-nera");

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});
