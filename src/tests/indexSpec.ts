
import { accounts } from "../models/account";
import { UserStore } from "../models/user";



const wallets = new accounts();
const users = new UserStore()

describe('account model',() => {
  it('should have a fund account method',() => {
    expect(wallets.fundAccount).toBeDefined()
  })
  it('should have a withdraw account method',() => {
    expect(wallets.withdraw).toBeDefined()
  })
})

describe('userStore',() => {
  it('should have a user create method',() => {
    expect(users.create).toBeDefined()
  })
  it('should have a login account method',() => {
    expect(users.authenticate).toBeDefined()
  })
})





