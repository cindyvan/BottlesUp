$(".box-thingy .box-close").on("click", function() {
	$(".box-thingy").addClass("collapse")
});

$(".panel").on("click", function() {
	$(".box-thingy").removeClass("collapse")
});

function showBottle(id) {
	$(".bottle img").addClass("fade")


	setTimeout(function() {
		$(".bottle img").attr("src", "img/" + id + ".jpg")
	}, 300);


	setTimeout(function() {
		$(".bottle img").removeClass("fade");
	}, 500);	
}