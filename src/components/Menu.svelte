<script>
</script>

<div class="row">
	<div
		id="sidebar"
		class="h-screen w-16 menu fondo1 encabezado px-4 flex items-center nunito static fixed shadow"
	>
		<ul class="list-reset ">
			<li class="my-2 md:my-0">
				<a href="/inicio" class="block py-2 pl-0   no-underline  itemMenu">
					<i class="bi bi-house iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Inicio </span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/candidatos" class="block py-2  pl-0   no-underline itemMenu">
					<i class="bi bi-people iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Mis candidatos </span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/plantillas" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-files  iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Plantillas </span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/secciones" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-folder2-open  iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Secciones </span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/areas" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-pin-map iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Areas</span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/categorias" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-bookmarks iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Categorias</span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/preguntas" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-question-square iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Banco de preguntas</span></a
				>
				
			</li>
            <li class="my-2 md:my-0">
				<a href="/tipoPregunta" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-patch-question iconMenu inline-block"></i>
					<span class="w-full inline-block pl-1">Tipo de pregunta</span></a
				>
                
				
			</li>
			<li class="my-2 md:my-0">
				<a href="/reportes" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-clipboard-data iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Reportes </span></a
				>
			</li>
			<li class="my-2 md:my-0">
				<a href="/usuarios" class="block py-2  pl-0   no-underline  itemMenu">
					<i class="bi bi-gear  iconMenu inline-block" />
					<span class="w-full inline-block pl-1">Configuración</span></a
				>
			</li>
		</ul>
	</div>

	<div class="flex flex-row flex-wrap flex-1 flex-grow content-start ">
		<div class="sm:h-20 lg:h-20 w-full flex flex-wrap">
			<nav
				id="header1"
				class="fondo2 w-auto flex-1 border-b-1 encabezado order-1 lg:order-2"
			>
				<div class="flex h-full justify-between items-center">
					<br />
					<div class="flex relative inline-block">
						<div class="relative text-sm">
							<div class="btn-indigo flex items-center focus:outline-none mr-3">
								<span class="hidden md:inline-block mx-2"> Hola!: Juan perez </span>
								<div class="btn-red flex items-center mx-2">
									<div class=" relative inline-block text-left dropdown">
										<button
											class=""
											type="button"
											aria-haspopup="true"
											aria-expanded="true"
											aria-controls="headlessui-menu-items-117"
										>
											<i class="bi bi-bell  iconMenu inline-block" />
										</button>
										<div
											class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
										>
											<div
												class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												aria-labelledby="headlessui-menu-button-1"
												id="headlessui-menu-items-117"
												role="menu"
											>
												<div class="py-1">
													<a
														href="/notificaciones"
														class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
														role="menuitem">Notificaciones</a
													>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="btn-red flex items-center mx-2">
									<div class=" relative inline-block text-left dropdown">
										<button
											class=""
											type="button"
											aria-haspopup="true"
											aria-expanded="true"
											aria-controls="headlessui-menu-items-117"
										>
											<i class="bi bi-person-badge  iconMenu inline-block" />
										</button>
										<div
											class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
										>
											<div
												class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												aria-labelledby="headlessui-menu-button-1"
												id="headlessui-menu-items-117"
												role="menu"
											>
												<div class="py-1">
													<a
														href="/perfil"
														class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
														role="menuitem">Perfil</a
													>
												</div>
												<div class="py-1">
													<a
														href="/miConfiguracion"
														class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
														role="menuitem">Configuración</a
													>
												</div>
												<div class="py-1">
													<a
														href="/cuenta"
														class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
														role="menuitem">Cuenta</a
													>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="btn-red flex items-center mx-2">
									<div class=" relative inline-block text-left dropdown">
										<button
											class=""
											type="button"
											aria-haspopup="true"
											aria-expanded="true"
											aria-controls="headlessui-menu-items-117"
										>
											<i class="bi bi-box-arrow-right iconMenu inline-block" />
										</button>
										<div
											class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
										>
											<div
												class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												aria-labelledby="headlessui-menu-button-1"
												id="headlessui-menu-items-117"
												role="menu"
											>
												<div class="py-1">
													<a
														href="/login"
														tabindex="3"
														class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
														role="menuitem">Cerrar sesión</a
													>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</div>

<style>
	.dropdown:focus-within .dropdown-menu {
		opacity: 1;
		transform: translate(0) scale(1);
		visibility: visible;
	}
	#sidebar {
		transition: ease-in-out all 0.5s;
		z-index: 2;
	}
	#sidebar span {
		opacity: 0;
		position: absolute;
		transition: ease-in-out all 0.4s;
	}

	#sidebar:hover {
		width: 11%;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		/*shadow-2xl*/
	}

	#sidebar:hover span {
		opacity: 1;
	}

	
</style>
