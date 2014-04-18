<div class="form-group">
    <label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
    <?php if  ((isset($field['readonly']) && $raw->getState() == 'edit') || $raw->getState() == 'view'):?>
	<p class="form-control-static"><?php if (isset($raw->item)) echo $raw->item->$key?></p>
	<?php else:?>
	<textarea name="<?php echo $key ?>" id="field_<?php echo $key ?>" class="form-control <?php if (isset($field['editor']) && $field['editor'] == true) echo 'editor'?>" rows="3"><?php if (isset($raw->item->$key)) echo $raw->item->$key?></textarea>
<?php endif;?>
</div>