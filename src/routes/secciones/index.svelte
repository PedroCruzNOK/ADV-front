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

	import { getAllRows, addRow, getRow, deleteRow, updateRow } from '$lib/Seccion.js';

	let data = [];
	let metodos = {};
	onMount(async () => {
		data = await getAllRows();
	});
	metodos = { getAllRows, addRow, getRow, deleteRow, updateRow };
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="SECCIONES" />
	<Agregar bind:updateData={data} {metodos} titulo="Agregar Sección" cuerpo="seccion" />
	<Datatable {settings} bind:data class="tablaInfo">
		<thead>
			<th data-key="idSeccion">ID</th>
			<th data-key="nombreSeccion">SECCION</th>
			<th data-key="descripcion">DESCRIPCION</th>
			<th data-key="acciones">ACCIONES</th>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.idSeccion}</td>
					<td>{row.nombreSeccion}</td>
					<td>{row.descripcion}</td>
					<td class="flex inline-block justify-center">
						<Ver titulo="VER SECCIÓN" cuerpo="seccion" id={row.idSeccion} {metodos} />
						<Editar
							titulo="EDITAR SECCIÓN"
							cuerpo="seccion"
							id={row.idSeccion}
							{metodos}
							{row}
							bind:updateData={data}
						/>
						<Eliminar
							titulo="ELIMINAR SECCIÓN"
							cuerpo="seccion"
							id={row.idSeccion}
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
