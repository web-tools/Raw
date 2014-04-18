<?php 
$value = '';

if (isset($raw->item->$key)) 
    $value = $raw->item->$key;
elseif (isset($field['default']))
    $value = $field['default'];

?><input name="<?php echo $key ?>" id="field_<?php echo $key ?>" class="form-control" type="hidden" value="<?php echo $value ?>"/>