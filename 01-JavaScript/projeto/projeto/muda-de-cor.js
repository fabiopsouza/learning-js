var trs = document.getElementsByTagName("tr");

percorreArray(trs, function(tr){
	tr.addEventListener("mouseover", function(){
		this.setAttribute("bgcolor", "#efefef");
	});
	
	tr.addEventListener("mouseout", function(){
		this.removeAttribute("bgcolor");
	});
});