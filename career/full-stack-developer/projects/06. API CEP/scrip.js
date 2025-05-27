let streetName = document.getElementById("logradouro");
let neighborhoodName = document.getElementById("bairro");
let cityName = document.getElementById("cidade");
let stateName = document.getElementById("estado");
let isMessageError = false;

// Get value on input to use on API CEP
function getCEPNumber() {
  // Get value on input
  const elementButton = document.getElementById("cep").value;

  // Check if input is number or NaN
  const isNumber = parseInt(elementButton);
  if(isNaN(isNumber)) {
    postMessageErr();
    isMessageError = true;
  } else {
    getCEP(elementButton);
    isMessageError = false;
  }
}

// Message if input is different of valid numbers
function postMessageErr() {
  const bodyElement = document.body;
  const paragraphElement = document.createElement("p");
  paragraphElement.innerHTML = "Digite apenas números para o CEP.";
  bodyElement.appendChild(paragraphElement);
}

// Get data on API e put on HTML tags
function getCEP(numberCEP) {
  fetch(`https://brasilapi.com.br/api/cep/v2/${numberCEP}`)
    .then((response) => response.json())
    .then(data =>  {
      streetName.innerHTML = `Nome do Logradouro: <i>${data.street}</i>`;
      neighborhoodName.innerHTML = `Bairro: <i>${data.neighborhood}</i>`;
      cityName.innerHTML = `Cidade: <i>${data.city}</i>`;
      stateName.innerHTML = `Estado: <i>${data.state}`;
    })
    .catch(error => {
      console.log("Error Name: " + error.message);
    });
}

function deleteMessageError() {
  const bodyElement = document.body;

  if (isMessageError === true) {
    const paragraphElement = document.getElementsByTagName("p")[0];
    bodyElement.removeChild(paragraphElement);
  }  
}
