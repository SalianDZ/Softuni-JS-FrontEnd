function solve() {
   // TODO
   let towns = document.querySelectorAll("#towns li");
   let searchString = document.querySelector("#searchText").value.toLowerCase();
   let resultElement = document.querySelector("#result");

   if (searchString == '') return;


   towns.forEach(town => {
      
      town.classList.remove('match'); 
      town.style.fontWeight = "notmal";
      town.style.textDecoration = "none";

         if(town.textContent.toLowerCase().includes(searchString)){
            console.log(town.textContent, "Found ");
            town.classList.add('match'); 
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
         }
   }); 
   resultElement.textContent = `${document.querySelectorAll('.match').length} matches found`;
}