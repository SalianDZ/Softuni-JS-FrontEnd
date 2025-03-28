function solve() {
  const text = document.querySelector('#input').value.trim();
  const result = document.querySelector('#output');

  if (text === '') return;

  result.textContent = '';

  const sentences = text
    .split('.')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  let currentParagraph = [];

  sentences.forEach((sentence, i) => {
    currentParagraph.push(sentence);

    if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
      const paragraph = document.createElement('p');
      paragraph.textContent = currentParagraph.join('. ') + '.';
      result.appendChild(paragraph);
      currentParagraph = [];
    }
  });
}
