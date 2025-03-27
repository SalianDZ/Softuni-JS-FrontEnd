function extractText() {
    let items = document.querySelectorAll('ul li');
    let element = document.querySelector('#result');

    console.log();
    element.value = [...items].map(e => e.textContent.trim()).join('\n').trim();
}