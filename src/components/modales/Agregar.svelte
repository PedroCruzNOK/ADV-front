<script>
	import Modal from '../Modal.svelte';
	import Titulo from '../Titulo.svelte';
	import BodyAgregarArea from '../area/BodyAgregarArea.svelte';

	import BodyAgregarSeccion from '../seccion/BodyAgregarSeccion.svelte';
	import BodyAgregarCandidato from '../candidatos/BodyAgregarCandidato.svelte';
	import BodyAgregarPlantilla from '../plantilla/BodyAgregarPlantilla.svelte';
	import BodyAgregarPregunta from '../preguntas/BodyAgregarPregunta.svelte';
	import BodyAgregarCategoria from '../categoria/BodyAgregarCategoria.svelte';
	import PreguntaManual from '../categoria/PreguntaManual.svelte';
	import Preguntabanco from '../categoria/Preguntabanco.svelte';
	import BodyAgregarUsuario from '../usuarios/BodyAgregarUsuario.svelte';
	import BodyAgregarTipoPregunta from '../tipoPregunta/BodyAgregarTipoPregunta.svelte';

	export let titulo;
	export let cuerpo;
	export let metodos;

	//variable que se usara para guardar un nuevo objeto de cualquier modal
	export let updateData = [];
	let newRow;

	let openModalAgregar = false;
</script>

<div class="flex justify-end">
	<button
		on:click={() => {
			openModalAgregar = true;
		}}
		class="  btnAgregar  font-bold py-2 px-4 rounded nunito"
	>
		{titulo}
	</button>
</div>

<Modal open={openModalAgregar} onClose={() => (openModalAgregar = false)}>
	<div class="modal">
		<Titulo tituloPrincipal={titulo} />
		<form class="w-full " on:submit|preventDefault>
			{#if cuerpo == 'area'}
				<BodyAgregarArea
					bind:area={newRow}
					getSecciones={metodos.getSecciones}
					getCategorias={metodos.getCategorias}
				/>
			{/if}

			{#if cuerpo == 'seccion'}
				<BodyAgregarSeccion bind:seccion={newRow} />
			{/if}

			{#if cuerpo == 'usuario'}
				<BodyAgregarUsuario bind:usuario={newRow} getRoles={metodos.getRoles} />
			{/if}

			{#if cuerpo == 'micandidato'}
				<BodyAgregarCandidato />
			{/if}

			{#if cuerpo == 'plantilla'}
				<BodyAgregarPlantilla />
			{/if}

			{#if cuerpo == 'banco'}
				<BodyAgregarPregunta  bind:pregunta={newRow} getTipoPregunta={metodos.getTipoPregunta}/>
			{/if}

			{#if cuerpo == 'categoria'}
				<BodyAgregarCategoria />
			{/if}

			{#if cuerpo == 'addpreguntamanual'}
				<PreguntaManual />
			{/if}

			{#if cuerpo == 'addpreguntabanco'}
				<Preguntabanco/>
			{/if}

			{#if cuerpo == 'tipopregunta'}
				<BodyAgregarTipoPregunta  bind:tipoPregunta={newRow} />
			{/if}
		</form>
		<button
			class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
			on:click={() => (openModalAgregar = false)}
		>
			<i class="bi bi-x-lg tam" />
			<span class="ml-4 flex items-start flex-col leading-none">
				<span class="text-xs text-gray-600 mb-1">Cancelar</span>
			</span>
		</button>
		<button
			class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
			on:click={async () => {
				let res = await metodos.addRow(newRow);
				if (res.status) {
					updateData = await metodos.getAllRows();
				}
				openModalAgregar = false;
			}}
		>
			<i class="bi bi-plus-lg tam" />
			<span class="ml-4 flex items-start flex-col leading-none">
				<span class="text-xs text-gray-600 mb-1">{titulo}</span>
			</span>
		</button>
	</div>
</Modal>
