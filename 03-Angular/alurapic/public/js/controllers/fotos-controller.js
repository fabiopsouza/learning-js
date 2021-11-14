angular.module("alurapic").controller("FotosController", function($scope, recursoFoto){
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	//Método puro
	/*var promise = $http.get("v1/fotos");
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(erro){
		console.log(erro);
	});*/
	

	//Método com http methods
	/*$http.get("v1/fotos")
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});*/
	
	//Método com resource
	//var recursoFoto = $resource('v1/fotos/:fotoId');
	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(error){
		console.log(erro);
	});

	$scope.remover = function(foto){

		recursoFoto.delete({fotoId: foto._id}, function(){
			
			//Remove foto da lista, se success(removido no backend)
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);

			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		}, function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;	
		});

		/*$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			//Remove foto da lista, se success(removido no backend)
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);

			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		})
		.error(function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;	
		});*/

	}

});