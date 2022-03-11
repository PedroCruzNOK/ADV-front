<script>
	import Titulo from '../../components/Titulo.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import Modal from '../../components/Modal.svelte';
	import { onMount } from 'svelte';
	import Api from '$lib/Api';

	let openModalEditar = false;
	$: infoUser = {};

	onMount(async () => {
		let config = {
			endPoint: 'api/v1/usuario/cuenta/get',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await Api(config);
		if (res.status) {
			infoUser.usuario = res.data[0].usuario;
			console.log(res.data[0].usuario);
		} else {
			console.log(res);
		}
	});

	const saveCount = async () => {
		let config = {
			endPoint: 'api/v1/usuario/cuenta/update',
			method: 'PUT',
			body: JSON.stringify(infoUser),
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
	<Titulo tituloPrincipal="MI CUENTA" />
	<div class="flex justify-end">
		<button
			on:click={() => {
				saveCount();
				openModalEditar = true;
			}}
			class=" bg-transparent border border-gray-500  text-gray-500  font-bold py-2 px-4 rounded-full"
		>
			Editar mi cuenta
		</button>
	</div>

	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
			<div
				class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
			>
				<h2 class="text-xs  tracking-widest font-medium title-font mb-1">
					Contraseña protegida por seguridad del usuario
				</h2>
				<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
					NOMBRE DE USUARIO (inicio de sesion): {infoUser?.usuario}
				</h1>
			</div>
		</div>
	</section>
</ContenedorPrincipal>

<Modal open={openModalEditar} onClose={() => (openModalEditar = false)}>
	<div class="modal">
		<Titulo tituloPrincipal="EDITAR MI CUENTA" />
		<form class="w-full ">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
					<br>
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nombre de usuario para tu inicio de sesion
					</label>
					<input
						class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
						bind:value={infoUser.usuario}
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Contraseña anterior
					</label>
					<input
						class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-password"
						type="password"
						placeholder=""
						value={infoUser.password}
					/>
				
				</div>
			</div>
			
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Nueva contraseña
					</label>
					<input
						class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-password"
						type="password"
						placeholder=""
						bind:value={infoUser.newPassword}
					/>
					<p class="text-gray-600 text-xs italic">Haz tu contraseña lo mas segura posible</p>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Repite tu nueva contraseña
					</label>
					<input
						class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-password"
						type="password"
						placeholder=""
						bind:value={infoUser.confirmNewPassword}
					/>
					<p class="text-gray-600 text-xs italic">Haz tu contraseña lo mas segura posible</p>
				</div>
			</div>
		</form>
		<button
			class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
			on:click={() => (openModalEditar = false)}
		>
			Cancelar
		</button>
		<button
			class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
			on:click={() => {
				saveCount();
				openModalEditar = false;
			}}
		>
			Actualizar
		</button>
	</div>
</Modal>

<style>
	.modal {
		background-color: white;
		padding: 2em;
		border-radius: 0.5em;
		min-width: 30vw;
	}
</style>
