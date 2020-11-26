$(document).ready(function(){
	  $('.wrapper').on('click', '.remove', function() {
	  $('.remove').closest('.wrapper').find('.element').not(':first').last().remove();
	});
	$('.wrapper').on('click', '.clone', function() {
	  $('.clone').closest('.wrapper').find('.element').first().clone().appendTo('.results');
	});
});


  function allowDrop(ev) {
	  ev.preventDefault();
	}

	function drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
	  ev.preventDefault();
	  var data = ev.dataTransfer.getData("text");
	  ev.target.appendChild(document.getElementById(data));
	}

