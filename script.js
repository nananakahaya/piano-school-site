const form = document.getElementById("contact-form");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  message.textContent =
    "お問い合わせありがとうございます。送信が完了しました。";

  form.reset();

});