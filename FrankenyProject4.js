// JavaScript File
/*
    Filename:  Loopiness
    Written by: Steven Frankeny
    Purpose: Learning and Having Fun
    Date: 6 Oct. 2014
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){
	$("#instructionsScreen").hide();
	$("#gameScreen").hide();
	$("#btnStartGame").click(startGame);
	$("#btnInstructions").click(displayInstructions);
	$("#btnBack").click(showMainMenu);
	function startGame(){
		$("#menuScreen").hide();
		$("#gameScreen").show();
		$("td").css("height",$("td").width() + "px");
		$(".gameSquare").css("height",$("td").height() + "px");
		$(".gameSquare").hide();
	}
	function displayInstructions(){
		$("#menuScreen").hide();
		$("#instructionsScreen").show();
	}
	function showMainMenu(){
		$("#menuScreen").show();
		$("#instructionsScreen").hide();
	}
	
});

	