<script>
	import { onMount } from 'svelte';
	
	export let area = {};
	export let getSecciones;
    export let rowUpdate = {};
    
    rowUpdate = area;

	let secciones = [];
	
	onMount(async () => {
		secciones = await getSecciones();
	});
</script>

<div class="flex flex-wrap -mx-3 mb-6">
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Nombre Area
		</label>
		<input
			bind:value={area.nombreArea}
			class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="nombre"
			type="text"
			placeholder="Nombre"
		/>
	</div>

	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Selecciona una seccion
		</label>
		<select
			class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
			placeholder="Regular input"
			bind:value={area.idSeccion}
		>
			{#each secciones as seccion}
				<option value={seccion.idSeccion}>{seccion.nombreSeccion}</option>
			{/each}
		</select>
		<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
			<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"
				><path
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				/></svg
			>
		</div>
	</div>
</div>

