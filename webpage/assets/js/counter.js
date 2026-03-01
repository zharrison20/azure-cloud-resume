const apiLink = 'counter-bfgvbeanc7fvdrhk.westus2-01.azurewebsites.net';
fetch(apiLink)
  .then(res => res.json())
  .then(data => document.getElementById('visitorCount').innerText = data.count);
