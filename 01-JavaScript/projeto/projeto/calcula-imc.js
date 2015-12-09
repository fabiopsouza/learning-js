function calcularImcs(){
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, function(pacienteTr){	
		
		var pacienteAtual = montarPaciente(pacienteTr);
		
		var imc = pacienteAtual.pegaImc();
		
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		
		console.log(imc);
	});
}

var button = document.getElementById("calcula-imcs");

//Somente um evento
//button.onclick = calcularImcs;

//Lista de eventos
button.addEventListener("click", calcularImcs);
button.addEventListener("click", function(){
	console.log("cancluando Imcs...");
});