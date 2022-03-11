<script>
	export let tipoPregunta = {};
    
</script>

<form class="w-full ">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Pregunta:
			</label>
			<label
				class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
				for="grid-first-name"
			>
				{tipoPregunta.nombreTipoPregunta}
			</label>
		</div>
	</div>
</form>