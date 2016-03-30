import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'jquery-sticky';

$(() => {
	svg4everybody();
	$('.vital_sticky').sticky({
		topSpacing: 40
	});
});
