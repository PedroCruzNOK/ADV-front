<script>
	import Modal from '../../components/Modal.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import Titulo from '../../components/Titulo.svelte';
	import { onMount } from 'svelte';
	import Api from '$lib/Api';

	let idiomas = ['Español', 'Ingles', 'Frances'];
	let temas = ['Azul', 'Verde', 'Rojo'];
	let open = false;

	$: configUser = {};

	onMount(async () => {
		let config = {
			endPoint: 'api/v1/configuracion/usuario/get',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await Api(config);
		if (res.status) {
			configUser.idioma = res.data[0].idioma;
			configUser.tema = res.data[0].tema;
		} else {
			console.log(res);
		}
	});

	const saveConfig = async () => {
		let config = {
			endPoint: 'api/v1/configuracion/usuario/update',
			method: 'PUT',
			body: JSON.stringify(configUser),
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await Api(config);
		if (res.status) {
			console.log(res.mensaje);
			open = false;
		} else {
			console.log(res);
		}
	};
</script>

<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="MI CONFIGURACION" />
	<div class="flex justify-end">
		<button
			on:click={() => (open = true)}
			class=" bg-transparent border border-gray-500  text-gray-500  font-bold py-2 px-4 rounded-full"
		>
			Editar Configuracion
		</button>

		<Modal {open} onClose={() => (open = false)}>
			<div class="modal">
				<form class="w-full ">
					<div class="col-span-6 sm:col-span-3">
						<Titulo tituloPrincipal="Editar mi configuracion" />
						<br />
						<label for="idioma" class="block text-sm font-medium text-gray-700"
							>Selecciona un idioma predeterminado:</label
						>
						<select
							bind:value={configUser.idioma}
							id="idioma"
							name="idioma"
							autocomplete="idioma"
							class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							{#each idiomas as idioma}
								<option value={idioma}>{idioma}</option>
							{/each}
						</select>
						<br />
						<label for="idioma" class="block text-sm font-medium text-gray-700"
							>Selecciona un color predeterminado:</label
						>
						<select
							bind:value={configUser.tema}
							id="tema"
							name="tema"
							autocomplete="tema"
							class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							{#each temas as tema}
								<option value={tema}>{tema}</option>
							{/each}
						</select>
					</div>
				</form>
				<div class="flex justify-end pt-2">
					<button
						class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
						on:click={() => (open = false)}>Cancelar</button
					>
					<button class="modal-close px-4  p-3 rounded-lg " on:click={saveConfig}>Aceptar</button>
				</div>
			</div>
		</Modal>
	</div>
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto">
			<div class="text-center mb-20">
				<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
					En esta seccion podras configurar el tema de tu sistema y el idioma en el que se te
					mostrara la informacion.
				</p>
			</div>
			<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
				<div class="p-2 sm:w-1/2 w-full">
					<div class="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="3"
							class=" w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
							<path d="M22 4L12 14.01l-3-3" />
						</svg>
						<span class="title-font font-medium">Idioma: {configUser?.idioma}</span>
					</div>
				</div>
				<div class="p-2 sm:w-1/2 w-full">
					<div class="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="3"
							class=" w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
							<path d="M22 4L12 14.01l-3-3" />
						</svg>
						<span class="title-font font-medium">Tema predeterminado: {configUser?.tema}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</ContenedorPrincipal>

<style>
	.modal {
		background-color: white;
		padding: 2em;
		border-radius: 0.5em;
		min-width: 30vw;
	}
</style>
