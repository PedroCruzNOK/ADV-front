<script>
	export let seccion = {};
    
	export let rowUpdate = {};
	rowUpdate = seccion;
</script>

<div class="flex flex-wrap -mx-3 mb-6">
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Nombre Sección
		</label>
		<input
			class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="nombre"
			type="text"
			placeholder="Nombre"
			bind:value={seccion.nombreSeccion}
		/>
	</div>
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Descripción
		</label>
		<textarea
			bind:value={seccion.descripcion}
			class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
			rows="4"
		/>
	</div>
</div>
