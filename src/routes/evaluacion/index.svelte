
<script>
    import ModalBienvenida from "../../components/evaluacion/ModalBienvenida.svelte"
    import NavBar from "../../components/evaluacion/NavBar.svelte"
    import Pestanas from "../../components/evaluacion/Pestanas.svelte"
    import Seccion1 from "../../components/evaluacion/Seccion1.svelte"

    let items = [
		{ label: 'Candidato', value: 1, component: Seccion1 },
	
	];
</script>
<ModalBienvenida />
<NavBar />
<Pestanas {items} />