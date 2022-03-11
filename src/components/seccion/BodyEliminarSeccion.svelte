<script>
	export let row;
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
		<div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
			<h2 class="text-xs  tracking-widest font-medium title-font mb-1">
				¿Esta seguro que desea eliminar esta sección?
			</h2>
			<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
				{row.nombreSeccion}
			</h1>
		</div>
	</div>
</section>
