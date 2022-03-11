<script>
	import Modal from '../Modal.svelte';
	import Titulo from '../Titulo.svelte';
	import BodyVerArea from '../area/BodyVerArea.svelte';
	import BodyVerSeccion from '../seccion/BodyVerSeccion.svelte';
	import BodyVerUsuario from '../usuarios/BodyVerUsuario.svelte';
	import BodyVerTipoPregunta from '../tipoPregunta/BodyVerTipoPregunta.svelte';
	import BodyVerPregunta from '../preguntas/BodyVerPregunta.svelte';
	import BodyVerCategoria from '../categoria/BodyVerCategoria.svelte';

	export let titulo;
	export let cuerpo;
	export let id;
	export let metodos;

	let openModal = false;
	let row = {};
</script>

<div class="flex justify-center ">
	<button
		on:click={async () => {
			row = await metodos.getRow(id);
			openModal = true;
		}}
	>
		<i class="bi bi-eye p-3 text-green-500 iconMenu2" />
	</button>
</div>

<Modal open={openModal} onClose={() => (openModal = false)}>
	<div class="modal">
		<Titulo tituloPrincipal={titulo} />
		<form class="w-full ">
			{#if cuerpo == 'tipopregunta'}
				<BodyVerTipoPregunta tipoPregunta={row[0]} />
			{/if}

			{#if cuerpo == 'usuario'}
				<BodyVerUsuario usuario={row[0]} />
			{/if}

			{#if cuerpo == 'area'}
				<BodyVerArea area={row[0]} />
			{/if}

			{#if cuerpo == 'seccion'}
				<BodyVerSeccion seccion={row[0]} />
			{/if}

			{#if cuerpo == 'micandidato'}
				<BodyVerCandidato />
			{/if}

			{#if cuerpo == 'plantilla'}
				<BodyVerPlantilla />
			{/if}

			{#if cuerpo == 'banco'}
				<BodyVerPregunta pregunta={row[0]} />
			{/if}

			{#if cuerpo == 'categoria'}
				<BodyVerCategoria categoria={row[0]} />
			{/if}
		</form>
		<button
			class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
			on:click={() => (openModal = false)}
		>
			<i class="bi bi-x-lg tam" />
			<span class="ml-4 flex items-start flex-col leading-none">
				<span class="text-xs text-gray-600 mb-1">Cerrar ventana</span>
			</span>
		</button>
	</div>
</Modal>

<style>
	.tam {
		font-size: 20px;
	}
</style>
