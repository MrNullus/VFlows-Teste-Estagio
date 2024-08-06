$(document).ready(function () {
  // Busca API Via CEP
  inputCEP.addEventListener("blur", function () {
    let cep = inputCEP.value.replace(/\D/g, '');

    // Verifica do CEP
    if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (!data.erro) {
            // Preencha os campos com os dados da resposta
            inputAddress.value = data.logradouro;
            inputNeighborhood.value = data.bairro;
            inputCity.value = data.localidade;
            inputState.value = data.uf;
          } else {
            alert('CEP não encontrado');
          }
        })
        .catch(function (error) {
          alert('Ocorreu um erro ao consultar o CEP');
        });
    }
  });
});