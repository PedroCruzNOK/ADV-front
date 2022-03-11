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
	import { getAllRows, addRow, getRow, deleteRow, updateRow } from '$lib/TipoPregunta.js';

	let data = [];
	let metodos = {};

	metodos = { getAllRows, addRow, getRow, deleteRow, updateRow };
	onMount(async () => {
		data = await getAllRows();
	});
	
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="TIPOS DE PREGUNTAS" />
	<Agregar bind:updateData={data} {metodos} titulo="Agregar TIpo de Pregunta" cuerpo="tipopregunta" />
	<Datatable {settings} bind:data class="tablaInfo">
		<thead class="fondo2">
			<th data-key="idTipoPregunta"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">ID</th>
			<th data-key="nombreTipoPregunta"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">Nombre Tipo de Pregunta</th>
			<th data-key="acciones"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">ACCIONES</th>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each $rows as row}
				<tr>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.idTipoPregunta}</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.nombreTipoPregunta}</td>
					<td class="flex inline-block justify-center px-6 py-4 whitespace-nowrap">
						<Ver titulo="VER TIPO PREGUNTA" cuerpo="tipopregunta" id={row.idTipoPregunta} {metodos} />
						<Editar
							titulo="EDITAR TIPO PREGUNTA"
							cuerpo="tipopregunta"
							id={row.idTipoPregunta}
							{metodos}
							{row}
							bind:updateData={data}
						/>
						<Eliminar
							titulo="ELIMINAR TIPO PREGUNTA"
							cuerpo="tipopregunta"
							id={row.idTipoPregunta}
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