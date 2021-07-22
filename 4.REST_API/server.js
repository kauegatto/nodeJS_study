import sequelize from './src/db/connection';
import app from './app';

async function testdb() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
app.listen(3000, () => {
  console.log('Escutando na porta 3000');
  console.log('http://localhost:3000');
  testdb();
});
