<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;
		
		const res = await this.fetch('courses.json');
		const courses = await res.json();
        
		return { courses };
	}
</script>

<script>
	export let courses;
</script>

<ul>
	{#each courses as { _id, title }, i}
		<li>
			{_id}: {title}
		</li>
	{/each}
</ul>