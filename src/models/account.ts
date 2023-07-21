import client from "../database";

export type Account = {
  id: string;
  balance: string;
  user_id: string;
};
export class accounts {
  async fundAccount(account: Account): Promise<Account> {
    try {
      //@ts-ignore
      const sql =
        "INSERT INTO Account(id,balance,user_id) values ($1,$2,$3) returning *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        account.id,
        account.balance,
        account.user_id,
      ]);
      const acc = result.rows[0];
      conn.release();
      return acc;
    } catch (error) {
      throw new Error(`could not add  error ${error}`);
    }
  }

  async withdraw(user_id: string): Promise<Account> {
    try {
      //@ts-ignore
      const sql =
        "Update account SET balance = balance-45 WHERE user_id=($1) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [user_id]);
      const acc = result.rows[0];
      conn.release();
      return acc;
    } catch (error) {
      throw new Error(`could not update account of ,error ${error}`);
    }
  }
  async transferFrom(user_id: string): Promise<Account> {
    try {
      //@ts-ignore
      const sql =
        "Update account SET balance = balance - 120 WHERE user_id=($1)  RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [user_id]);
      const acc = result.rows[0];
      conn.release();
      return acc;
    } catch (error) {
      throw new Error(`could not update account of ,error ${error}`);
    }
  }
  async transferTo(user_id: string): Promise<Account> {
    try {
      //@ts-ignore
      const sql =
        "Update account SET balance = 120 WHERE user_id=($2) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [user_id]);
      const acc = result.rows[0];
      conn.release();
      return acc;
    } catch (error) {
      throw new Error(`could not update account of ,error ${error}`);
    }
  }
}
