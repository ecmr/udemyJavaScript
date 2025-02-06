function Tarefas() {
  const inputTarefa = document.querySelector('.input-tarefa');
  const btnAddTarefa = document.querySelector('.btn-adicionar');
  const ulTarefas = document.querySelector('.tarefas');

  function criaElementLi(){
    const li = document.createElement('li');
    return li;
  }

  function criaTarefa(valor){
    const li = criaElementLi();
    
  }

  btnAddTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; 

    console.log(inputTarefa.value);
  })


}
Tarefas();
