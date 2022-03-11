<script context="module">

	export async function load({ page, fetch, session, contex }) {
			return {
				props: {
					path: page.path
				}
			};
	}
</script>

<script>

	
	import '../app.postcss';
	

	export let path;
	console.log(path);
	
</script>

<slot />
