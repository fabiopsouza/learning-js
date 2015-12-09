function umaPropaganda(){
	var propagandas = [
		"O que acha de comprar uma motocicleta?",
		"O que acha de comprar uma lancha?",
		"O que acha de comprar uma bicicleta?",
		"O que acha de comprar uma carro?"];
		
	var posicao = Math.floor(propagandas.length * Math.random()); //Math.floor (Arredonda para baixo)
	
	var texto = propagandas[posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>")); //Tr > td
	tr.find("td").attr("colspan", 6).text(texto);
	
	return tr;
}

function atualizarDados(){
	
	var carrinhos = $(".carrinho");
	
	carrinhos.each(function(){
		var carrinho = $(this);
		var itens = carrinho.find(".item-total:visible");
		var total = 0;
		for(var i = 0; i < itens.length; i++){
			var item = $(itens[i]);
			var valor = parseFloat(item.text());
			total += valor;
		}
		
		carrinho.find(".valor-total").text(total);
		carrinho.find(".quantidade-itens").text(itens.length);
	});
}

function removeItem(){
	event.preventDefault();
	
	//Anda um ancestral a cada parent()
	//$(this).parent().parent().remove();
	
	//Traz o ancestral mais próximo com o seletor tr
	$(this).closest("tr").hide();
	
	atualizarDados();
	/*
	var quantidadeAtual = parseInt($("#quantidade-itens").text());
	$("#quantidade-itens").text(quantidadeAtual - 1);
	
	var precoAtual = parseFloat($("#valor-total").text());
	var preco = parseFloat($(this).closest("tr").find(".item-total").text()); //siblings -> irmão. find -> qualquer abaixo
	var precoFinal = precoAtual - preco;
	
	$("#valor-total").text(precoFinal);
	*/
}

function darDestaque(){
	$(this).find(".remove-item").fadeIn();
	$(this).addClass("hovering");
}

function tirarDestaque(){
	$(this).find(".remove-item").fadeOut();
	$(this).removeClass("hovering");
}

function undo(){
	var carrinho = $(this).closest(".carrinho");
	
	carrinho.find("tr:visible").removeClass("recuperado");
	carrinho.find("tr:hidden").addClass("recuperado").show();
}

function esconderPropagandas(){
	event.preventDefault();
	$(".propaganda").fadeOut();
}

function mostrarPropagandas(){
	event.preventDefault();
	$(".propaganda").show();
}

function alternarPropaganda(){
	event.preventDefault();
	$(".propaganda").fadeToggle();
	$(".alterna-propaganda").toggle();
}

function aposFinalizado(){
	atualizarDados();
	
	$(".undo").click(undo);

	$(".remove-item").click(removeItem);
	
	$(".carrinho").each(function(){
		//Gerar propaganda a cada 3 itens E no ultimo de todos
		$(this).find("tr:nth-child(3n),tr:last").each(function () {
			umaPropaganda().insertAfter($(this)); //insertAfter -> insere logo depois. insertBefore -> insere logo antes
		});
	});
	
	$("tbody tr").hover(darDestaque, tirarDestaque); //Segundo parametro é o inverso, no caso quando do hover para leave
	
	$("#esconde-propagandas").click(alternarPropaganda);
	
	$("#mostra-propagandas").click(alternarPropaganda);
}



//Chamadas assim, executam a função após o carregamento completo da página
$(aposFinalizado);