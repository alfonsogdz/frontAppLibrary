$(document).ready(function(){

	// Update item cart
	$('.btn-update-item').on('click', function(e){
		e.preventDefault();

		var id = $(this).data('id');
		var quantity = $('#producto_' + id).val();
		var path = $(this).data('href') + '/' + quantity;

		window.location.href = path;
	});

	// Pinterest grid
	$('#grid-products').pinterest_grid({
		no_columns: 4,
		padding_x: 10,
		padding_y: 10,
		margin_bottom: 50,
		single_column_breakpoint: 700
	});

});