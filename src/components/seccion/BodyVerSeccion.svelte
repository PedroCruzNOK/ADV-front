<script>
	export let seccion = {};
</script>

<section class="text-gray-600 body-font">
	<div class="grid grid-cols-6 gap-4">
		<div class="col-start-2 col-span-4 ...">
			<div class=" py-3 mx-auto flex items-center">
				<div
					class="flex flex-col md:pr-6 md:mb-0 mb-6 pr-0 lg:w-1/1 md:w-1/1 w-full  md:text-left text-center"
				>
					<h2 class="text-xs  tracking-widest font-medium title-font mb-1">SECCIÓN</h2>
					<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
						{seccion.nombreSeccion}
					</h1>
				</div>
			</div>
			<div class="py-3 mx-auto flex items-center">
				<div
					class="flex flex-col md:pr-6 md:mb-0 mb-6 pr-0 lg:w-1/1 md:w-1/1 w-full  md:text-left text-center row"
				>
					<h2 class="text-xs  tracking-widest font-medium title-font mb-1">DESCRIPCIÓN</h2>
					<h1 class="md:text-1xl text-1xl font-medium title-font text-gray-900">
						{seccion.descripcion}
					</h1>
				</div>
			</div>
		</div>
	</div>
</section>
