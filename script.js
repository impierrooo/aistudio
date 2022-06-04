/* Embed Discord */

function send() {
	var prénom = document.getElementById("prénom").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (prénom == '') {
		document.getElementById('prénom').style.backgroundColor = '#da7426';
		setTimeout(fonctionAExecuter, 3000);
		
	} else if (email == '') {
		document.getElementById('email').style.backgroundColor = '#da7426';
		setTimeout(fonctionAExecuter, 3000);
		
	} else if (message == '') {
		document.getElementById('message').style.backgroundColor = '#da7426';
		setTimeout(fonctionAExecuter, 3000);
	
	} else {
		var url = "https://discord.com/api/webhooks/982558393103417366/bBEwZoiOdgPu7h8Q8AxObeT0O3eeTwTBIL3HU4TKh3Mw1JrNC-pnfQXsn6sYe-24iEgx";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader('Content-type', 'application/json');

		var myEmbed2 = {
			"title": "Formulaire de contact de ᴬᴵStudio",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Nom et Prénom :",
					"value": prénom,
				},
				{
					"name": "Email :",
					"value": email,
				},
				{
					"name": "Message :",
					"value": message
				}
			],
		}
		
		var params = {
        username: "Form Bot",
        embeds: [ myEmbed2 ]
		}
    
		request.send(JSON.stringify(params)); 
		
		document.getElementById("prénom").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		
		document.getElementById('prénom').style.backgroundColor = '#111111';
		document.getElementById('email').style.backgroundColor = '#111111';
		document.getElementById('message').style.backgroundColor = '#111111';
	}
}

/* Sécurité envoie formulaire de contact */

function fonctionAExecuter(){
	document.getElementById('prénom').style.backgroundColor = '#111111';
	document.getElementById('email').style.backgroundColor = '#111111';
	document.getElementById('message').style.backgroundColor = '#111111';
}

/* Lien entre page de commande*/

function Form1(){
	document.getElementById('formulaire_commande_form2').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form1').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form2(){
	document.getElementById('formulaire_commande_form1').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form3').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form2').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form3(){
	document.getElementById('formulaire_commande_form2').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form4').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form3').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form4(){
	document.getElementById('formulaire_commande_form3').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form5').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form4').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form5(){
	document.getElementById('formulaire_commande_form4').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form6').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form5').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form6(){
	document.getElementById('formulaire_commande_form5').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form7').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form6').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form7(){
	document.getElementById('formulaire_commande_form6').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form8').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form7').style.visibility = 'visible';
	window.scrollTo(0,0);
}

function Form8(){
	document.getElementById('formulaire_commande_form7').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form8').style.visibility = 'visible';
	window.scrollTo(0,0);
}

/* Animation spéciales du formulaire de commande*/

function rangeSlide4(value) {
	document.getElementById('rangeValue4').innerHTML = value;
	var jours = document.getElementById("rangeValue4").innerHTML;
	if (jours == 1) {
		document.getElementById('descripteur_formulaire_caméras').innerHTML = " caméra";
		
	} else {
		document.getElementById('descripteur_formulaire_caméras').innerHTML = " caméras";
	}
}

function rangeSlide5(){
	var heures = document.getElementById("formulaire_heure").value;
	if (heures > 1) {
		document.getElementById('descripteur_formulaire_heures').innerHTML = " heures";
		
	} else {
		document.getElementById('descripteur_formulaire_heures').innerHTML = " heure";
	}
}

function rangeSlide51(){
	var minutes = document.getElementById("formulaire_minute").value;
	if (minutes > 1) {
		document.getElementById('descripteur_formulaire_minutes').innerHTML = " minutes";
		
	} else {
		document.getElementById('descripteur_formulaire_minutes').innerHTML = " minute";
	}
}

function rangeSlide7(value) {
	document.getElementById('rangeValue7').innerHTML = value;
	var jours = document.getElementById("rangeValue7").innerHTML;
	if (jours == 1) {
		document.getElementById('descripteur_formulaire_jours').innerHTML = " jour";
		
	} else {
		document.getElementById('descripteur_formulaire_jours').innerHTML = " jours";
	}
}

/* Animation des radios des informations*/

function hideradio1(){
    var display1 = document.getElementById("instagram_formulaire_value").checked;
	if (display1 == '') {
		document.getElementById("instagram_formulaire").style.display = "none";	
	} else {
		document.getElementById("instagram_formulaire").style.display = "block";
	}
}

