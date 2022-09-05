import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(cors());
app.use(morgan('dev'));

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connect database successfully!!")
  } catch (error) {
    console.error("Connect database failed!!")
  }
}
connectDB();

app.use('/posts', posts);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

