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


