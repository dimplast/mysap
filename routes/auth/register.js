import User from '../../models/User';

export async function post(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js

	const user = await User.create(req.body);

   	if (user !== null) {
        req.session.user = user;
		console.log(req.session.user)
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(user));
	} else {
		next();
	}
}