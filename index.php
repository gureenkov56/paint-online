<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="style.css" />
	<title>Paint Online</title>
</head>

<body>
	<div class="center">
		<canvas id="canvas"> </canvas>
		<div id="tools">
			<input type="range" name="wPen" id="wPen" min="0.1" max="5.0" step="0.1" value="2.5" />
			<div id="chooseTool">
				<div id="mode">Заливка</div>
				<div id="save">Сохранить</div>
			</div>
			<div id="chooseColor">
				<div class="color" style="background-color: red"></div>
				<div class="color" style="background-color: orange"></div>
				<div class="color" style="background-color: yellow"></div>
				<div class="color" style="background-color: green"></div>
				<div class="color" style="background-color: lightblue"></div>
				<div class="color" style="background-color: blue"></div>
				<div class="color" style="background-color: violet"></div>
			</div>
		</div>
	</div>
	<script src="app.js"></script>

</body>

</html>