<fieldset>
	<div class="form-group">
	    <?php if  ((isset($field['readonly']) && $raw->getState() == 'edit') || $raw->getState() == 'view'):?>
		
		<?php else:?>
		<label for="field_<?php echo $key ?>"><?php echo $field['title']?></label>
	    <input name="<?php echo $key ?>" id="field_<?php echo $key ?>" type="password" class="form-control" placeholder="********" value=""/>

	    <label for="field_<?php echo $key ?>"><?php echo $raw->strings['confirm']?> <?php echo $field['title']?></label>
	    <input name="<?php echo $key ?>" id="field_<?php echo $key ?>" type="password" class="form-control" placeholder="********" value=""/>
	<?php endif;?>
	</div>
</fieldset>