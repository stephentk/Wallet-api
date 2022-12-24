import bcrypt from "bcrypt";
import client from "../database";


export type User = {
    username:string;
    password: string
}
const pepper = process.env.BCRYPT_PASSWORD;
export class UserStore {
    async create(user:User): Promise<User> {
       try{
        const conn = await client.connect();
       // const saltRounds = process.env.SALT_ROUNDS;
        
        const sql ='INSERT into users (username,password_here) VALUES ($1,$2) RETURNING *'
        const hash = bcrypt.hashSync(user.password + pepper,parseInt('10'))
        const result =conn.query(sql,[user.username,hash])
        conn.release()
        return  (await result).rows[0]
       }
       catch(error){
        throw new Error(`unable to create user ${error}`)
       }
    }

   async  authenticate(username:string,password:string):Promise<User| null>{
    //@ts-ignore
    const conn = await client.connect();
    const sql = "SELECT password_here from users where username = ($1)";
    const result =  await conn.query(sql,[username]);
    if((await result).rows.length) {
        const user = (await result).rows[0];
        if (bcrypt.compareSync(password + pepper,user.password_here)){
            return user
        }
    }
    return null
   }
}

