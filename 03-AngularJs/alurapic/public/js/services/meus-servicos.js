angular.module('meusServicos', ['ngResource'])

//Serviço que encapsula a url do 
.factory('recursoFoto',function($resource){

	return $resource('v1/fotos/:fotoId', null, { //O null pode ser substituido por uma QueryString
		update: { //Recebe uma propriedade com um objeto de configuração. Há varias configurações, uma delas é o method, 
			//no caso, para especificar que trata-se de um PUT (edit), não create
			method: 'PUT'
		}
	});
})

//Servico que encapsula lógica de decisão entre inclusão || alteração
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope){ //$q permite trabalhar com promises
//$rootScope é o pai de todos os $scopes. Foi necessário para disparar o evento, pois em serviço não existe o $scope do controller.

	var servico = {};

	var evento = 'fotoCadastrada';

	servico.cadastrar = function(foto){
		return $q(function(resolve, reject){ //Resolve -> retorno de sucesso. //Reject -> retorno de erro
			if(foto._id){ //inclusão 

				$rootScope.$broadcast(evento); //$broadcast -> evento

				recursoFoto.update({fotoId: foto._id}, foto, function(){
					resolve({
						mensagem: 'Foto' + foto.titulo + ' atualizada com sucesso!',
						inclusao: false
					});
				}, function(error){
					console.log(error);
					reject({
						mensagem: 'Não foi possível alterar a foto ' + foto.titulo
					});
				});
			}
			else{ //alteração
				
				recursoFoto.save(foto, function(){

					$scope.$broadcast(evento); //$broadcast -> evento

					resolve({
						mensagem: 'Foto ' + foto.titulo + ' incluida com sucesso',
						inclusao: true
					});
				}, function(){
					console.log(error);
					reject({
						mensagem: 'Não foi possível incluir a foto ' + foto.titulo
					});
				});
			}
		}); 

	}

	return servico;
});