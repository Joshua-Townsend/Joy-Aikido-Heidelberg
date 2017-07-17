$(document)
	.ready(function()
	{
		$('.menu li')
			.click(function()
			{
					var li = $(this);
					var page = li.data('page');
					
					$.ajax({
						url: page,
						method: 'GET',
						success: function(html)
						{
							$('#main').html(html);
						}
					})
			})
		;
	})
;