function hideradio2(){
    var display2 = document.getElementById("twitter_formulaire_value").checked;
	if (display2 == '') {
		document.getElementById("twitter_formulaire").style.display = "none";	
	} else {
		document.getElementById("twitter_formulaire").style.display = "block";
	}
}

function hideradio3(){
    var display3 = document.getElementById("discord_formulaire_value").checked;
	if (display3 == '') {
		document.getElementById("discord_formulaire").style.display = "none";
	} else {
		document.getElementById("discord_formulaire").style.display = "block";
	}
}

function hideradio4(){
    var display4 = document.getElementById("email_formulaire_value").checked;
	if (display4 == '') {
		document.getElementById("email_formulaire").style.display = "none";	
	} else {
		document.getElementById("email_formulaire").style.display = "block";
	}
}

/* Animation des radios des informations*/

function hideradioeffect1(){
    var effect1 = document.getElementById("formulaire_effect1_value").checked;
	if (effect1 == '') {
		document.getElementById("formulaire_effect1").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect1").style.display = "block";
	}
}

function hideradioeffect2(){
    var effect2 = document.getElementById("formulaire_effect2_value").checked;
	if (effect2 == '') {
		document.getElementById("formulaire_effect2").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect2").style.display = "block";
	}
}

function hideradioeffect3(){
    var effect3 = document.getElementById("formulaire_effect3_value").checked;
	if (effect3 == '') {
		document.getElementById("formulaire_effect3").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect3").style.display = "block";
	}
}

function hideradioeffect4(){
    var effect4 = document.getElementById("formulaire_effect4_value").checked;
	if (effect4 == '') {
		document.getElementById("formulaire_effect4").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect4").style.display = "block";
	}
}

function hideradioeffect5(){
    var effect5 = document.getElementById("formulaire_effect5_value").checked;
	if (effect5 == '') {
		document.getElementById("formulaire_effect5").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect5").style.display = "block";
	}
}

function hideradioeffect6(){
    var effect6 = document.getElementById("formulaire_effect6_value").checked;
	if (effect6 == '') {
		document.getElementById("formulaire_effect6").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect6").style.display = "block";
	}
}

function hideradioeffect7(){
    var effect7 = document.getElementById("formulaire_effect7_value").checked;
	if (effect7 == '') {
		document.getElementById("formulaire_effect7").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect7").style.display = "block";
	}
}

function hideradioeffect8(){
    var effect8 = document.getElementById("formulaire_effect8_value").checked;
	if (effect8 == '') {
		document.getElementById("formulaire_effect8").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect8").style.display = "block";
	}
}

function hideradioeffect9(){
    var effect9 = document.getElementById("formulaire_effect9_value").checked;
	if (effect9 == '') {
		document.getElementById("formulaire_effect9").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect9").style.display = "block";
	}
}

function hideradioeffect10(){
    var effect10 = document.getElementById("formulaire_effect10_value").checked;
	if (effect10 == '') {
		document.getElementById("formulaire_effect10").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect10").style.display = "block";
	}
}

function hideradioeffect11(){
    var effect11 = document.getElementById("formulaire_effect11_value").checked;
	if (effect11 == '') {
		document.getElementById("formulaire_effect11").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect11").style.display = "block";
	}
}

function hideradioeffect12(){
    var effect12 = document.getElementById("formulaire_effect12_value").checked;
	if (effect12 == '') {
		document.getElementById("formulaire_effect12").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect12").style.display = "block";
	}
}

function hideradioeffect13(){
    var effect13 = document.getElementById("formulaire_effect13_value").checked;
	if (effect13 == '') {
		document.getElementById("formulaire_effect13").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect13").style.display = "block";
	}
}

function hideradioeffect14(){
    var effect14 = document.getElementById("formulaire_effect14_value").checked;
	if (effect14 == '') {
		document.getElementById("formulaire_effect14").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect14").style.display = "block";
	}
}

function hideradioeffect15(){
    var effect15 = document.getElementById("formulaire_effect15_value").checked;
	if (effect15 == '') {
		document.getElementById("formulaire_effect15").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect15").style.display = "block";
	}
}

function hideradioeffect16(){
    var effect16 = document.getElementById("formulaire_effect16_value").checked;
	if (effect16 == '') {
		document.getElementById("formulaire_effect16").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect16").style.display = "block";
	}
}

function hideradioeffect17(){
    var effect17 = document.getElementById("formulaire_effect17_value").checked;
	if (effect17 == '') {
		document.getElementById("formulaire_effect17").style.display = "none";	
	} else {
		document.getElementById("formulaire_effect17").style.display = "block";
	}
}