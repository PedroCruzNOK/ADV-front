<script>
	import Titulo from '../../components/Titulo.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import Modal from '../../components/Modal.svelte';

	import Api from '$lib/Api';
	import { onMount } from 'svelte';
	let files;
	let nickName = '';
	let open;
	let srcImagen = '';

	onMount(async () => {
		let config = {
			endPoint: 'api/v1/usuario/token/perfil',
			method: 'GET'
		};

		const res = await Api(config);

		if (res.status) {
			srcImagen = res.data.urlAvatar;
			nickName = res.data.nickName;
		} else {
			console.log(res.mensaje);
		}
	});

	const savePerfil = async () => {
		let formData = new FormData();
		formData.append('avatar', files[0]);
		formData.append('nickName', nickName);

		let config = {
			endPoint: 'api/v1/usuario/token/perfil',
			method: 'PUT',
			body: formData
		};

		const res = await Api(config);

		if (res.status) {
			open = false;
			srcImagen = res.data.urlAvatar;
			nickName = res.data.nickName;
		} else {
			console.log(res.mensaje);
		}
	};
</script>

<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="MI PERFIL" />
	<div class="flex justify-end">
		<button
			on:click={() => (open = true)}
			class=" bg-transparent border border-gray-500  text-gray-500  font-bold py-2 px-4 rounded-full"
		>
			Editar Perfil
		</button>

		<Modal {open} onClose={() => (open = false)}>
			<div class="modal">
				<form class="w-full" id="form">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
							<Titulo tituloPrincipal="Editar mi perfil" />
							<br />
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-first-name"
							>
								Nombre de usuario
							</label>
							<input
								bind:value={nickName}
								class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-first-name"
							>
								Selecciona una imagen
							</label>
							<input id="fileUpload" type="file" bind:files />

							<div id="preview" />
						</div>
					</div>
				</form>

				<div class="flex justify-end pt-2">
					<button
						class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
						on:click={() => {
							open = false;
						}}>Cancelar</button
					>
					<button class="modal-close px-4  p-3 rounded-lg " on:click={savePerfil}>Aceptar</button>
				</div>
			</div>
		</Modal>
	</div>
	<section class="text-gray-600 body-font">
		<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
			<img
				class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
				alt="hero"
				src={srcImagen}
			/>
			<div class="text-center lg:w-2/3 w-full">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
					{nickName}
				</h1>
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
