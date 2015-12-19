module.exports = function(app){
	app.get('/produtos', function(req, res){

		var connection = app.infra.connectionFactory();
		var produtosBanco = app.infra.produtosBanco;

		produtosBanco.lista(connection, function(errors, resultados){
			console.log('conteudo de errors: ' + errors);
			res.render('produtos/lista', {lista: resultados});
		});

		connection.end();
	});

	
}