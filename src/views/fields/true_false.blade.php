<?php 
$value = '-';

if (isset($raw->item->$key)) 
    $value = ($raw->item->$key)?'true':'false';
elseif (isset($field['default']))
    $value = ($field['default'])?'true':'false';
?>
<div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if ($raw->getState() == 'view'):?>
	    <label class="radio-inline"><?php echo $raw->strings[$value]?></label>
	<?php else:?>
    <label class="radio-inline">
        <input type="radio" name="<?php echo $key ?>" id="field_<?php echo $key ?>" value="1" <?php if ($value == 'true'):?>checked="checked"<?php endif;?>> <?php echo $raw->strings['true']?>
    </label>
    <label class="radio-inline">
        <input type="radio" name="<?php echo $key ?>" id="field_<?php echo $key ?>" value="0" <?php if ($value == 'false'):?>checked="checked"<?php endif;?>> <?php echo $raw->strings['false']?>
    </label>
	<?php endif;?>
</div>