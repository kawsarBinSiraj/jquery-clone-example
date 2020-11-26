
// html example
/* <div class="row clonedata">
		<div class="div col-md-3">
			<input type="text" name="remarks" class="form-control">
		</div>
		<div class="div col-md-2">
			<input type="text" name="remarks" class="form-control">
		</div>
		<div class="div col-md-2">
			<input type="text" name="remarks" class="form-control">
		</div>
		<div class="col-md-2 tn-buttons">
			<button type="button" class="mb-xs mr-xs btn btn-info addmore"><i class="fa fa-plus"></i></button>
			<button type="button" class="mb-xs mr-xs btn btn-info removemore"><i class="fa fa-remove"></i></button>
		</div>
	</div>

	<div id="packagingappendhere">
		 appendTo here - 
	</div> */

//jquery
$(document).on('click', '.addmore', function (ev) {
	var $clone = $(this).parent().parent().clone(true);
	var $newbuttons = "<button type='button' class='mb-xs mr-xs btn btn-info addmore'><i class='fa fa-plus'></i></button><button type='button' class='mb-xs mr-xs btn btn-info removemore'><i class='fa fa-remove'></i></button>";
	$clone.find('.tn-buttons').html($newbuttons).end().appendTo($('#packagingappendhere'));
});

$(document).on('click', '.removemore', function () {
	$(this).parent().parent().remove();
});