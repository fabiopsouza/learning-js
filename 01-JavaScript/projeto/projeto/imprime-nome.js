var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function (pacienteTr){
	
	var pacienteAtual = montarPaciente(pacienteTr);
	
	console.log(pacienteAtual.nome);
});