function solve() {
   let searchString = document.querySelector("#searchField").value.toLowerCase();

   if(searchString == '') return;

   const rows = document.querySelectorAll("table tbody tr");
   [...rows].map(r => r.classList.remove('select'));

   for (let row of rows) {
      const cells = row.querySelectorAll('td');

      for (let cell of cells) {
        if (cell.textContent.toLowerCase().includes(searchString)) {
         row.classList.add('select');
         break;
        }
      }
   }
}