Yahoo Weather
=============

Yahoo weather plugin, extended for Claromentis homepage weather

[![](https://raw.github.com/Claromentis/cla-weather/master/screenshot.png)](https://raw.github.com/Claromentis/cla-weather/master/screenshot.png)

Include the following files:

```html
	<!-- Basic styles for the componenet demo page found here -->
	<link rel="stylesheet" href="css/jquery.zweatherfeed.css">
	<!-- zweatherfeed is needed for this component to work -->
	<script src="js/jquery.zweatherfeed.js"></script>
	<!-- Custom JavaScript -->
	<script src="js/functions.js"></script>	  
```
Weather codes can be found here: <a href="http://edg3.co.uk/snippets/weather-location-codes/">Weather Location Codes/IDs</a>

You must call the pullWeather() function on page load, and changeWeather() on change for the weather select. See below for example:

```javascript

	//Load weather
	pullWeather();

	jQuery("#selectWeather").change(function(){
		changeWeather(jQuery(this));
	});

```

You need to modify the pullWeather function with the weather codes for the places you wish to report for. See example below.

```javascript

	function pullWeather(unit) {

		if(!unit) { unit = 'f';	};

		jQuery('#weather').empty().weatherfeed([
			'USIL0004', //Enter code here
			'UKXX0085' 	//Enter code here
		], {
			unit: unit
		});
	};

```
See below for some example markup.

```html

	<div class="container">

		<!-- This is the select box for the weather -->
		<select id="selectWeather" class="input-large">
			<option value="1">Location 1</option>
			<option value="2">Location 2</option>
		</select>

		<!-- This toggles between celcius and fahrenheit -->
		<ul class="toggle-unit">
			<li><a href="#" class="celsius">C</a></li>
			<li><a href="#" class="farenheit active">F</a></li>
		</ul>

		<!-- Weather inserted here -->
		<div class="vertical">
	    	<div id="weather">
	    	</div>
		</div>

	</div>

```