<script>
    import Radio from '../Radio.svelte';
	let tipos = [
		{ id: 1, text: `Pregunta Abierta` },
		{ id: 2, text: `Pregunta de Opcion Multiple` },
		{ id: 3, text: `Pregunta de Multiples Opciones` }
	];

	let selected;
    let group = 1;
    let todos = [];
    let todo = {id: '', texto: '',estado: false};

    

    const addTodo = ()=> {
        if (!todo.texto.trim()){
            console.log("texto vacio")
            todo.texto =''
            return
        }
        todo.id = Date.now()
        todos = [...todos, todo]
        console.log(todos)
        todo = {id: '', texto: '',estado: false};

       
        
    }
    const delTodo = id =>{
        todos = todos.filter(item => item.id !== id)
    }
  
    const classIcono=valor=>(
        valor? 'bi bi-arrow-clockwise' : 'bi bi-check2' 
    )
    const classEstado = valor => valor ? 'btn-success' : 'btn-warning'
</script>

<div class="flex flex-wrap -mx-3 mb-6">
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Selecciona un tipo de pregunta
		</label>
		<select
			bind:value={selected}
			class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
		>
			{#each tipos as tipo}
				<option value={tipo.id}>
					{tipo.text}
				</option>
			{/each}
		</select>
	</div>
</div>
{#if selected == 1}
	<div class="w-full md:w-1/1 px-3 mb-10 md:mb-0 mt-10">
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
			Escribe tu pregunta aqui
		</label>
		<textarea
			class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
			rows="4"
		/>
	</div>
{:else if selected == 2}
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
        Escribe tu pregunta aqui
    </label>
    <textarea
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        rows="4"
    />
    <div class="w-full md:w-1/1 px-3 mb-10 md:mb-6 mt-10">
        <form on:submit|preventDefault={addTodo}>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
                Escribe respuesta
            </label>
            <input 
                type="text"
                placeholder="Enter para agregar una nueva tarea"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                bind:value={todo.texto}
            >
        </form>
        {#each todos as item}
            <div class="flex inline-block m-2">
                <Radio bind:group value={0} class="p-3"></Radio>
                <p class={item.estado ? 'text-decoration-line-through': ''}>
                    {item.texto}
                </p>
                <button class="" on:click={delTodo(item.id)}>
                    <i class="bi bi-trash p-6">Eliminar</i>
                </button>
            </div>
        {/each}
    </div>
{:else}
<p>dsgsdg</p>
{/if}

<style>
	input {
		display: block;
		width: 500px;
		max-width: 100%;
	}
</style>
