<script>
    import Agregar from "../modales/Agregar.svelte";
    import Radio from '../Radio.svelte';
    let group = 1;
</script>
<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Selecciona una Area para esta categoria
		</label>
		<select
			class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
			placeholder="Regular input"
		>
			<option>A regular sized select input</option>
			<option>Another option</option>
			<option>And one more</option>
		</select>
		<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
			<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"
				><path
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				/></svg
			>
		</div>
	</div>
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Nombre De la Categoria
		</label>
		<input
			class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="nombre"
			type="text"
			placeholder="Nombre"
		/>
	</div>
    <div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Descripción
		</label>
		<textarea class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
	</div>
    <div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10 flex inline-block justify-end">
        <Agregar   titulo="Agregar Pregunta de forma manual" cuerpo="addpreguntamanual" />
        <Agregar   titulo="Agregar Pregunta desde el banco" cuerpo="addpreguntabanco" />
    </div>
    <div class="flex inline-block m-2">
        <Radio bind:group value={0} class="p-3"></Radio>
        <p >
            ejemplo
        </p>
        <button class="" >
            <i class="bi bi-trash p-6">Eliminar</i>
        </button>
    </div>
       
   
</div>