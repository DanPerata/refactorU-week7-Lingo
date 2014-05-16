$(document).on("ready", function(){
	$('.dropdown-toggle').dropdown()
	$('.dropdown li a').click(function(){

      $(this).closest('.dropdown').find(".btn:first-child").text($(this).text())
      	.val($(this).attr('data-code'));
      	// console.log($(".from button").text($(this).text()))

   });
$('#form').on("submit", function(e) {
	e.preventDefault();
	$.post('/languages', {
		from: $(".from button").val(),
		to: $(".to button").val(),
		textEntry: $("input.word").val() 
	},function(data){
		console.log(data)
		if(data.errorCode === "Validation_EXCEPTION"){
			console.log('error')
		}
		$('.result').text(data.translation)



	})


})

})

