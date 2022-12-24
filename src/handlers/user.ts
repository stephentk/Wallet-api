import express, {Request,Response} from 'express';
import  jwt   from 'jsonwebtoken';
import { User,UserStore } from '../models/user';
import dotenv from 'dotenv'


const store = new UserStore()
const create = async(req:Request,res:Response) => {
    try{
        const user:User = {
            username: req.body.username,
            password: req.body.password,
            
        }
        const newUser = await store.create(user)
        const token = jwt.sign({user:newUser}, 'RANDOM_SECRET_FOR_TOKEN')
        res.json(token)
   }
   catch(error){
    res.status(400)
    res.json(error)
   }
}
const authenticate = async(req:Request,res:Response) => {
    const user:User = {
        username:req.body.username,
        password:req.body.password
    }
    try{
        const result = await store.authenticate(req.body.username,req.body.password);
        const token = jwt.sign({user:result},'RANDOM_SECRET_FOR_TOKEN')
        res.json(token)
    }
    catch (error){
        res.status(401);
        res.json({error})
    }
}

/*const verifyAuthToken = (req: Request, res: Response, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader?.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        next()
    } catch (error) {
        res.status(401)
    }
}
*/

const user_routes = (app:express.Application) => {
    app.post("/user",create)
    app.post("/login",authenticate)
}
export default user_routes