function changeContent() {
    let paragraph = document.getElementById('myParagraph');
    if (paragraph.innerHTML === 'This is the original content.') {
        paragraph.innerHTML = 'This is the new content.';
        paragraph.style.backgroundColor = 'lightgreen';
        paragraph.style.fontSize = '24px';
    } else {
        paragraph.innerHTML = 'This is the original content.';
        paragraph.style.backgroundColor = 'lightblue';
        paragraph.style.fontSize = '16px';
    }
}
