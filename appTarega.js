class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
      this.completa = false;
    }
  
    marcaCompleta() {
      this.completa = true;
    }
  
    get descricaoTarefa() {
      return this.descricao;
    }
  }
  
  class GerenciadorDeTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adcionarTarefa(descricao) {
      const tarefa = new Tarefa(descricao);
      this.tarefas.push(tarefa);
    }
  
    listarTarefas() {
      this.tarefas.forEach((tarefa, index) => {
        console.log(
          `${index + 1}: ${tarefa.descricaoTarefa} - ${
            tarefa.completa ? "Completa" : "Pendente"
          }`
        );
      });
    }
  
    removerTarefa(index) {
      this.tarefas.splice(index - 1, 1);
    }
  }
  
  let gerenciador = new GerenciadorDeTarefas();
  
  gerenciador.adcionarTarefa("Estudar Node.js");
  gerenciador.adcionarTarefa("Praticar node");
  gerenciador.listarTarefas();
  
  gerenciador.tarefas[0].marcaCompleta();
  gerenciador.removerTarefa(2);
  gerenciador.listarTarefas();
  