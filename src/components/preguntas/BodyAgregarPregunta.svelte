<script>
    import { onMount } from 'svelte';

    export let pregunta = {};
    export let getTipoPregunta;
   
    let tiposPregunta = [];
    onMount(async () => {
        tiposPregunta= await getTipoPregunta();
    });
    console.log(tiposPregunta)
</script>

<div class="flex flex-wrap -mx-3 mb-6">
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<div class="col-span-6 sm:col-span-3">
            <label for="country" class="block text-sm font-medium text-gray-700">Selecciona un tipo de pregunta </label>
            <select
                bind:value={pregunta.idTipoPregunta}
                id="country"
                name="country"
                autocomplete="country"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {#each tiposPregunta as tipo}
                    <option value={tipo.idTipoPregunta}>{tipo.nombreTipoPregunta}</option>
                {/each}
            </select>
        </div>
	</div>
    <div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Escribe la pregunta
		</label>
		<input
			bind:value={pregunta.pregunta}
			class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="nombre"
			type="text"
			placeholder="Nombre"
		/>
	</div>
    <div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Descripcion de la pregunta
		</label>
		<input
			bind:value={pregunta.descripcion}
			class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="nombre"
			type="text"
			placeholder="Nombre"
		/>
	</div>
</div>


<style>
	input {
		display: block;
		width: 500px;
		max-width: 100%;
	}
</style>
