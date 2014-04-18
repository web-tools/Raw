<?php 

$value = '';

if (isset($raw->item->$key)) 
    $value = $raw->item->$key;

?><div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if ($raw->getState() == 'view'):?>
    	<?php 
    		if (isset($field['preset']) && $field['preset'] == 'image')
            {
                if ($raw->item->$key !='' && file_exists($field['upload_path'].'/'.$value))
                {
                    echo '<a href="#" data-toggle="modal" data-target="#image-'.md5($value).'"><img width="100" src="'.URL::to($field['upload_path'].'/'.$value).'" alt=""/></a>';
                    echo '<div class="modal fade" id="image-'.md5($value).'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                    <img src="'.URL::to($field['upload_path'].'/'.$value).'" width="100%"/>
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>';
                }    
            }
            else
                echo '<p class="form-control-static"><a href="'.URL::to($field['upload_path'].'/'.$value).'">'.$value.'</a></p>';
	else:?>
	<div class="raw-upload" data-url="<?php echo URL::to($raw->path)?>/upload" data-field="<?php echo $key ?>" style="<?php if ($value) echo 'display:none;'?>">
	    <span class="btn btn-success fileinput-button">
	        <i class="glyphicon glyphicon-plus"></i>
	        <span><?php echo $raw->strings['add_files']?>...</span>
	        <!-- The file input field used as target for the file upload widget -->
	        <input id="field-<?php echo $key ?>" type="file" name="<?php echo $key ?>" />
	        <input type="hidden" id="value-<?php echo $key ?>" name="value-<?php echo $key ?>" value="<?php echo $value ?>"/>
	        <input type="hidden" id="old-<?php echo $key ?>" name="old-<?php echo $key ?>" value=""/>
	    </span>
	    <br>
	    <br>
	    <?php // todo display limitations ?>
	    <!-- The global progress bar -->
	    <div class="progress">
	        <div class="progress-bar progress-bar-success"></div>
	    </div>
	</div>
	<div class="raw-uploaded" style="<?php if (!$value) echo 'display:none;'?>">
		<table border="0" width="100%">
			
			<?php
			echo '<tr>';
			if (isset($field['preset']) && $field['preset'] == 'image' && $raw->item)
	        {	        	
	            if ($raw->item->$key !='' && file_exists($field['upload_path'].'/'.$value))
	            {
	                echo '<td width="80%"><a href="#" data-toggle="modal" data-target="#image-'.md5($value).'"><img width="100" src="'.URL::to($field['upload_path'].'/'.$value).'" alt=""/></a>';
	                echo '<div class="modal fade" id="image-'.md5($value).'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
	                    <div class="modal-dialog">
	                        <div class="modal-content">
	                            <div class="modal-header">
	                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
	                            </div>
	                            <div class="modal-body">
	                                <img src="'.URL::to($field['upload_path'].'/'.$value).'" width="100%"/>
	                            </div>
	                        </div>
	                        <!-- /.modal-content -->
	                    </div>
	                    <!-- /.modal-dialog -->
	                </div></td>';
	            }    
	        }
	        else
	            echo '<td><p class="form-control-static"><a href="'.URL::to($field['upload_path'].'/'.$value).'">'.$value.'</a></p></td>';

	        echo '<td><a class="btn btn-danger delete" href="'.$raw->path.'/upload/delete/'.$value.'">'. $raw->strings['file_delete'] .'</a></td>';
			echo '</tr>';
	   	 	?>
    	</table>
	</div>
	<?php endif;?>
</div> 

<script type="text/javascript">
	$(document).ready(function(){
		raw_confirm = '<?php echo $raw->strings['confirm']?>';
	});
</script>