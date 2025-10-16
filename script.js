document.getElementById("cep").addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, "");
  if (valor.length > 5) valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  e.target.value = valor;
});

document.getElementById("uf").addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
});

document.getElementById("form-endereco").addEventListener("submit", (e) => {
  e.preventDefault();
  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = document.getElementById("numero").value;
  const uf = document.getElementById("uf").value;

  if (!/^\d{5}-\d{3}$/.test(cep)) return alert("CEP inválido!");
  if (logradouro.length < 5) return alert("Logradouro deve ter pelo menos 5 caracteres!");
  if (!/^\d+$/.test(numero)) return alert("Número deve conter apenas dígitos!");
  if (!/^[A-Z]{2}$/.test(uf)) return alert("UF inválido (ex: SP, RJ, MG)");

  alert("Endereço cadastrado com sucesso");
});
