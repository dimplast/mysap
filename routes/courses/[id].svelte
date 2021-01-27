<script context="module">
	export async function preload(page, session) {
		const { id } = page.params;

		const res = await this.fetch(`courses/${id}.json`);
		const course = await res.json();

		return { course };
	}
</script>

<script>
	export let course;
</script>

<h1>{course.title}</h1>