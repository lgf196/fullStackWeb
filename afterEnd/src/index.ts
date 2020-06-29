import express from 'express';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import {userRouter,listRouter} from './routes'
import errorHandler from './middleware/errorHandler'
import error404 from './middleware/404'
const app = express();

app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Headers", "X-Requested-With,accesstoken");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  next();  
}); 

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use('/api',userRouter);
app.use(error404);
app.use(errorHandler);

app.listen(8080,()=>{
  console.log('111', 111)
});