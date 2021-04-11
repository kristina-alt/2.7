$(document).ready(function () {
    $.validator.addMethod('regexp', function (value, element, params) {
        var expression = new RegExp(params);
        return this.optional(element) || expression.test(value);
    }),
    $("#register_form").validate({
        rules:
        {
            name:
            {
                required: true,
                minlength: 2,             
            },
            surname:
            {
                required: true,
                minlength: 2,             
            },
			number: 
			{
				required: true,
                regexp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
            },
            mail: {
                required: true,
                email: true
            },
			comment:
            {
                required: true,
                minlength: 2,             
            }, 
			date:
            {
                required: true,
                regexp: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/
            },			
        },
		messages:
        {
            name://Имя поля(input name="name")
            {
                required: "Поле имя обязательно для заполнения",//Свойство у которого должно измениться сообщение
                minlength: "Минимальное имя 2 символа",
            },
            surname://Имя поля(input name="surname")
            {
                required: "Поле имя обязательно для заполнения",//Свойство у которого должно измениться сообщение
                minlength: "Минимальная фамилия 2 символа",
            },
            mail: {
                required: "Данное поле обязательно для заполнения",
                email: "E-mail введён неккоректно",
                regexp: "Поле должно содержать только английские буквы и симолы"
            },
            date: {
                required: "Данное поле обязательно для заполнения",
                regexp: "Поле дата заполнено неккоректно"
            },
            number: {
                required: "Данное поле обязательно для заполнения",
                regexp: "Поле номер телефона заполнено неккоректно"
            },
            
        }
    });
});
