<div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if  ((isset($field['readonly']) && $raw->getState() == 'edit') || $raw->getState() == 'view'):?>
	<p class="form-control-static"><?php if (isset($raw->item)) echo $raw->item->$key?></p>
	<?php else:?>
    <input name="<?php echo $key ?>" id="field_<?php echo $key ?>" type="text" class="form-control" placeholder="<?php if (isset($field['default'])) echo $field['default'] ?>" value="<?php if (isset($raw->item->$key)) echo $raw->item->$key?>"/>
<?php endif;?>
</div>