<script>
	import Modal from '../Modal.svelte';
	import Titulo from '../Titulo.svelte';
	import BodyEditarArea from '../area/BodyEditarArea.svelte';
	import BodyEditarSeccion from '../seccion/BodyEditarSeccion.svelte';
	import BodyEditarCandidato from '../candidatos/BodyEditarCandidato.svelte';
	import BodyEditarPlantilla from '../plantilla/BodyEditarPlantilla.svelte';
	import BodyEditarPregunta from '../preguntas/BodyEditarPregunta.svelte';
	import BodyEditarCategoria from '../categoria/BodyEditarCategoria.svelte';
	import BodyEditarUsuario from '../usuarios/BodyEditarUsuario.svelte';
	import BodyEditarTipoPregunta from '../tipoPregunta/BodyEditarTipoPregunta.svelte';

	export let titulo;
	export let cuerpo; 
	export let id;
	export let metodos;

	// variable que tendra la informacion aactualizada
	export let updateData = [];
	let updateRow;
	let row = {};

	let openModal = false;
</script>

<div class="flex justify-center">
	<button
		on:click={async () => {
			row = await metodos.getRow(id);
			openModal = true;
		}}
	>
		<i class="bi bi-pencil p-3 text-blue-400 iconMenu2" />
	</button>
</div>

<Modal open={openModal} onClose={() => (openModal = false)}>
	<div class="modal">
		<Titulo tituloPrincipal={titulo} />
		<form class="w-full ">
			{#if cuerpo == 'usuario'}
				<BodyEditarUsuario
					bind:rowUpdate={updateRow}
					usuario={row[0]}
					getRoles={metodos.getRoles}
				/>
			{/if}

			{#if cuerpo == 'area'}
				<BodyEditarArea 
					bind:rowUpdate={updateRow} 
					area={row[0]} 
					getSecciones={metodos.getSecciones}/>

			{/if}

			{#if cuerpo == 'seccion'}
				<BodyEditarSeccion 
				bind:rowUpdate={updateRow} 
				seccion={row[0]} />
			{/if}

			{#if cuerpo == 'micandidato'}
				<BodyEditarCandidato />
			{/if}

			{#if cuerpo == 'plantilla'}
				<BodyEditarPlantilla />
			{/if}

			{#if cuerpo == 'banco'}
				<BodyEditarPregunta />
			{/if}

			{#if cuerpo == 'categoria'}
				<BodyEditarCategoria />
			{/if}

			{#if cuerpo == 'tipopregunta'}
				<BodyEditarTipoPregunta bind:rowUpdate={updateRow} tipoPregunta={row[0]}/>
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
				let res = await metodos.updateRow(id, updateRow);
				if (res.status) {
					updateData = await metodos.getAllRows();
				}
				openModal = false;
			}}
		>
			<i class="bi bi-pencil tam" />
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
