window.addEventListener('DOMContentLoaded', (event) =>{
  getVistitCount();
})

const functionApi = 'counter-bfgvbeanc7fvdrhk.westus2-01.azurewebsites.net'

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
