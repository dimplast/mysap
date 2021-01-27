import Courses from '../../models/Courses'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js

	
	const { id } = req.params;

	const course = await Courses.findById(id);


	if (course !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(course));
	} else {
		next();
	}
}