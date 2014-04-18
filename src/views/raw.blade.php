<!DOCTYPE html>
<html>
<head>
	<base href="<?php echo URL::to('/')?>"/>
	<meta charset="utf-8" />
<?php 
foreach($raw->css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($raw->js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
</head>
<body class="example">  
    <div>
		<?php echo $raw_output; ?>
    </div>
</body>
</html>