/* Replace with your SQL commands */

CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    Balance integer,
    user_id bigint REFERENCES users(id)
)