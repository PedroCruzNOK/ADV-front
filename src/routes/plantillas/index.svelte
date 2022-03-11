<script>
	import Titulo from '../../components/Titulo.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import { Datatable, rows } from 'svelte-simple-datatables';
	import { onMount } from 'svelte';
	import Api from '$lib/Api';
	import Agregar from '../../components/modales/Agregar.svelte';
	import Editar from '../../components/modales/Editar.svelte';
	import Eliminar from '../../components/modales/Eliminar.svelte';
	import Ver from '../../components/modales/Ver.svelte';

	let data = [];
	const getAll = async () => {
		let config = {
			endPoint: 'api/v1/usuario',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await Api(config);
		if (res.status) {
			data = res.data;
		} else {
			console.log(res);
		}
	};
	onMount(async () => {
		getAll();
	});


	const settings = {
		columnFilter: true,
		sortable: true,
		rowPerPage: 10,
		scrollY: false,
		labels: {
			search: 'Buscar...', // search input placeholer
			filter: 'Filtrar', // filter inputs placeholder
			noRows: 'No se encontraron entidades',
			info: 'Ver {start} De {end} Total {rows} Registros',
			previous: 'Anterior',
			next: 'Siguiente'
		}
	};

</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="PLANTILLAS" />
	<Agregar {data} {getAll}  titulo="Agregar Plantilla" cuerpo="plantilla"/>
	<Datatable {settings} bind:data class="tablaInfo">
		<thead>
			<th data-key="idUsuarios">ID</th>
			<th data-key="nombre">NOMBRE PLANTILLA</th>
			<th data-key="apellidoPaterno">DESCRIPCION</th>
			<th data-key="acciones">ACCIONES</th>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.idUsuarios}</td>
					<td>{row.nombre}</td>
					<td>{row.apellidoPaterno}</td>
					<td class="flex inline-block justify-center"><Ver titulo="VER PLANTILLA" cuerpo="plantilla"/><Editar titulo="EDITAR PLANTILLA" cuerpo="plantilla"/> <Eliminar titulo="ELIMINAR PLANTILLA" cuerpo="plantilla"/></td>
					
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