<script>
	import Modal from '../Modal.svelte';
	import Titulo from '../Titulo.svelte';
	import BodyEliminarArea from '../area/BodyEliminarArea.svelte';
	import BodyEliminarSeccion from '../seccion/BodyEliminarSeccion.svelte';
	import BodyEliminarCandidato from '../candidatos/BodyEliminarCandidato.svelte';
	import BodyEliminarPlantilla from '../plantilla/BobyEliminarPlantilla.svelte';
	import BodyEliminarCategoria from '../categoria/BodyEliminarCategoria.svelte';
	import BodyEliminarPregunta from '../preguntas/BodyEliminarPregunta.svelte';
	import BodyEliminarUsuario from '../usuarios/BodyEliminarUsuario.svelte';
	import BodyEliminarTipoPregunta from '../tipoPregunta/BodyEliminarTipoPregunta.svelte';

	export let titulo;
	export let cuerpo;
	let openModal = false;

	export let id;
	export let metodos;
	export let row = {};

	export let updateData = [];
</script>

<div class="flex justify-center ">
	<button
		on:click={() => {
			openModal = true;
		}}
	>
		<i class="bi bi-trash p-3 text-red-600 iconMenu2" />
	</button>
</div>
<Modal open={openModal} onClose={() => (openModal = false)}>
	<div class="modal">
		<Titulo tituloPrincipal={titulo} />
		<form class="w-full ">
			{#if cuerpo == 'usuario'}
				<BodyEliminarUsuario {row} />
			{/if}

			{#if cuerpo == 'seccion'}
				<BodyEliminarSeccion {row} />
			{/if}

			{#if cuerpo == 'area'}
				<BodyEliminarArea {row} />
			{/if}

			{#if cuerpo == 'seccion'}
				<BodyEliminarSeccion />
			{/if}

			{#if cuerpo == 'micandidato'}
				<BodyEliminarCandidato />
			{/if}

			{#if cuerpo == 'plantilla'}
				<BodyEliminarPlantilla />
			{/if}

			{#if cuerpo == 'banco'}
				<BodyEliminarPregunta />
			{/if}

			{#if cuerpo == 'categoria'}
				<BodyEliminarCategoria {row} />
			{/if}

			{#if cuerpo == 'tipopregunta'}
				<BodyEliminarTipoPregunta {row} />
			{/if}
		</form>
		<button
			class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
			on:click={() => (openModal = false)}
		>
			<i class="bi bi-x-lg tam" />
			<span class="ml-4 flex items-start flex-col leading-none">
				<span class="text-xs text-gray-600 mb-1">Cancelar</span>
			</span>
		</button>
		<button
			class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
			on:click={async () => {
				openModal = false;
				let res = await metodos.deleteRow(id);
				if (res.status) {
					updateData = await metodos.getAllRows();
				}
			}}
		>
			<i class="bi bi-trash tam" />
			<span class="ml-4 flex items-start flex-col leading-none">
				<span class="text-xs text-gray-600 mb-1">{titulo}</span>
			</span>
		</button>
	</div>
</Modal>

<style>
	.tam {
		font-size: 20px;
	}
</style>
