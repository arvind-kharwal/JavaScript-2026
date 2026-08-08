function say(message) {
    message = (typeof message == 'undefined') ? 'Hi':'Hello';
    console.log(message);
}
say(); // 'Hi'