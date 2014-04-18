<?php 

$value = '';

if (isset($raw->item->$key)) 
    $value = $raw->item->$key;
elseif (isset($field['default']))
    $value = $field['default'];


?><div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if ($raw->getState() == 'view'):?>
    	<?php 
    	if (isset($field['values'])):?>
	    	<?php foreach ($field['values'] as $k=>$value):?>
	    		 <p class="form-control-static"><?php if (isset($raw->item->$key) && $k == $raw->item->$key) echo $value;?></p>
	    	<?php endforeach;?>
    	<?php endif;?>
	<?php else:?>
    <select name="<?php echo $key ?>" id="field_<?php echo $key ?>">
    	<option value=""><?php echo $raw->strings['please_select']?></option>
    	<?php if (isset($field['values'])):?>
	    	<?php foreach ($field['values'] as $k=>$v):?>
	    		 <option value="<?php echo $k ?>" <?php if ($k == $value) echo 'selected="selected"'?>><?php echo $v ?></option>
	    	<?php endforeach;?>
    	<?php endif;?>
    </select>
	<?php endif;?>
</div>