
$(document).ready(function () {
	 $(function () {
		if ($('.btn-addMore').length && $('#clone-body').length) {
			$(document).on('click', '.btn-addMore', function (event) {
				event.preventDefault();
				var $clone = $(this).closest('.clone-data').clone(true);
				var $newButtons = `
							<button type="button" class="btn btn-plus-circle mr-3 btn-removeMore">
								<i class="ni ni-minus"></i>
							</button>`;

				$clone.find('.btn-clone-group').html($newButtons).end().appendTo($('#clone-body'));
			});

			$(document).on('click', '.btn-removeMore', function (event) {
				event.preventDefault();
				$(this).closest('.clone-data').remove();
			});
		}
	});
});
