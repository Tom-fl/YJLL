$.get("http://127.0.0.1:3000/api/login", function(data) {
    console.log(data[0].email);
    // console.log($('li[class="am-active"]'));

    $('.am-btn').click(function() {
        let email = $('#email').val();
        let password = $('#password').val();
        let passwordRepeat = $('#passwordRepeat').val();

        let emailAll = data[0].email;
        if (email.indexOf('@') != -1) {
            for (item in emailAll) {
                if (email === emailAll[item].name && password === emailAll[item].password && passwordRepeat === password) {
                    console.log('ok');
                }
            }
        } else {
            console.log('请输入');
        }

    });

})