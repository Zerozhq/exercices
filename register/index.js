
const form = document.getElementById("formularies")

form.addEventListener("submit", function (ev) {
ev.preventDefault()

const name = document.querySelector("input[name='name']").value
const sexo = document.querySelector("input[name='main']:checked").value
const familys = document.querySelector("input[name='family']").value
const numbers = document.querySelector("input[name='numbers']").value
const supreme = document.querySelector("input[name='supreme']").value

console.log({
  name,
  sexo,
  familys,
  numbers,
  supreme
})

alert(
  "Cadastro Realizado!" +
  "\nNome do campones: " + name +
  "\nSexo do campones: " + sexo +
  "\nNome da família: " + familys +
  "\nMembros da família: " + numbers + 
  "\nSupre-arca da família: " + supreme
)
})