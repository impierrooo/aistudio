function send() { 
	var prénom = document.getElementById("prénom").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
    var url = "https://discord.com/api/webhooks/961952682862575696/xwEF7gMBoYOEp44htJNyCOStZpkYc3rL1yIKaOqiTECqinNj1NNT6IiRqJzyNjK826OQ";
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
    
    request.send(JSON.stringify(params));  
}