const input = document.getElementById("numtarjeta");

input.addEventListener("input", function() {
  const inputValue = this.value.replace(/\s/g, ""); 
  if (inputValue !== "") {
    const result = inputValue.match(/.{1,4}/g).join(" "); 
    this.value = result;
  }
});


