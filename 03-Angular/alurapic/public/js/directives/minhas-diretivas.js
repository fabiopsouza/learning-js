angular.module("minhasDiretivas", [])
//Exemplo diretiva de ELEMENTO
.directive("meuPainel", function(){ //meuPainel no html deve virar meu-painel

	var ddo = {};

	ddo.restrict = "AE"; //Attribute or Element

	//Atribui quais propriedades quer "pegar" da tag
	ddo.scope = {
		titulo: "@" //@ pega o valor da propriedade "titulo" dentro do meu-painel
	}

	ddo.transclude = true; //transclude -> Angular mantem elementos filhos. Incluir propriedade "ng-transclude" dentro da tag que vai manter os filhos

	ddo.templateUrl = "js/directives/meu-painel.html";

	return ddo;
})

//Exemplo diretiva de ELEMENTO
.directive('meuBotaoPerigo', function(){

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		nome: '@',
		acao: '&' //& -> é uma expressão, pois recenbe a chamada de uma função no escopo do controller, não uma simpes string como o '@' 
	}

	//TemplateUrl -> path 
	//Template -> html
	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'

	return ddo;
})

//Exemplo diretiva de ATRIBUTO
.directive('meuFocus', function(){
	var ddo = {};

	ddo.restrict = 'A';

	ddo.link = function(scope, element){ //esse scope é diferente de $scope. Aqui ele representa um atributo dentro da diretiva, no caso "focado"

		//Metodo evento
		scope.$on('fotoCadastrada', function(){
			element[0].focus();//foi necessário usar o [0] pois o Angular usa o jQLite. Se tivesse usando o jQuery basta usar element.focus(); 
			//Obs: jQuery deve vir antes do angularJs
		});

		//Metodo watch (usa )
		/*scope.$watch('focado', function(){
			if(scope.focado)
				element[0].focus(); 
		});*/
	};

	return ddo;
});