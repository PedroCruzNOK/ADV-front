<script>
	export let pregunta = {};
    console.log(pregunta);
</script>

<section class="text-gray-600 body-font">
	<div class="grid grid-cols-6 gap-4">
		<div class="col-start-2 col-span-4 ...">
			<div class=" py-3 mx-auto flex items-center">
				<div
					class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 lg:w-1/1 md:w-1/1 w-full  md:text-left text-center"
				>
					<h2 class="text-xs  tracking-widest font-medium title-font mb-1">Pregunta</h2>
					<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
						{pregunta.pregunta}
					</h1>
				</div>
			</div>
			
		</div>
		
	</div>
    <div class="grid grid-cols-6 gap-4">
		<div class="col-start-2 col-span-4 ...">
			<div class=" py-3 mx-auto flex items-center">
				<div
					class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 lg:w-1/1 md:w-1/1 w-full  md:text-left text-center"
				>
					<h2 class="text-xs  tracking-widest font-medium title-font mb-1">Tipo de pregunta</h2>
					<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
						{pregunta.tipoPregunta.nombreTipoPregunta}
					</h1>
				</div>
			</div>
			
		</div>
		
	</div>
    <div class="grid grid-cols-6 gap-4">
		<div class="col-start-2 col-span-4 ...">
			<div class=" py-3 mx-auto flex items-center">
				<div
					class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 lg:w-1/1 md:w-1/1 w-full  md:text-left text-center"
				>
					<h2 class="text-xs  tracking-widest font-medium title-font mb-1">Descripcion</h2>
					<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
						{pregunta.descripcion}
					</h1>
				</div>
			</div>
			
		</div>
		
	</div>
    <div class="grid grid-cols-6 gap-4">
		<div class="col-start-2 col-span-4 ...">
			<div class=" py-3 mx-auto flex items-center">
				<div
					class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 lg:w-1/1 md:w-1/1 w-full  md:text-left text-center"
				>
					<h2 class="text-xs  tracking-widest font-medium title-font mb-1">Respuestas</h2>
                 
                        <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
                            {pregunta.respuesta}
					    </h1>
                    
					
				</div>
			</div>
			
		</div>
		
	</div>
</section>