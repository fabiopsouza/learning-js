 angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])

//Configuração de rotas
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true); //Com isso não é necessário colocar (#) na URL de rota. Obs: Navegador tem que suportar 
	//e servidor precisa de uma configuração especifica. Tem que adicionar a tag -> <base href="/"> na página html

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'}); //Rota padrão ao entrar uma url desconhecida
});