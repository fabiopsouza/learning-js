Meteor.methods({
	adiciona: function(obj){
		Tarefa.insert({nome: obj.nome, data: newDate(), usuario: this.userId});
	},

	remove: function(id){
		Tarefas.remove({_id: id, usuario: this.userId});
	}
});