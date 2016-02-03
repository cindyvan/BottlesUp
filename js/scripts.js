var size = 18;

//Close Box
$(".box-thingy .box-close").on("click", function() {
	$(".box-thingy").addClass("collapse")
});

//Open Box
$(".panel").on("click", function() {
	$(".box-thingy").removeClass("collapse")
});

//Changes Bottle Image
function showBottle(id) {
	$(".bottle img").addClass("fade")


	setTimeout(function() {
		$(".bottle img").attr("src", "img/products/bottles/" + id + "/BlackSand.png")
	}, 300);


	setTimeout(function() {
		$(".bottle img").removeClass("fade");
	}, 500);	
}
