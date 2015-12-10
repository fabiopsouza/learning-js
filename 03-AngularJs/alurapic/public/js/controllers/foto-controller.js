angular.module('alurapic')

.controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos){

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){ //$routeParams -> tras o parâmetro. Se nao tiver nenhum fica undefined

		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
			$scope.foto = foto;
		}, function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possível obter a foto';
		});

		/*$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possível obter a foto';
		});*/
	}

	$scope.submeter = function(){
		
		if($scope.formulario.$valid){

			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;

				//Usa o objeto de retorno para limpar os campos apenas se for inclusão
				if(dados.Inclusao) 
					$scope.foto = {};
			})
			.catch(function(dados){
				$scope.mensagem = dados.mensagem;
			});

			/*if($scope.foto._id){ //Alteração

				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = 'Foto alterada com sucesso';
				}, function(error){
					console.log(error);
					$scope.mensagem = 'Não foi possível obter a foto';
				});

				//$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				//.success(function(){
				//	$scope.mensagem ='Foto alterada com sucesso';
				//})
				//.error(function(error) {
				//	console.log(error);
				//	$scope.mensagem ='Não foi possível alterar a foto';
				//});

			}
			else{ //Inclusao
				recursoFoto.save($scope.foto, function(){
					$scope.foto = {};
					$scope.mensagem ='Foto incluída com sucesso';
				}, function(error){
					console.log(error);
					$scope.mensagem ='Não foi possível incluir a foto';
				});


				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.mensagem ='Foto incluída com sucesso';
				})
				.error(function(error){
					console.log(error);
					$scope.mensagem ='Não foi possível incluir a foto';
				});		
			}*/
		}
	};
});

