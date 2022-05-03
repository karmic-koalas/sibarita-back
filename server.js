import 'dotenv/config'
import 'process';
import 'express';
import 'mongoose';

const app = express();
mongoose.connect('mongodb+srv://'+process.env.USERNAME_DB+':'+process.env.PASSWORD_DB+'@sibarita.v89gs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

import companyRouter from './api/company/'
import tableRouter from './api/table/'
import bookingRouter from './api/booking/'

app.use(express.json());

app.listen(3000);
