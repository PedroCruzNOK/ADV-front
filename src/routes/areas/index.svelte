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
	import { getAllRows, addRow, getRow, deleteRow, updateRow } from '$lib/Area.js';
	import { getAllRows as getSecciones } from '$lib/Seccion.js';

	let data = [];
	let metodos = {};
	
	onMount(async () => {
		data = await getAllRows();
	});

	metodos = { getAllRows, addRow, getRow, getSecciones,deleteRow, updateRow};
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="AREAS" />
	<Agregar bind:updateData={data} {metodos} titulo="Agregar Area" cuerpo="area" />
	<Datatable {settings} bind:data class="tablaInfo">
		<thead class="fondo2">
			<th data-key="idArea"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">ID</th>
			<th data-key="nombreArea"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">AREA</th>
			<th data-key="nombreSeccion"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">SECCION A LA QUE PERTENECE</th>
			<th data-key="acciones"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">ACCIONES</th>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each $rows as row}
				<tr>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.idArea}</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.nombreArea}</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.seccion.nombreSeccion}</td>
					<td class="flex inline-block justify-center">
						<Ver titulo="Ver Área" cuerpo="area"
							id={row.idArea} {metodos}
						/>
						<Editar titulo="EDITAR AREA" cuerpo="area"
							id={row.idArea}
							{metodos}
							{row}
							bind:updateData={data}
						/>
						<Eliminar titulo="ELIMINAR AREA" cuerpo="area" 
							id={row.idArea}
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

<!-- FIN Cuerpo de la vista-->
<style>
	th:first-child {
		width: 72px;
	}
	td {
		text-align: center;
		padding: 4px 0;
	}
</style>
