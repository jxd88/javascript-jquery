$(document).ready(function(){
	$('input[type=radio][name=drawtype]').on('change', function() {
		$(".unit").off();               //// reset event handlers when choosing new type of animation
        if (this.value == 'radio1') {
            draw();
        }
        else if (this.value == 'radio2') {
            trail();
        }
        else if (this.value == 'radio3') {
        	gradient();
        }
        else if (this.value == 'radio4') {
        	randomColors();
        }
    });
	for (var i=1;i<=16;i++){
		for (var j=1;j<=16;j++){
			$('<div />', {'class' : 'unit'}).appendTo('.container');
		}
}
	var divsize = (960-2*16)/16;
	$('.unit').css({"height":divsize + "px"});
	$('.unit').css({"width":divsize + "px"});
	draw();
});


function newgrid(){
var size = prompt("Please enter new grid size");
if (size != null) {
	$('div.unit').remove();
	var sizeInt = parseInt(size,10); //input to the prompt is a string
	for (var i=1;i<=sizeInt;i++){
		for (var j=1;j<=sizeInt;j++){
			$('<div />', {'class' : 'unit'}).appendTo('.container');

		}
}
	var divsize = (960-2*sizeInt)/sizeInt; //takes into account 1px border around each div
	$('.unit').css({"height":divsize + "px"});
	$('.unit').css({"width":divsize + "px"});
	$('.unit').css({"background-color" : "#f3f3f3"});
	$('.unit').css({'opacity':'1'});
	check();
}};
function check(){

        if ($('#radio1').is(':checked')) {
            draw();
        }
        else if ($('#radio2').is(':checked')) {
            trail();
        }
        else if ($('#radio3').is(':checked')) {
        	gradient();
        }
        else if ($('#radio4').is(':checked')) {
        	randomColors();
        }
    };

function reset(){
	$('.unit').css({'background-color':'#f3f3f3'});
	$('.unit').css({'opacity':'1'});
};

function draw(){
		$('.unit').hover(function(){
		$(this).css({'background-color':'black'});
									});
}
function trail(){
$(".unit").mouseenter(function() {
        
        $(this).fadeTo(100, 0);
        
    });
    
    $(".unit").mouseleave(function() {
        
        $(this).fadeTo(400, 1);
        
    });
}
function gradient(){
	$('.unit').hover(function(){
	$(this).css("opacity", $(this).css("opacity") -0.1);
});
}
function randomColors() {

    $(".unit").mouseenter(function() {
        
        var randomColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
        
        $(this).css("background-color", randomColor);
        
    });
    
}
