<script>
	import Titulo from '../../components/Titulo.svelte';
	import Modal from '../../components/Modal.svelte';
	import VerBody from '../../components/notificaciones/VerBody.svelte';
	import EliminarBody from '../../components/notificaciones/EliminarBody.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import { Datatable, rows } from 'svelte-simple-datatables';
	import { onMount } from 'svelte';
	import { getAllRows, getRow, deleteRow } from '$lib/Notificacion.js';
	import { settings } from '$lib/config/SettingsDataTable.js';

	let openModalVer = false;
	let openModalEliminar = false;
	let data = [];
	let idRow = undefined;

	onMount(async () => {
		data = await getAllRows();
	});
</script>

<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="NOTIFICACIONES" />

	<Modal open={openModalVer} onClose={() => (openModalVer = false)}>
		<div class="modal">
			<Titulo tituloPrincipal="Detalle Notificacion" />
			<br />
			<VerBody {getRow} {idRow} />
			<button
				class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
				on:click={() => (openModalVer = false)}
			>
				Cerrar
			</button>
		</div></Modal
	>

	<Modal open={openModalEliminar} onClose={() => (openModalEliminar = false)}>
		<div class="modal">
			<Titulo tituloPrincipal="Eliminar notificacion" />
			<br />
			<EliminarBody />
			<button
				class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
				on:click={() => (openModalEliminar = false)}
			>
				Cancelar
			</button>
			<button
				class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2"
				on:click={async () => {
					openModalEliminar = false;
					let res = await deleteRow(idRow);
					if (res.status) {
						data = await getAllRows();
					}
				}}
			>
				Aceptar
			</button>
		</div></Modal
	>

	<Datatable {settings} bind:data>
		<thead>
			<th data-key="idNotificacion">ID</th>
			<th data-key="titulo">Mensaje</th>
			<th data-key="fechaHora">Fecha</th>
			<th data-key="idUsuario">Responsable de la notificacion</th>
			<th data-key="acciones">Acciones</th>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.idNotificacion}</td>
					<td>{row.titulo}</td>
					<td>{row.fechaHora}</td>
					<td
						>{row.candidato?.nombre}
						{row.candidato?.apellidoPaterno}
						{row.candidato?.apellidoMaterno}</td
					>
					<td class="flex inline-block justify-center">
						<button
							on:click={() => {
								idRow = row.idNotificacion;
								openModalVer = true;
							}}
						>
							<i class="bi bi-eye p-3" />
						</button>

						<button
							on:click={() => {
								idRow = row.idNotificacion;
								openModalEliminar = true;
							}}
						>
							<i class="bi bi-trash p-3" />
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</Datatable>
</ContenedorPrincipal>

<style>
	th:first-child {
		width: 72px;
	}
	td {
		text-align: center;
		padding: 4px 0;
	}
</style>
