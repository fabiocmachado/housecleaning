
import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import db from './db/db';

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req: any, res: { send: (arg0: string) => void; }) =>{
	res.send('Bem-vindo à sua aplicação de gerenciamento de clientes!');
});

db.sync().then(() => {
	app.listen(port, () => {
	  console.log(`Server is running on http://localhost:${port}! `);
	});
  }).catch(error => {
	console.error('Erro ao sincronizar o banco de dados:', error);
  });