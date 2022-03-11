<script>
	import Titulo from '../../components/Titulo.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import { Datatable, rows } from 'svelte-simple-datatables';
	import { onMount } from 'svelte';
	import Agregar from '../../components/modales/Agregar.svelte';
	import Editar from '../../components/modales/Editar.svelte';
	import Eliminar from '../../components/modales/Eliminar.svelte';
	import Ver from '../../components/modales/Ver.svelte';

	import { settings } from '$lib/config/SettingsDataTable.js';
	import { getAllRows, addRow, getRow, deleteRow, updateRow } from '$lib/Usuario.js';
	import { getAllRows as getRoles } from '$lib/RolUsuario.js';

	let data = [];
	let metodos = {};

	metodos = { getAllRows, addRow, getRow, getRoles, deleteRow, updateRow };

	onMount(async () => {
		data = await getAllRows();
	});
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="USUARIOS" />
	<Agregar bind:updateData={data} {metodos} titulo="Agregar Usuario" cuerpo="usuario" />
	<Datatable {settings} bind:data class="min-w-full divide-y divide-gray-200 ">
		<thead class="fondo2">
			<th
				data-key="idUsuarios"
				scope="col"
				class="px-6 py-3 text-left  font-medium  uppercase tracking-wider">ID</th
			>
			<th
				data-key="nombre"
				scope="col"
				class="px-6 py-3 text-left  font-medium  uppercase tracking-wider">NOMBRE</th
			>
			<th
				data-key="usuario"
				scope="col"
				class="px-6 py-3 text-left  font-medium  uppercase tracking-wider">USUARIO</th
			>
			<th
				data-key="activo"
				scope="col"
				class="px-6 py-3 text-left  font-medium uppercase tracking-wider">ESTADO</th
			>
			<th
				data-key="acciones"
				scope="col"
				class="px-6 py-3 text-center  font-medium  uppercase tracking-wider"
				>ACCIONES</th
			>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each $rows as row}
				<tr>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.idUsuarios}</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="flex items-center">
							<div class="ml-4">
								<div class="text-sm font-medium texto1">{row.nombre}  {row.apellidoPaterno}  {row.apellidoMaterno}</div>
								<div class="text-sm texto2">ROL: {row.rol.rol}</div>
							</div>
						</div>
					</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.usuario}</td>
					{#if row.activo == 1}
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white estadoActivo rounded"
								>Activo
							</span>
						</td>
					{:else}
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white estadoInactivo rounded"
								>Inactivo</span
							>
						</td>
					{/if}
					<td class="flex inline-block justify-center px-6 py-4 whitespace-nowrap">
						<Ver titulo="VER USUARIO" cuerpo="usuario" id={row.idUsuarios} {metodos} />
						<Editar
							titulo="EDITAR USUARIO"
							cuerpo="usuario"
							id={row.idUsuarios}
							{metodos}
							bind:updateData={data}
						/>
						<Eliminar
							titulo="ELIMINAR USUARIO"
							cuerpo="usuario"
							id={row.idUsuarios}
							{metodos}
							{row}
							bind:updateData={data}
						/>
					</td>
				</tr>
			{/each}
		</tbody>
	</Datatable>
</ContenedorPrincipal>

