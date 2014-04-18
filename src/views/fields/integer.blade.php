<?php 
$value = '';

if (isset($raw->item->$key)) 
    $value = $raw->item->$key;
elseif (isset($field['default']))
    $value = $field['default'];

?><div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if  ((isset($field['readonly']) && $raw->getState() == 'edit') || $raw->getState() == 'view'):?>
	<p class="form-control-static"><?php if (isset($raw->item)) echo $raw->item->$key?></p>
	<?php else:?>
    <select name="<?php echo $key ?>" id="field_<?php echo $key ?>">
    	<option value=""><?php echo $raw->strings['please_select']?></option>
    	<?php if (isset($field['max'])):?>
	    	<?php for ($i = 0;$i<=$field['max'];$i++):?>
	    		 <option value="<?php echo $i ?>" <?php if ($i == $value) echo 'selected="selected"'?>><?php echo $i ?></option>
	    	<?php endfor;?>
    	<?php endif;?>
    </select>
<?php endif;?>
</div>