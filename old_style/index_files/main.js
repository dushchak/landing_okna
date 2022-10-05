
jQuery(document).ready(function(){
	
	Checkbox_activate() ;
});
/*
function Checkbox_activate (){
	jQuery("#check_1").click(	function(){
		var sdd = jQuery(this).prop('checked');
		console.log(sdd);
	});	
*/
function Chck_1() {
	jQuery("#check_1").click(	function(){
		var sdd = jQuery(this).prop('checked');
		console.log(sdd);
		if(sdd == true){
			jQuery("#cost_1").text("933");	
		}
		else {
			jQuery("#cost_1").text("833");	
		}		
	});
}
function Chck_2() {
	jQuery("#check_2").click(	function(){
		var sdd = jQuery(this).prop('checked');
		console.log(sdd);
		if(sdd == true){
			jQuery("#cost_2").text("2433");	
		}
		else {
			jQuery("#cost_2").text("2226");	
		}		
	});
}
function Chck_3() {
	jQuery("#check_3").click(	function(){
		var sdd = jQuery(this).prop('checked');
		console.log(sdd);
		if(sdd == true){
			jQuery("#cost_3").text("3120");	
		}
		else {
			jQuery("#cost_3").text("2786");	
		}		
	});
}
function Chck_4() {
	jQuery("#check_4").click(	function(){
		var sdd = jQuery(this).prop('checked');
		console.log(sdd);
		if(sdd == true){
			jQuery("#cost_4").text("3627");	
		}
		else {
			jQuery("#cost_4").text("3238");	
		}		
	});
}
function click_Conversion_Ads_Google() {
	jQuery(".phone_click").click(function(){
		console.log("lead work");
		gtag_report_conversion(); // функция отслеживания конверсии гугла по клику

	})
}
function viewPhone (){
	var Mouse = jQuery(".mouse");
	Mouse.click(function(){
		Mouse.css("display", "none");
		//jQuery(".phone_num").text("(096) 834-88-83");
		jQuery(".phone_num").html('<a href="tel:096 8348883" class="phone_num">(096) 834-88-83</a>');

		res = jQuery.get("../v_stat/test.php");
        //console.log(res);
    	//return false;
    	/*
		result = jQuery.get("./v_stat/test.php", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        });
*/

	})
}
function Porahuvaty (){
	jQuery(".porahuvaty button").click(function(){
		Recall_form = jQuery(".recall_form"); //
		jQuery(Recall_form).slideDown(300) ;
	
	})
}
function Bonus_block () {
	jQuery(".bonus_block button").click(function(){
		jQuery(".bonus_add").slideDown(300);	
	})
	jQuery(".bonus_add img").click(function(){
		jQuery(".bonus_add").slideUp(300);
	})	
	
}

function Checkbox_activate (){
	click_Conversion_Ads_Google();
	Chck_1();
	Chck_2();
	Chck_3();
	Chck_4();
	viewPhone();
	Porahuvaty();
	Bonus_block();

/*

	//var checkbox_montage = jQuery("#check_1");
	checkbox_montage = jQuery(this);
	
	checkbox_montage.click(function(){
		checkbox_id = jQuery(this).prop("tagName");
		console.log(checkbox_id);
		
		console.log(checkbox_montage);
		var sdd = jQuery(checkbox_id).prop('checked');
		console.log(sdd);
		console.log(jQuery(checkbox_montage).prop('checked'));	
		console.log(jQuery(this).prop('checked'));
		
		//	jQuery("h3").css("color", "red");
		
		
	}	

	);

*/
}