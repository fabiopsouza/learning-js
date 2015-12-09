var button = document.querySelector("#adicionar-paciente");
button.addEventListener("click", function(){
	
	event.preventDefault(); //Impede comportamento padrão (Refresh do FORM)!!!
	
	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");
	
	var pacienteNovo = "<tr class='paciente'>"+
							"<td class='info-nome'>"+ campoNome.value +"</td>"+
							"<td class='info-peso'>"+ campoPeso.value +"</td>"+
							"<td class='info-altura'>"+ campoAltura.value +"</td>"+
							"<td class='info-imc'></td>"+
						"</tr>";
					
	//Declara exatamente qual tipo
	//var table = document.getElementsByTagName("table")[0];
	
	//Não especifica o tipo, pega todos os elementos (array)
	//var table = document.querySelectorAll("table")[0];
	
	//Não especifica o tipo, se for um array, automaticamente pega a primeira posição
	var table = document.querySelector("table");
	
	table.innerHTML += pacienteNovo; //textContent é apenas para texto!
	
	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";
});