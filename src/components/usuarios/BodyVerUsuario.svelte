<script>
	export let usuario = {};

</script>

<form class="w-full ">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Nombre:
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{usuario.nombre}
			</label>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Apellido Paterno
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{usuario.apellidoPaterno}
			</label>
		</div>
		<div class="w-full md:w-1/2 px-3">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-last-name"
			>
				Apellido Materno
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{usuario.apellidoMaterno}
			</label>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Nombre de usuario
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{usuario.usuario}
			</label>
		</div>
	</div>
	<div class="mt-4 space-y-4">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
			Estado del usuario:
		</label>
		<div class="flex items-center">
			<input
				id="activo"
				name="activo"
				type="radio"
				class="focus:ring-indigo-500 h-4 w-4  border-gray-300"
				disabled
				checked={usuario.activo == 1 ? 'checked' : ''}
			/>
			<label for="activo" class="ml-3 block text-sm font-medium text-gray-700"> Activo </label>
			<input
				id="inactivo"
				name="activo"
				type="radio"
				class="focus:ring-indigo-500 h-4 w-4  border-gray-300"
				disabled
				checked={usuario.activo == 0 ? 'checked' : ''}
			/>
			<label for="inactivo" class="ml-3 block text-sm font-medium text-gray-700"> Inactivo </label>
		</div>
	</div>
</form>
