// Armazenar tag "p" na const "answer"
const answer = document.querySelector("p");

// Cálculo da conversão e inserção na tag "p"
function solve() {
  // Valor digitado em "input" é armazenado na const "valueInput"
  const valueInput = parseInt(document.querySelector("input").value);

  // Deixar campo "input" vazio após usuário clicar em calcular
  document.querySelector("input").value = "";

 /* Index da tag "option" selecionada para conversão 
    
    Index -- Tipo de Conversão
      0 --> CV para W
      1 --> HP para W
      2 --> W para CV
      3 --> W para HP
 */
  const selectInputIndex = document.querySelector("select").selectedIndex;

  if (isNaN(valueInput)) {
    answer.innerHTML = "Digite um valor";
  } else {
    if (selectInputIndex === 0) {
      const result = (valueInput * 735.99).toFixed(2);
      answer.innerHTML = "Resultado: " + result + "(W)";
    }  else if (selectInputIndex === 1) {
      const result = (valueInput * 745.7).toFixed(2);
      answer.innerHTML = "Resultado: " + result + "(W)";
    } else if (selectInputIndex === 2) {
      const result = (valueInput / 735.99).toFixed(2);
      answer.innerHTML = "Resultado: " + result + "(CV)";
    } else {
      const result = (valueInput / 745.7).toFixed(2);
      answer.innerHTML = "Resultado: " + result + "(HP)";
    }
  }
}
