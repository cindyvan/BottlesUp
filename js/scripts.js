$(".box-thingy .box-close").on("click", function() {
	$(".box-thingy").addClass("collapse")
})

$(".panel").on("click", function() {
	$(".box-thingy").removeClass("collapse")
})