<script>
	import Titulo from '../../components/Titulo.svelte';
    //import { goto } from '$app/navigation';
	//import Api from '$lib/Api';

	let user = '';
	let password = '';
	let mensaje = '';

	//async function login() {
	//	let config = {
	//		endPoint: 'api/v1/auth',
	//		method: 'POST',
	//		body: JSON.stringify({
	//			user,
	//			password
	//		}),
	//		headers: {
	//			'Content-Type': 'application/json'
	//		}
	//	};

	//	const res = await Api(config);

	//	if (res.status) {
	//		document.cookie = `JWT=${res.token}; path=/;  max-age=3600;`;
	//		goto('/inicio');
	//	} else {
	//		mensaje = res.mensaje;
	//	}
	//}
</script>

<div class="container w-full md:w-5/5 xl:w-2/5  mx-auto px-20 mt-10">
	<Titulo tituloPrincipal="Iniciar sesión" />
	<div
		class="mb-10 mt-2 ml-0 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 px-10 py-5"
	>
		<center>
			<form on:submit|preventDefault>
				<label class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" for="user"
					>Nombre de usuario:
				</label>
				<input
					class="appearance-none block w-full bg-white text-blue-700 border border-blue-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500"
					type="text"
					name="txtUsu"
					id="user"
					bind:value={user}
				/>
				<br />
				<label
					class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
					for="password"
					>Contraseña:
				</label>
				<input
					class="appearance-none block w-full bg-white text-blue-700 border border-blue-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500"
					type="password"
					name="txtPass"
					id="password"
					bind:value={password}
				/>
				<br />
				<input
					class="del-btn block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
					role="menuitem"
					type="submit"
					value="Iniciar sesión"
					on:click={login}
				/>
			</form>

			<span>{mensaje}</span>
		</center>
	</div>
</div>
