import express from "express";
import jwt from "jsonwebtoken";
import knex from "knex";
import bcrypt from "bcrypt";
import db from "./db.js";

const UserRoutes = express.Router();
const secret = "secret123";

UserRoutes.get('/profile', ((req,res) => {
    const token = req.cookies.token;
    jwt.verify(token, secret, (err, data) => {
        if (err) {
            res.status(403).send();
            console.log(err);
        } else {
            res.json(data).send();
        }
    });
}));

UserRoutes.post('/login', ((req,res) => {
    const {email,password} = req.body;
    db
        .select('password')
        .where({email})
        .from('users')
        .first()
        .then(user => {
            const isLoginOK = bcrypt.compareSync(password, user.password);

            isLoginOK && jwt.sign(email, secret, (err,token) => {
                if (err) {
                    res.status(403).send();
                } else {
                    db('users').where({email}).update({token})
                        .then(() => res.cookie('token',token).send('ok'))
                        .catch(() => res.sendStatus(422));
                }
            });

            if (!isLoginOK) {
                res.status(403).send('Username or password do not match');
            }
        })
        .catch(e => {
            res.status(422).send('something is wrong');
            console.log(e);
        });
}));

UserRoutes.post('/register', ((req,res) => {
    const {email,password} = req.body;
    db
        .select('*')
        .from('users')
        .where({email})
        .then(rows => {
            if(rows.length === 0) {
                const hashedPassword = bcrypt.hashSync(password, 10);
                db('users').insert({email,password:hashedPassword})
                    .then(() => {
                        jwt.sign(email, secret, (err, token) => {
                            if (err) {
                                res.sendStatus(403);
                            } else {
                                res.cookie('token',token).status(201).send('User created');
                            }
                        });
                    })
                    .catch(e => {
                        res.status(422).send('User registration failed');
                        console.log(e);
                    });
            } else {
                res.status(422).send('Email already exists in database');
            }
        })
        .catch(e => {
            console.log(e);
            res.status(422).send(e);
        });
}));

UserRoutes.post('/logout', ((req,res) => {

    // res.cookie('token', 'empty').send('ok');
    res.clearCookie('token').send('ok');
}));

export default UserRoutes;