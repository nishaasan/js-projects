function changeStyle() {
    let div = document.getElementById('myDiv');
    if (div.style.backgroundColor === 'lightblue') {
        div.style.backgroundColor = 'lightgreen';
        div.style.fontSize = '24px';
    } else {
        div.style.backgroundColor = 'lightblue';
        div.style.fontSize = '16px';
    }
}
