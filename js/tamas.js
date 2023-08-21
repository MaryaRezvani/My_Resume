function myFunction() {
    let nameP = document.getElementById("username").value;
    let emailP = document.getElementById("email-id").value;
    let phoneP = document.getElementById("number").value;

    let msg = 'از شما متشکرم (' + nameP + ')<br>ایمیل شما: (' + emailP + ')<br>شماره تماس شما: (' + phoneP + ')<br>';
    let change1 = document.getElementById('willChange1');
    change1.innerHTML = msg;
    let change2 = document.getElementById('willChange2');
    change2.innerHTML = '\nبه زودی جواب خواهم داد';
}