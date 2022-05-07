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
		var url = "https://discord.com/api/webhooks/971871278086647849/5mtLDLHn-Ak_qQFl8NLoMzBv03ZMvkJBRvsLpj3EPWnhmOsvL0WCvLpkseAXM2DrNEkQ";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader('Content-type', 'application/json');

		var myEmbed2 = {
			"title": "Réponse du formulaire de contact",
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
        username: "Site Web ᴬᴵStudio",
        embeds: [ myEmbed2 ]
		}
		
		var params = {
        username: "Site Web ᴬᴵStudio",
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
}

function Form2(){
	document.getElementById('formulaire_commande_form1').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form3').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form2').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form3(){
	document.getElementById('formulaire_commande_form2').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form4').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form3').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form4(){
	document.getElementById('formulaire_commande_form3').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form5').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form4').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form5(){
	document.getElementById('formulaire_commande_form4').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form6').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form5').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form6(){
	document.getElementById('formulaire_commande_form5').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form7').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form6').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form7(){
	document.getElementById('formulaire_commande_form6').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form8').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form7').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form8(){
	document.getElementById('formulaire_commande_form7').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form9').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form8').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
}

function Form9(){
	document.getElementById('formulaire_commande_form8').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form9').style.visibility = 'visible';
	var obj = document.getElementById('formulaire_commande');
	obj.style.height = "1200px";
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

function rangeSlide6(value) {
	document.getElementById('rangeValue6').innerHTML = value;
}

function rangeSlide61(value) {
	document.getElementById('rangeValue61').innerHTML = value;
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

/* Animation des radios*/

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