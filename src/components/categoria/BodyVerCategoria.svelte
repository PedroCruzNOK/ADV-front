<script>
	export let categoria = {};
	console.log(categoria);
	let respuestas = [];
</script>

<form class="w-full ">
	<!-- This is an example component -->
	<div>
		<section class="">
			<div class="max-w-6xl mx-auto px-5 py-24 ">
				<div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h1
						class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"
					>
						{categoria.categoria}
					</h1>
					<p class="lg:w-1/2 w-full leading-relaxed text-base">
						{categoria.descripcion}
					</p>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full">
						<div class="border border-gray-300 p-6 rounded-lg">
							<h2 class="text-lg  font-medium title-font mb-2">Área</h2>
							<p class="leading-relaxed text-base">
								{categoria.area.nombreArea}
							</p>

							<div class="text-center mt-2  w-full">
								<h2 class="text-lg  font-medium title-font mb-2">Sección</h2>
								<p class="leading-relaxed text-base">
									{categoria.area.seccion.nombreSeccion}
								</p>
								<p class="leading-relaxed text-base">
									{categoria.area.seccion.descripcion}
								</p>
							</div>
						</div>
					</div>

					<div class="w-full">
						<div class="border border-gray-300 p-6 rounded-lg">
							<h2 class="text-lg  font-medium title-font mb-2">Preguntas</h2>
							<div>
								<table>
									<thead>
										<th> Num </th>

										<th> Pregunta </th>
										<th> Tipo </th>
										<th>Respuestas</th>
									</thead>

									{#each categoria.preguntas as item, key}
										<tr>
											<td>{key + 1}</td>
											<td> {item.pregunta}</td>
											<td>{item.tipoPregunta.nombreTipoPregunta}</td>
											<td>
                                                {item.respuesta}
											</td>
										</tr>
									{/each}
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</form>
