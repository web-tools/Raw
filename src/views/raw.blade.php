<!DOCTYPE html>
<html>
<head>
	<title>Raw for Laravel</title>
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
	<?php echo $raw_output; ?>
</body>
</html>