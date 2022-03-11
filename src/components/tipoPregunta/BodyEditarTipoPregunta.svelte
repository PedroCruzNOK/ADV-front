<script>
	
	//export let rowUpdate = {};
	export let tipoPregunta = {};
	export let rowUpdate = {};
	rowUpdate = tipoPregunta;

</script>

<form class="w-full ">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="nombre"
			>
				Tipo de pregunta
			</label>
			<input
				class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="nombre"
				type="text"
				placeholder="Nombre"
				bind:value={tipoPregunta.nombreTipoPregunta}
			/>
		</div>
	</div>
	
</form>