var btnSubmit = document.forms['register-form']['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        register();
    }
};

function register() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Everything is ok!');
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < register.length; i++) {
                var registers = register[i];
                htmlContent += '<div class="register">';
                htmlContent += '<div class="song-name">' + registers.fullName + '</div>';
                htmlContent += '<div class="song-name">' + registers.email + '</div>';
                htmlContent += '<div class="song-name">' + registers.phone + '</div>';
                htmlContent += '<div class="song-name">' + registers.gender + '</div>';
                htmlContent += '<div class="song-name">' + registers.hobby + '</div>';
                htmlContent += '<div class="song-name">' + registers.introduceYourself + '</div>';
                htmlContent += '</div>';
            }
            document.getElementById('register').innerHTML += htmlContent;
        }
    };
}

function validateForm() {
    var isValid = true;
    var isValidFullName = true;
    var isValidEmail = true;
    var isValidPhone = true;
    var isValidGender = true;
    var isValidHobby = true;
    var isValidIntroduceYourself = true;

    var txtFullName = document.forms['register-form']['fullName'];
    var msgFullName = txtFullName.nextElementSibling;
    if (txtFullName.value == null || txtFullName.value.length == 0) {
        msgFullName.classList.remove('msg-success');
        msgFullName.classList.add('msg-error');
        msgFullName.innerHTML = 'Full name is required!';
        isValidFullName = false;
        // isValid = false;
        // return isValid;
    } else {
        msgFullName.classList.remove('msg-error');
        msgFullName.classList.add('msg-success');
        msgFullName.innerHTML = 'Ok!';
    }

    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
        // isValid = false;
        // return isValid;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok!';
    }

    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required!!';
        isValidPhone = false;
        // isValid = false;
        // return isValid;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok!';
    }

    var txtGender = document.forms['register-form']['gender'];
    var msgGender = txtGender.nextElementSibling;
    if (txtGender.value == null || txtGender.value.length == 0) {
        msgGender.classList.remove('msg-success');
        msgGender.classList.add('msg-error');
        msgGender.innerHTML = 'Gender is required!!';
        isValidGender = false;
        // isValid = false;
        // return isValid;
    } else {
        msgGender.classList.remove('msg-error');
        msgGender.classList.add('msg-success');
        msgGender.innerHTML = 'Ok!';
    }

    var txtHobby = document.forms['register-form']['hobby'];
    var msgHobby = txtHobby.nextElementSibling;
    if (txtHobby.value == null || txtHobby.value.length == 0) {
        msgHobby.classList.remove('msg-success');
        msgHobby.classList.add('msg-error');
        msgHobby.innerHTML = 'Hobby is required!!';
        isValidHobby = false;
        // isValid = false;
        // return isValid;
    } else {
        msgHobby.classList.remove('msg-error');
        msgHobby.classList.add('msg-success');
        msgHobby.innerHTML = 'Ok!';
    }

    var txtIntroduceYourself = document.forms['register-form']['introduceYourself'];
    var msgIntroduceYourself = txtIntroduceYourself.nextElementSibling;
    if (txtIntroduceYourself.value == null || txtIntroduceYourself.value.length == 0) {
        msgIntroduceYourself.classList.remove('msg-success');
        msgIntroduceYourself.classList.add('msg-error');
        msgIntroduceYourself.innerHTML = 'Full name is required!';
        isValidIntroduceYourself = false;
        // isValid = false;
        // return isValid;
    } else {
        msgIntroduceYourself.classList.remove('msg-error');
        msgIntroduceYourself.classList.add('msg-success');
        msgIntroduceYourself.innerHTML = 'Ok!';
    }

    isValid = isValidFullName && isValidEmail && isValidPhone && isValidGender && isValidHobby && isValidIntroduceYourself;
    return isValid;
}