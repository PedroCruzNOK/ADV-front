<script>
	import { onMount } from 'svelte';

	export let usuario = {};
	export let getRoles;

	let roles = [];

	onMount(async () => {
		roles = await getRoles();
	});
</script>

<form class="w-full ">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="nombre"
			>
				Nombre
			</label>
			<input
				class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="nombre"
				type="text"
				placeholder="Nombre"
				bind:value={usuario.nombre}
			/>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="apellido-paterno"
			>
				Apellido Paterno
			</label>
			<input
				class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="apellido-paterno"
				type="text"
				placeholder="Apellido Paterno"
				bind:value={usuario.apellidoPaterno}
			/>
		</div>
		<div class="w-full md:w-1/2 px-3">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="apellido-materno"
			>
				Apellido Materno
			</label>
			<input
				class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="apellido-materno"
				type="text"
				placeholder="Apellido Materno"
				bind:value={usuario.apellidoMaterno}
			/>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="nombre-usuario"
			>
				Nombre de usuario
			</label>
			<input
				class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="nombre-usuario"
				type="text"
				placeholder="Nombre de usuario"
				bind:value={usuario.usuario}
			/>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-password"
			>
				Password
			</label>
			<input
				class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="grid-password"
				type="password"
				placeholder="Password"
				bind:value={usuario.password}
			/>
			<p class="text-gray-600 text-xs italic">Haz tu contraseña lo mas segura posible</p>
		</div>
	</div>
	<div class="col-span-6 sm:col-span-3">
		<label for="country" class="block text-sm font-medium text-gray-700">Rol </label>
		<select
			bind:value={usuario.idRol}
			id="country"
			name="country"
			autocomplete="country"
			class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
		>
			{#each roles as rol}
				<option value={rol.idRolUsuario}>{rol.rol}</option>
			{/each}
		</select>
	</div>
	<div class="mt-4 space-y-4">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
			Selecciona un estado para este usuario
		</label>
		<div class="flex items-center">
			<input
				bind:group={usuario.activo}
                value={1}
				id="Activo"
				name="activo"
				type="radio"
				class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
			/>
			<label for="Activo" class="ml-3 block text-sm font-medium text-gray-700"> Activo </label>
		</div>
		<div class="flex items-center">
			<input
				id="inactivo"
                bind:group={usuario.activo}
                value={0}
				name="activo"
				type="radio"
				class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
			/>
			<label for="inactivo" class="ml-3 block text-sm font-medium text-gray-700"> Inactivo </label>
		</div>
	</div>
</form>
