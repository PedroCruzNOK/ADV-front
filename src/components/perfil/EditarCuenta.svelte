<script>
	import Titulo from "../Titulo.svelte"
    import Modal from '@svelte-parts/modal'
    let open = false
</script>
  
    <button on:click={() => open = true} class=" bg-transparent border border-gray-500  text-gray-500  font-bold py-2 px-4 rounded-full">
    Editar Cuenta
    </button>
  
    <Modal open={open} onClose={() => open = false}>
        <div class="modal">
			<form class="w-full ">
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
						<Titulo tituloPrincipal="Editar mi cuenta" />
						<br>
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-first-name"
						>
							Nombre de usuario para tu inicio de sesion
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							placeholder="Doe"
						/>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password"
						>
							Contraseña anterior
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-password"
							type="password"
							placeholder="******************"
						/>
					
					</div>
				</div>
				
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password"
						>
							Nueva contraseña
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-password"
							type="password"
							placeholder="******************"
						/>
						<p class="text-gray-600 text-xs italic">Haz tu contraseña lo mas segura posible</p>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password"
						>
							Repite tu nueva contraseña
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-password"
							type="password"
							placeholder="******************"
						/>
						<p class="text-gray-600 text-xs italic">Haz tu contraseña lo mas segura posible</p>
					</div>
				</div>
			</form>

			<div class="flex justify-end pt-2">
				<button class="px-4 bg-transparent p-3 rounded-lg  hover:bg-gray-100mr-2">Cancelar</button>
				<button class="modal-close px-4  p-3 rounded-lg ">Aceptar</button>
			</div>
        </div>
    </Modal>
  
<style>
    .modal {
        background-color: white;
        padding: 2em;
        border-radius: 0.5em;
        min-width: 30vw;
    }
</style>