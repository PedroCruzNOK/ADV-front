<script>
	import { onMount } from 'svelte';

	export let getRow, idRow;
	let row = { };
	onMount(async () => {
		let res = await getRow(idRow);
        row=res[0]
	});
</script>

<form class="w-full ">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Titulo notificacion:
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{row.titulo}
			</label>
		</div>
	</div>

    <div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Contenido:
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{row.contenido}
			</label>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Fecha:
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{row.fechaHora}
			</label>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Nombre del candidato
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{row.candidato?.nombre} {row.candidato?.apellidoPaterno} {row.candidato?.apellidoMaterno} 
			</label>
		</div>
	</div>
</form>
