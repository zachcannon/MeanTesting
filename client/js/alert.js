function updateText() {
    var element = document.getElementById("clicker-box");
    var count = element.getAttribute('value');
    count++;
    element.setAttribute('value', count);
    element.innerHTML = count;
}
