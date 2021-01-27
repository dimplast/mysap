require('dotenv').config();

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import * as sapper from '@sapper/server';

import {connectDB} from './db'

const { PORT, NODE_ENV, MONGO_URI } = process.env;
const dev = NODE_ENV === 'development';

console.log(MONGO_URI);

connectDB();

polka()
	.use(bodyParser.json())
	.use(session({
		secret: 'secret-key',
		resave: false,
		saveUninitialized: true
	}))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: req => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
