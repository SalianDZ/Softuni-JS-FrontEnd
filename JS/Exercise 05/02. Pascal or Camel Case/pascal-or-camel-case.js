function solve(text, naming) {
    let casing = document.querySelector("#naming-convention").value;
    let input = document.querySelector("#text").value;
    let resultContainer = document.querySelector("#result");

    const words = input
        .toLowerCase()
        .trim()
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);

    switch (casing) {
      case "Camel Case":
        resultContainer.textContent = words[0] + words.slice(1).map(capitalize).join('');
        break;
      case "Pascal Case":
        resultContainer.textContent = words.map(capitalize).join('');
        break;
      default:
        resultContainer.textContent = 'Error!';
        break;
    }
  
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
}