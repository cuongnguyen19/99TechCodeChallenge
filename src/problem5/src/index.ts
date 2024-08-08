import express from 'express';
import { openDb } from './database';
import resourceRouter from './routes/resource';
import path from 'path';

const app = express();
app.use(express.json());

openDb().then(db => {
    db.exec(`
    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      score INTEGER
    )
  `);
});

app.use('/api/resources', resourceRouter);
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});