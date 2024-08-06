$(document).ready(function () {
  const $valorUnitarioInput = $(".inputUnitPrice");
  const $quantidadeEstoqueInput = $(".inputStockQuantity");
  let COUNT_PRODUCT = 1;
  let COUNT_ATTACHMENT = 0;

  const inputCEP = document.getElementById("inputCEP");
  const inputAddress = document.getElementById("inputAddress");
  const inputNeighborhood = document.getElementById("inputNeighborhood");
  const inputCity = document.getElementById("inputCity");
  const inputState = document.getElementById("inputState");




  // Atualizar valor do total do produto
  function calcularValorTotal() {
    const $valorTotalInput = $(".inputTotalPrice");
    let valorUnitario = parseFloat($valorUnitarioInput.val()) || 0;
    let quantidadeEstoque = parseFloat($quantidadeEstoqueInput.val()) || 0;
    let valorTotal = valorUnitario * quantidadeEstoque;

    $valorTotalInput.attr("disabled", "false");
    $valorTotalInput.val(`${valorTotal.toFixed(2)}`);
  }

  $valorUnitarioInput.on("input", calcularValorTotal);
  $quantidadeEstoqueInput.on("input", calcularValorTotal);

  // Produtos
  $('.btn-add-product').click((e) => {
    e.preventDefault();
    const containerProducts = $('.container-products');
    COUNT_PRODUCT++;
    containerProducts.append(Product(COUNT_PRODUCT));

    // Atualiza o valor total quando os valores unitário e quantidade em estoque são alterados
    $('.container-products').on('change', '.inputUnitPrice, .inputStockQuantity', function () {
      const $box = $(this).closest('.single-product');
      const $unitPrice = $box.find('.inputUnitPrice');
      const $stockQuantity = $box.find('.inputStockQuantity');
      const $totalPrice = $box.find('.inputTotalPrice');

      const valorUnitario = parseFloat($unitPrice.val());
      const qtdeEstoque = parseFloat($stockQuantity.val());
      const valorTotal = isNaN(valorUnitario) || isNaN(qtdeEstoque) ? 0 : valorUnitario * qtdeEstoque;

      $totalPrice.val(valorTotal.toFixed(2));
      console.log("asdasd");
    });


    // Adiciona o evento de clique ao botão de remoção do produto usando delegação
    containerProducts.on('click', '.btn-remove-product', function (e) {
      e.preventDefault();
      if (containerProducts[0].childElementCount > 1) {
        $(this).closest('.single-product').remove();
      } else {
        FLUIGC.toast({
          title: 'Ops!: ',
          message: 'Você deve informar pelo menos um produto',
          type: 'danger'
        });
      }
    });
  });


  // Anexos
  $('.btn-include-attachment').click((e) => {
    // e.preventDefault();
    const boxAttachment = $('.boxes-attachment');

    // Capturar o arquivo adicionado
    const fileInput = $(".inputFile")[0];
    if (fileInput && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      try {
        // Converter o arquivo para Blob e guardar na session
        const blob = new Blob([file], {type: file.type});
        const fileId = `attachment-${COUNT_ATTACHMENT}`;
        sessionStorage.setItem(fileId, blob);

        // criar item na tabela de anexos
        COUNT_ATTACHMENT++;
        boxAttachment.append(Attachment(COUNT_ATTACHMENT));
      } catch (e) {
        FLUIGC.toast({
          title: 'Ops!: ',
          message: 'Ocorreu um erro no upload do anexo',
          type: 'danger'
        });
      }
    } else {
      FLUIGC.toast({
        title: 'Ops!: ',
        message: 'Nenhum anexo selecionado',
        type: 'warning'
      });
    }

    // adiciona o evento de clique ao botão de remoção do aanexo
    boxAttachment.on('click', '.btn-delete-attachment', function (e) {
      e.preventDefault();

      if (boxAttachment[0].childElementCount > 1) {
        $(this).closest('.single-attachment').remove();
      } else {
        FLUIGC.toast({
          title: 'Ops!: ',
          message: 'Você deve informar pelo menos um anexo',
          type: 'danger'
        });
      }
    });

    // Adiciona o evento de clique ao botão de visualizar anexo
    boxAttachment.on('click', '.btn-view-attachment', function (e) {
      e.preventDefault();

      // Pega o nome do arquivo a ser baixado
      const fileName = $($(this).closest('.single-attachment')).data("file-key");

      // Recupera o Blob e o nome do arquivo do Session Storage
      const storedBlob = sessionStorage.getItem(`attachment-${COUNT_ATTACHMENT}`);
      const storedFileName = sessionStorage.getItem(fileName);

      if (storedBlob && storedFileName) {
        // Cria um objeto URL para o Blob
        const objectUrl = URL.createObjectURL(new Blob([storedBlob], {type: 'application/octet-stream'}));

        // Cria um elemento de link temporário para forçar o download
        const tempLink = document.createElement('a');
        tempLink.href = objectUrl;
        tempLink.setAttribute('download', fileName);
        document.body.appendChild(tempLink);
        tempLink.click();

        // Limpa o objeto URL
        document.body.removeChild(tempLink);
        URL.revokeObjectURL(objectUrl);
      } else {
        console.error('Não foi possível recuperar o arquivo do Session Storage.');
      }
    });
  });

  // Função para obter os dados do formulário
  function getFormData($form) {
    const unindexedArray = $form.serializeArray();
    const formData = {};

    $.map(unindexedArray, (n, i) => {
      formData[n['name']] = n['value'];
    });

    return formData;
  }

// Adicionar evento de submit ao formulário
  $('.btn-save-vendor').click(function (e) {
    e.preventDefault();

    let formData = {};
    // const validator = new ValidatorForm(document.querySelector(".form-data-vendor"));

    //      validator.validate();

    $('.form-data-vendor').find("input, select, textarea").each(function() {
      const field = $(this);
      let fieldName = field.attr("name");
      let fieldValue = field.val();

      formData[fieldName] = fieldValue;
    });

    let jsonString = JSON.stringify(formData);
    console.log(jsonString);
  });


});
