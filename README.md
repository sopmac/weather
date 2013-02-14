weather
=======

Yahoo weather plugin, extended for Claromentis homepage weather

[![](https://raw.github.com/Claromentis/cla-weather/master/screenshot.png)](https://raw.github.com/Claromentis/cla-weather/master/screenshot.png)

To install copy :
```javascript
	<!-- Basic styles for the componenet demo page found here -->
	<link rel="stylesheet" href="css/jquery.zweatherfeed.css">
	<!-- zweatherfeed is needed for this component to work -->
	<script src="js/jquery.zweatherfeed.js"></script>

```
Your javascript code should look like this:

To get the weatherfeed code plese go to <a href="http://weather.yahoo.com/">http://weather.yahoo.com/</a> search for the country you need, right click view page source, search for "10day" and grab the code next to it.
```javascript
	<script type="text/javascript">
		jQuery(document).ready(function(){

			//Load weather
			pullWeather();

			jQuery("#selectWeather").change(function(){
				changeWeather(jQuery(this));
			});

		  //Unit toggle for weather
		  jQuery('.toggle-unit').find('a').click(function(){
		  	var unit = jQuery(this).attr('class').split("");
		  	jQuery(this).toggleClass('active').parent().siblings().children('a').toggleClass('active');
		  	pullWeather(unit[0]);
		  	return false;
		  });

		});

		function pullWeather(unit) {

			if(!unit) { unit = 'f';	};

			jQuery('#weather').empty().weatherfeed([
				'USIL0004',
				'USIL0062',
				'GMXX0025',
				'JAXX0089',
				'TWXX0009',
		    	'TWXX0013',
		    	'ITXX0053',
				'USNY0996',
				'FRXX0076',
				'KSXX0037',
				'CHXX0116',
				'SNXX0006',
		    	'ASXX0112',
				'JAXX0085',
				'UKXX0085'
			], {
				unit: unit
			});
		};

		function changeWeather(_this) {
			var selected = $(_this).find(':selected').index() + 1;
			jQuery(_this).parent().find('#weather > div').hide().parent().find('div:nth-child('+ selected +')').show();
		};
	</script>
```

Your HTML code should look similar to this one:
```html
	<!doctype html>
		<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
		<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
		<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
		<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
		<head>

			<meta charset="utf-8">
			<title>Weather</title>
			<meta name="description" content="Clocks plugin">
			<meta name="viewport" content="width=device-width">

			<!-- Basic styles for the componenet demo page found here -->
			<link rel="stylesheet" href="css/jquery.zweatherfeed.css">
		</head>
		<body>
			<header>
				<h1>Weather!</h1>
			</header>

			<!-- Markup needs to be as follows -->
			<div class="container">
				<select id="selectWeather" class="input-large">
					<option value="1">Addison, IL</option>
					<option value="2">Aurora, IL</option>
					<option value="3">Dresden, Germany</option>
					<option value="4">Geino, Japan</option>
					<option value="5">Hsinchu, Taiwan</option>
					<option value="6">Kaohsiung, Taiwan</option>
					<option value="7">Novara, Italy</option>
					<option value="8">New York, NY</option>
					<option value="9">Paris, France</option>
					<option value="10">Seoul, South Korea</option>
					<option value="11">Shanghai, China</option>
					<option value="12">Singapore, Singapore</option>
					<option value="13">Sydney, Australia</option>
					<option value="15">Tokyo, Japan</option>
					<option value="16">United Kingdom</option>
				</select>

				<ul class="toggle-unit">
					<li><a href="#" class="celsius">C</a></li>
					<li><a href="#" class="farenheit active">F</a></li>
				</ul>
				<div class="vertical">
			    	<div id="weather">
			    	</div>
				</div>
			</div>
			<!-- jQuery is already included in core so you probably dont need to include this -->
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

			<!-- zweatherfeed is needed for this component to work -->
			<script src="js/jquery.zweatherfeed.js"></script>
			<script src="js/functions.js"></script>		  
		</body>
</html>
```