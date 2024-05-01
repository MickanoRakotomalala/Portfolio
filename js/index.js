function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        objet : document.getElementById("objet").value,
        message: document.getElementById("message").value,
    };
const serviceID = "service_jtubjse"
const templateID = "template_krsqgyj"

emailjs.send("serviceID" , "templateID", params)
.then((res) => {
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("objet").value = " ";
    document.getElementById("message").value = " ";
    console.log(res);
    alert("your email sent succefully");
})
.catch((err) => console.log(err));
}