$(function() {
    $('#side-menu').metisMenu();
    $(".datepicker").datepicker();


    $('#new-activity-track').validate({
        rules: {
            calendario: { required: true },
            calorias: {
                required: true,
                number: true
            },
            hora: { required: true },
            tipo: { required: true },
            descricao: { required: true }
        },
        messages: {
            calendario: "Por favor, informe a data da atividade",
            calorias: "Por favor, informe as calorias gastas",
            hora: "Por favor, informe o horário que a atividade foi realizada",
            tipo: "Por favor, informe o tipo da atividade realizada",
            descricao: "Por favor, informe em detalhes a descricao dessa atividade"
        },
        submitHandler: function (form) {
            console.log('form validado');
            return redirect("../pages/activity-track.html");
        }
    });

});

$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100;
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
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