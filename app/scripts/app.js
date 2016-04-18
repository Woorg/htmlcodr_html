import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'jquery-sticky';
import 'social-likes-next';

$(() => {
	svg4everybody();

	// sticky viral

	$('.vital_sticky').sticky({
		topSpacing: 100
	});

	// vk

	// VK.init({
	// 	apiId: 5399784,
	// 	onlyWidgets: true
	// });

	// VK.Widgets.Group('vk-group', {mode: 1, width: '287', height: '400', color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 116357176);


});

