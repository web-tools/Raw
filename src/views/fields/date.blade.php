<?php 
$value = date('Y-m-d');

if (isset($raw->item->$key))
    $value = $raw->item->$key;
elseif (isset($field['default']))
{
	if ($field['default'] == 'date')
    	$value = date('Y-m-d');
    else
    	$value = $field['default'];
}
?><div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if ((isset($field['readonly']) && ($raw->getState() == 'add' || $raw->getState() == 'edit')) || $raw->getState() == 'view'):?>
	<p class="form-control-static"><?php echo $value ?></p>
	<?php else:?>
    <input name="<?php echo $key ?>" id="field_<?php echo $key ?>" type="text" class="form-control" placeholder="<?php echo $value ?>" value="<?php echo $value ?>"/>
<?php endif;?>
</div>