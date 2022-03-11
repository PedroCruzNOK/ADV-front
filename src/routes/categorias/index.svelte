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
	import { getAllRows, getRow, deleteRow } from '$lib/Categoria.js';

	let data = [];
	let metodos = { getRow, getAllRows, deleteRow };

	onMount(async () => {
		data = await getAllRows();
	});
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="CATEGORIAS" />
	<Agregar {data} titulo="Agregar Categoria" cuerpo="categoria" />
	<Datatable {settings} bind:data class="tablaInfo">
		<thead>
			<th data-key="idCategoria">ID</th>
			<th data-key="categoria">CATEGORIA</th>
			<th data-key="area">AREA A LA QUE PERTENECE</th>
			<th data-key="acciones">ACCIONES</th>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.idCategoria}</td>
					<td>{row.categoria}</td>
					<td>{row.area.nombreArea}</td>
					<td class="flex inline-block justify-center">
						<Ver titulo="Detalles de Categoria" cuerpo="categoria" id={row.idCategoria} {metodos} />
						<Editar titulo="EDITAR CATEGORIA" cuerpo="categoria" />
						<Eliminar
							titulo="ELIMINAR CATEGORIA"
							cuerpo="categoria"
							id={row.idCategoria}
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
