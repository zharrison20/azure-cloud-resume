window.addEventListener('DOMContentLoaded', (event) =>{
  getVistitCount();
})

const functionApi = 'https://counter-bfgvbeanc7fvdrhk.westus2-01.azurewebsites.net/api/counter'

const getVistitCount = () => {
  let count = 30;
  fetch(functionApi).then(response => {
    return response.json()
  }).then(response =>{
    console.log("Website called function API");
    count = response.count;
    document.getElementById("counter").innerText = count;
  }).catch(function(error){
    console.log(error);
  })
}
