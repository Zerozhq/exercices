const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  ev.preventDefault()

 const dados = document.querySelector("input[name='dado']:checked").value

 alert("Dado é :" + dados)

 
})