<script>

	import { Datatable, rows } from 'svelte-simple-datatables';
	import { onMount } from 'svelte';
	import Api from '$lib/Api';
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
<Datatable {settings} bind:data class="tablaInfo">
    <thead>
        <th data-key="idUsuarios">ID</th>
        <th data-key="nombre">PREGUNTA</th>
        <th data-key="apellidoPaterno">TIPO DE PREGUNTA</th>
        <th data-key="acciones">CATEGORÍA</th>
  <th data-key="acciones">SELECCIONAR</th>
    </thead>
    <tbody>
        {#each $rows as row}
            <tr>
                <td>{row.idUsuarios}</td>
                <td>{row.nombre}</td>
                <td>{row.apellidoPaterno}</td>
      <td>{row.apellidoMaterno}</td>
                <td class="flex inline-block justify-center"><input type="checkbox"/>
                </td>
                
            </tr>
        {/each}
    </tbody>
</Datatable>