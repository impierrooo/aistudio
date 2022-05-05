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

function fonctionAExecuter(){
	document.getElementById('prénom').style.backgroundColor = '#111111';
	document.getElementById('email').style.backgroundColor = '#111111';
	document.getElementById('message').style.backgroundColor = '#111111';
}

function Form1(){
	document.getElementById('formulaire_commande_form2').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form1').style.visibility = 'visible';
}

function Form2(){
	document.getElementById('formulaire_commande_form1').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form3').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form2').style.visibility = 'visible';
}

function Form3(){
	document.getElementById('formulaire_commande_form2').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form4').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form3').style.visibility = 'visible';
}

function Form4(){
	document.getElementById('formulaire_commande_form3').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form5').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form4').style.visibility = 'visible';
}

function Form5(){
	document.getElementById('formulaire_commande_form4').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form6').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form5').style.visibility = 'visible';
}

function Form6(){
	document.getElementById('formulaire_commande_form5').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form7').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form6').style.visibility = 'visible';
}

function Form7(){
	document.getElementById('formulaire_commande_form6').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form8').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form7').style.visibility = 'visible';
}

function Form8(){
	document.getElementById('formulaire_commande_form7').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form9').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form8').style.visibility = 'visible';
}

function Form9(){
	document.getElementById('formulaire_commande_form8').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form10').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form9').style.visibility = 'visible';
}

function Form10(){
	document.getElementById('formulaire_commande_form9').style.visibility = 'hidden';
	document.getElementById('formulaire_commande_form10').style.visibility = 'visible';
}