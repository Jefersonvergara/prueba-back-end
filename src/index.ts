import { serverMongo } from './infrastructure/express/server';

import mongoose from 'mongoose';


<<<<<<< HEAD
const app = express();
     
app.use(cors({
    credentials: true,
  }));
  
  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.json());
  
  const server = http.createServer(app);
  
  server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
  });
=======
 serverMongo()
const  MONGO_URL ='mongodb+srv://jeferson:junior1112@cluster0.vfwcfpn.mongodb.net/?retryWrites=true&w=majority'
>>>>>>> 6fa2754 (prueba backend_ddd)

 mongoose.Promise = Promise;
 mongoose.connect(MONGO_URL);
 mongoose.connection.on('error', (error: Error) => console.log(error));
<<<<<<< HEAD
 app.use('/',router());
=======
>>>>>>> 6fa2754 (prueba backend_ddd)
