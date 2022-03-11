<script>
	import Titulo from '../../components/Titulo.svelte';
	import ContenedorSecundario from '../../components/ContenedorSecundario.svelte';
	import { Datatable, rows } from 'svelte-simple-datatables';
	import { onMount } from 'svelte';
	import Api from '$lib/Api';
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
<ContenedorSecundario>
	<Titulo tituloPrincipal="Reporte Reclutadores" />
	<Datatable {settings} bind:data class="tablaInfo">
		<thead>
			<th data-key="idUsuarios">ID</th>
			<th data-key="nombre">NOMBRE RECLUTADOR</th>
			<th data-key="acciones">REPORTE</th>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.idUsuarios}</td>
					<td>{row.nombre} {row.apellidoPaterno}</td>
					<td class="flex inline-block justify-center"><Ver titulo="VER RECLUTADOR" cuerpo="reportereclutador"/> <i class="bi bi-printer p-3"></i><i class="bi bi-cloud-download p-3"></i></td>
					
				</tr>
			{/each}
		</tbody>
	</Datatable>
</ContenedorSecundario>

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