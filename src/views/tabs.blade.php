<!-- /.row -->
<div class="row">
    <div class="col-lg-3">
		<h1 class="page-header"><?php echo $raw->title ?></h1>
	</div>
	<div class="col-lg-9">
		<ul id="raw-tabs" class="nav nav-tabs">
			<?php
			if (!empty($raw->tabs))
			{
				foreach ($raw->tabs as $t):?>
					<li class="<?php if (isset($t['active']) && $t['active']) echo 'active'?>"><a href="<?php echo URL::to($t['url'])?>" ><?php echo $t['title']?></a></li>
				<?php endforeach;
			}
			
		    ?>
		</ul>
	</div>
</div>