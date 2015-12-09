function montarPaciente(pacienteTr){
	var nome = pacienteTr.getElementsByClassName("info-nome")[0].textContent;
	var peso = pacienteTr.getElementsByClassName("info-peso")[0].textContent;
	var altura = pacienteTr.getElementsByClassName("info-altura")[0].textContent;
	
	var paciente = {
		nome: nome, 
		peso: peso, 
		altura: altura,
		pegaImc: function (){
					if(this.altura != 0){
						return this.peso / (this.peso * this.altura);
					}
					else{
						console.log("Não executei porque a altura eh igual a zero");
					}
				}
	};
	
	return paciente;
}