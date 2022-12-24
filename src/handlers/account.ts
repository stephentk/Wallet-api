import express, {Request,Response} from 'express';
import { Account,accounts } from '../models/account';
const wallet = new accounts()

const fund = async(req:Request,res:Response) => {
    try{
        const account:Account = {
           id:req.body.id,
           balance:req.body.balance,
           user_id: req.body.user_id 

        }
        const newacc = await wallet.fundAccount(account)
        res.json(newacc)
   }
   catch(error){
    res.status(400)
    res.json(error)
   }
}
const withdraw = async(req:Request,res:Response) => {
    const withdrawFund = await wallet.withdraw(req.body.user_id)
    res.json(withdrawFund)
}
const transfer = async(req:Request,res:Response) => {
    const transferFund = await wallet.transferFrom(req.body.user_id)
    res.json(transferFund)
}
const transferto = async(req:Request,res:Response) => {
    const transferFund = await wallet.transferTo(req.body.user_id)
    res.json(transferFund)
}


const account_routes = (app:express.Application) => {
    app.post('/fund',fund)
    app.patch('/withdrawal',withdraw)
    app.patch('/transfer',transfer)
    app.post('/transferin',transferto)
}

export default account_routes