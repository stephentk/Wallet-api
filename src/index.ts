import express, {Request,Response} from 'express';
import bodyParser from 'body-parser';
import cors from "cors" ;
import user_routes from "./handlers/user"
import account_routes from "./handlers/account"

require("dotenv").config();


const app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.json())
user_routes(app)
account_routes(app)




app.listen(port,() => {
    console.log('listening on port 5000')
});


export default app
