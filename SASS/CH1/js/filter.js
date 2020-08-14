function onFilterInput() {
    var inputElement = document.querySelector('input');
    var filter = inputElement.value.toUpperCase();
    var textValue;
    const liElements = document.getElementsByTagName("li");
    for (let i = 0; i < liElements.length; i++) {
        textValue = liElements[i].textContent || liElements[i].innerText;
        console.log(textValue.indexOf(filter));
    }

}
document.addEventListener('keyup', onFilterInput);