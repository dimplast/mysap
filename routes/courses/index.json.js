import Courses from '../../models/Courses'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js

	const courses = await Courses.find();

	if (courses !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(courses));
	} else {
		next();
	}
}