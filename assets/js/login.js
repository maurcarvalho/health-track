$(document).ready(function () {
    console.log("loaded login.js file");

    $('#login-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: "Por favor, informe seu email de login",
            password: "Por favor, informe sua senha mínimo 5 dígitos"
        },
        submitHandler: function (form) {
            console.log('form validado');
            return redirect("../pages/index.html");
        }
    });

    $('#recover-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: "Por favor, informe seu email para recuperar sua senha",
        },
        submitHandler: function (form) {
            console.log('form validado');
            return redirect("../pages/login.html");
        }
    });

    $('#register-form').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                equalTo: "#password",
                minlength: 5
            }
        },
        messages: {
            name: "Por favor, informe seu nome completo",
            email: "Por favor, informe seu email",
            password: "Por favor, informe sua senha de no mínimo 5 dígitos",
            confirm_password: "Por favor, informe a mesma senha digitada no campo anterior"
        },
        submitHandler: function (form) {
            console.log('form validado');
            return redirect("../pages/index.html");
        }
    });
});

function redirect(url) {
    var ua = navigator.userAgent.toLowerCase(),
        isIE = ua.indexOf('msie') !== -1,
        version = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 ou menor
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }
    else {
        window.location.href = url;
    }
}