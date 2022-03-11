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
	import { getAllRows, addRow, getRow, deleteRow, updateRow } from '$lib/Pregunta.js';
	import { getAllRows as getTipoPregunta } from '$lib/TipoPregunta.js';

	let data = [];
	let metodos = {};
	
	onMount(async () => {
		data = await getAllRows();
	});

	metodos = { getAllRows, addRow, getRow, getTipoPregunta,deleteRow, updateRow};
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="BANCO DE PREGUNTAS" />
	<Agregar bind:updateData={data} {metodos} titulo="Agregar Pregunta" cuerpo="banco" />
	<Datatable {settings} bind:data class="tablaInfo">
		<thead class="fondo2">
			<th data-key="idArea"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">ID</th>
			<th data-key="nombreArea"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">pregunta</th>
			<th data-key="nombreSeccion"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">tipo de pregunta</th>
			<th data-key="nombreSeccion"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">descripcion</th>
			<th data-key="acciones"class="px-6 py-3 text-center  font-medium  uppercase tracking-wider">ACCIONES</th>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each $rows as row}
				<tr>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.idPregunta}</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.pregunta}</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.tipoPregunta.nombreTipoPregunta}</td>
					<td class="px-6 py-4 whitespace-nowrap texto1">{row.descripcion}</td>
					<td class="flex inline-block justify-center">
						<Ver titulo="VER PREGUNTA" cuerpo="banco"
							id={row.idPregunta} {metodos}
						/>
						<Editar titulo="EDITAR PREGUNTA" cuerpo="banco"
							id={row.idPregunta}
							{metodos}
							{row}
							bind:updateData={data}
						/>
						<Eliminar titulo="ELIMINAR PREGUNTA" cuerpo="banco" 
							id={row.idPregunta}
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

