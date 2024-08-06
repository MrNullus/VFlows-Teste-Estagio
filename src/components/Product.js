const Product = (countProduct) => {
  return `
    <!-- @FieldGroup SingleProduct   -->
    <div data-key="${countProduct}" class="single-product col-lg-12 fs-display-flex align-items-center mb-4">
      <!--  @FormGroup Remover Produto -->
      <button type="button" class="mx-2 btn btn-danger btn-remove-product">
        <i class="fi fi-rs-trash"></i>
      </button>

      <fieldset class="field-group-product">
        <legend class="w-auto px-2">
          Produto - ${countProduct}
        </legend>

        <!-- @ContainerDataProduct -->
        <div class="col-xs-11 container-data-product fs-display-flex flex-row ">
          <figure class="col-xs-2">
            <img class="img-product" src="./public/images/product/default.png" alt="Produto 1" width="70px"
                 height="70px">
              <figcaption class="text-sm-start mt-3">Produto 1</figcaption>
          </figure>

          <div class="col-lg-12 form-group-data-product fs-display-flex flex-column">
            <!--  @FormGroup Nome do Produto -->
            <div class="col-xs-12 form-group">
              <label for="inputProductName" id="labelProductName">Nome do Produto</label>
              <input
                class="form-control" type="text"
                name="inputProductName"
                id="inputProductName"
                required
                aria-required="true"
                pattern="[A-Za-z\s1-9]{2,200}"
                title="A entrada deve ter entre 2 e 200 caracteres"
              >
            </div>

            <div class="form-group fs-display-flex align-items-center align-content-between">
              <!--  @FormGroup Unidade de Medida -->
              <div class="col-xs-3 form-group">
                <label for="inputMeasureUnit" id="labelMeasureUnit">Unidade de
                  Medida</label>
                <input
                  class="form-control" type="text"
                  name="inputMeasureUnit"
                  id="inputMeasureUnit"
                  required
                  aria-required="true"
                  pattern="[A-Za-z\s]{2,50}"
                  title="Digite uma Unidade de Medida válida (2 a 50 caracteres, incluindo letras e espaços)"
                >
              </div>

              <!--  @FormGroup Quantidade em Estoque -->
              <div class="col-xs-3 form-group">
                <label for="inputStockQuantity" id="labelStockQuantity">QDTDE. em
                  Estoque</label>
                <input
                  class="form-control" type="number"
                  name="inputStockQuantity"
                  id="inputStockQuantity"
                  required
                  aria-required="true"
                  min="0" step="1"
                >
              </div>

              <!--  @FormGroup Valor Unitário -->
              <div class="col-xs-3 form-group">
                <label for="inputUnitPrice" id="labelUnitPrice">Valor Unitário</label>
                <input
                  class="form-control" type="text"
                  name="inputUnitPrice"
                  id="inputUnitPrice"
                  required
                  aria-required="true"
                  pattern="^\d{1,9}(\.\d{2})?$"
                  title="Digite um Valor Unitário válido (máximo 9 dígitos, com até 2 casas decimais)"
                >
              </div>

              <!--  @FormGroup Valor Total -->
              <div class="col-xs-3 form-group">
                <label for="inputTotalPrice" id="labelTotalPrice">Valor Total</label>
                <input
                  class="form-control" type="number"
                  name="inputTotalPrice"
                  id="inputTotalPrice"
                  disabled
                  required
                  aria-required="true"
                >
              </div>
            </div>
          </div>
          <!-- @ContainerDataProduct/ -->
        </div>
      </fieldset>
      <!-- @FieldGroup SingleProduct/   -->
    </div>
  `;
}