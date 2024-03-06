function SendMail(){
    var params = {
        from_name : document.getElementById("forInput").value,
        email_id : document.getElementById("emailInput").value,
        message : document.getElementById("textareaInput").value
    }
    emailjs.send("service_9zqjyri", "template_ah9t8n5", params).then(function (res) {
        alert("Succes! ");
    })
}