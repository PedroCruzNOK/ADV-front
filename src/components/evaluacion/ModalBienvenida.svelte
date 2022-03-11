<script>
		import Modal from '../../components/Modal.svelte';
	let openModal = true;
</script>



<Modal open={openModal} onClose={() => (openModal = false)}>
	<div class="modal">
		<section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs tracking-widest font-medium title-font mb-1">GRUPO ENTHOUS DERECHOS DE AUTORIA</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">HOLA BIENVENIDO JUAN CARLOS ESTA SERA TU EVALUACION!</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Instrucciones y mensaje debienvenida donde se daran consejos etc. Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-10 md:mb-6 mt-10">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
                    Ingresa tu codigo para comenzar
                </label>
                <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                />
            </div>
        </section>
		<button
			class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none" on:click={() => (openModal = false)}
		>
			
		<i class="bi bi-star tam"></i>
			<span class="ml-4 flex items-start flex-col leading-none">
				<span class=" text-gray-600 mb-1">Comnezar evaluacion</span>
				
			</span>
		</button>
	</div>
</Modal>

<style>
    .tam{
        font-size: 24px;
    }
</style>