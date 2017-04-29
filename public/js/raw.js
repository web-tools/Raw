var raw_confirm='';
$( document ).ready( () => {

	$( 'textarea.editor' ).ckeditor();


	if ($('.raw-form select').length > 0)
	{
		$('.raw-form select').select2({
		});
	}

	$('#raw-add button[type="submit"], #raw-edit button[type="submit"], #raw-list-form button[type="submit"]').click(function(e){
		e.preventDefault();

		var redirect = $(this).attr('data-rel');
		if (redirect == 'redirect')
		{
			var redirect_path = $(this).attr('data-redirect');
		}
		var form = $(this).parents('form');
		var args = form.serializeArray();
		
		$.ajax({
		  type: "POST",
		  url: form.attr('action'),
		  data: args,
		  dataType:'json'
		}).done(json => {		
			form.find('div.alert').remove();	
			$('.raw-error').html('');	
			if (json['status'] && json['status'] == 1)
			{
				form.prepend('<div class="alert alert-success">'+json['message']+'</div>');
				if (redirect == 'redirect')
				{
					window.location.href = redirect_path;
				}
				
			}				 
			else
			{
				for (key in json['errors']) 
				{
					$("#error_"+key).html('<div class="alert alert-danger">'+json['errors'][key].join('<br/>')+'</div>');
				}
			}
			
		});
	});

	$('#raw-list').on('click','a.raw-delete',function(e){
		e.preventDefault();

		if (confirm(raw_confirm))
		{

			var redirect = $(this).attr('data-rel');
			if (redirect == 'redirect')
			{
				var redirect_path = $(this).attr('data-redirect');
			}
			var list = $('#raw-list');
			var item = $(this);
			
			$.ajax({
				type: "POST",
				url: item.attr('href'),
				data: {},
				dataType:'json'
			}).done(json => {
				list.parent().find('div.alert').remove();
				$('.raw-error').html('');

				if (json['status'] && json['status'] == 1)
				{
					list.parent().prepend('<div class="alert alert-success">'+json['message']+'</div>');
					if (redirect == 'redirect')
					{
						window.location.href = redirect_path;
					}
				}
				else
				{
					list.parent().prepend('<div class="alert alert-danger">'+json['message']+'</div>');
				}
				
			});
		}
		
	});

	if ($('.list-order').length > 0)
	{
		$('.list-order').each(function(){
			var depth = $(this).attr('data-depth');

			if (depth == 0)
				var parent_field_class = undefined;
			else
				var parent_field_class = 'row-parent';


			$(this).tableDrag(
			{
				draggableClass: 'draggable',
				cookiePath: '/',
				weight: {
					fieldClass: 'row-weight',
					hidden: true
				},
				parent: {
					fieldClass: parent_field_class,
					sourceFieldClass: 'primary-id',
					hidden: true
				},
				group: {
					fieldClass: 'row-depth',
					depthLimit: depth
				},
			});
		});
	}

	/* Upload */
	if ($('.raw-upload').length > 0)
	{
		$('.raw-uploaded').on('click','a.btn.delete',e => {
			e.preventDefault();
			if (confirm(raw_confirm))
			{
				$('.raw-uploaded').hide().find('table tr').remove();
				$('.raw-upload').show();
			}
		});

		$('.raw-upload').each(function()
		{
		    var url = $(this).attr('data-url');
		    var field_id = $(this).attr('data-field');
		    var filesize = $(this).attr('data-filesize');
		    var extensions = $(this).attr('data-extensions');
		    var progress_cont = $(this).find('.progress');

		    var files = $(this).next().find('table');
		    var files_container = $(this).next();

		    var item = $(this);

		    progress_cont.hide();

		    $('#field-'+field_id).fileupload({
		        url,
		        dataType: 'json',
		        formData: {
		        	'field':field_id
		        },
		        start(e, data) {
		        	$("#error_"+field_id).html('');
		        	progress_cont.show();
		        },
		        done(e, data) {
		        	progress_cont.hide();
		        	
		        	if (data.result.status == 1)
		        	{
		        		item.hide();
		        		files.html(data.result.response);
		        		files_container.show();
		        		
		        		var old = '';
		        		if ($('#old-'+field_id).val()!='')
		        			old = $('#old-'+field_id).val()+','+ $('#value-'+field_id).val();
		        		else 
		        			old = $('#value-'+field_id).val();

		        		$('#old-'+field_id).val(old);

		        		$('#value-'+field_id).val(data.result.file);
		        	}
		        	else
		        	{
		        		$("#error_"+field_id).html('<div class="alert alert-danger">'+data.result.message+'</div>');
		        	}
		        },
		        progressall(e, data) {
		            var progress = parseInt(data.loaded / data.total * 100, 10);
		            progress_cont.find('.progress-bar').css(
		                'width',
		                progress + '%'
		            );
		        }
		    }).prop('disabled', !$.support.fileInput)
		        .parent().addClass($.support.fileInput ? undefined : 'disabled');
		});
	}
	
} );