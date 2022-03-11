<script>
	import Titulo from '../../components/Titulo.svelte';
	import Menu from '../../components/Menu.svelte';
	import ContenedorPrincipal from '../../components/ContenedorPrincipal.svelte';
	import Tab1 from '../../components/reportes/Tab1.svelte';
	import Tab2 from '../../components/reportes/Tab2.svelte';
	import Tab3 from '../../components/reportes/Tab3.svelte';
	import Tabs from '../../components/reportes/Tabs.svelte';

	
	let items = [
		{ label: 'Candidato', value: 1, component: Tab1 },
		{ label: 'Reclutador', value: 2, component: Tab2 },
		{ label: 'Reportes Generales', value: 3, component: Tab3 }
	];
</script>

<!-- Cuerpo de la vista-->
<Menu />
<ContenedorPrincipal>
	<Titulo tituloPrincipal="REPORTES" />
	<br>
	<Tabs {items} />
</ContenedorPrincipal>

<!-- FIN Cuerpo de la vista-->
<style>
	.modal {
		background-color: white;
		padding: 2em;
		border-radius: 0.5em;
		min-width: 30vw;
	}
</style>
