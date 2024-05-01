function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        objet : document.getElementById("objet").value,
        message: document.getElementById("message").value,
    };

emailjs.send("service_jitu0em" , "template_9ix6aad", params).then("alert(Email Sent!!!")
}