<div class="row">
    <div class="flex flex-row flex-wrap flex-1 flex-grow content-start ">
        <div class="sm:h-20 lg:h-20 w-full flex flex-wrap"> 
            <nav id="header1" class="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">
                <div class="flex h-full justify-between items-center">
                    <br>
                    <div class="flex relative inline-block">
                        <div class="relative text-sm">
                            <div  class="btn-indigo flex items-center focus:outline-none mr-3">
                                <span class="hidden md:inline-block mx-2"> Hola!: Juan perez  </span> 
                                <span class="hidden md:inline-block mx-2"> Tu tiempo es de 25:12 seg.  </span> 
                                <div class="btn-red flex items-center mx-2" >  
                                    <div class=" relative inline-block text-left dropdown">
                                        <button class="" 
                                                type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                                <i class="bi bi-box-arrow-right iconMenu inline-block"></i> 
                                        </button>
                                        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                            <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                                <div class="py-1">
                                                    <a href="/login" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Cerrar sesión</a>
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
        opacity:1;
        transform: translate(0) scale(1);
        visibility: visible;
}
    #sidebar {
        transition: ease-in-out all .5s;
        z-index: 2;
    }
    #sidebar span {
        opacity: 0;
        position: absolute;
        transition: ease-in-out all .4s;
    }
    
    #sidebar:hover {
        width: 11%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        /*shadow-2xl*/
    }
    
    #sidebar:hover span {
        opacity: 1;
    }
    
    .iconMenu{
        font-size: 22px;
    }
    
</style>