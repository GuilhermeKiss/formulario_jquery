$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD)12345-6789'
    })

    $('#cpf').mask('999 . 999 . 999 - 99', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000 - 000', {
        placeholder: '12345 - 678'
    })

    $('form').validate({
        errorClass: "my-error-class",
        validClass: "my-valid-class",
        highlight: function (element, errorClass, validClass) {
            $(element.form).find('label[for="lb_'+element.id+'"]')
            .addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find('label[for="lb_'+element.id+'"]')
            .removeClass(errorClass);
        },
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail corretamente.',
            telefone: 'Por favor, insira o seu telefone.',
            cpf: 'Por favor, insira o seu CPF.',
            endereco: 'Por favor insirao o seu endereço.',
            cep: 'Por favor insira o seu CEP.'
        },

        submitHandler: function(form) {
            const user = $('#nome').val();
            $('#mensagemSucesso').html(`<center><b>${user}</b>, seu cadastro foi realizado com <b>sucesso!</b> ✅</center>`);
            $('#nome').val("");
            $('#email').val("");
            $('#telefone').val("");
            $('#cpf').val("");
            $('#endereco').val("");
            $('#cep').val("");

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`ERRO! Existe(m) ${camposIncorretos} campo(s) incorreto(s).`);
            }

        }
    
    })

})