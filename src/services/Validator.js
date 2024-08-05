class ValidatorForm {
  constructor(form) {
    this.OPTIONAL_FIELDS = [
      "StateRegistration",
      "MunicipalRegistration",
      "Address",
      "Complement",
      "Neighborhood",
      "City",
      "State"
    ];
    this.REQUIRED_FIELDS = [
      "CNPJ",
      "CompanyName",
      "TradeName",
      "CEP",
      "MunicipalRegistration",
      "Address",
      "Number",
      "ContactName",
      "Phone",
      "Email",
      "ProductName",
      "MeasureUnit",
      "StockQuantity",
      "UnitPrice",
      "TotalPrice"
    ];
    this.form = form;
    console.log(form.elements.length);
  }

  isEmpty(value) {
    return value.trim() === "";
  }

  checkRequiredFields() {
    this.REQUIRED_FIELDS.forEach((field) => {
      const inputName = `input${field}`;

      // Se o campo estiver vazio, mostrar um alerta e retornar false para não enviar o formulário
      if (this.isEmpty(this.form.elements[inputName].value)) {
        const textLabel = $(`label${field}`).text();
        $(`#${inputName}`).after(`
            <div class="alert alert-danger" role="alert">
                Por favor, preencha o campo ${textLabel}.
            </div>
        `);

        return false;
      }
    });
  }


  checkRulesByField(field, rule) {
    if (field === "CNPJ" && rule.test(field.value)) {
      const textLabel = $(`label${field}`).text();
      $(`#${inputName}`).after(`
         <div class="alert alert-danger" role="alert">
            Por favor, preencha o campo corretamente ${textLabel}.
        </div>
      `);
    }

  }

  validate() {
    this.checkRequiredFields();
    this.checkRulesByField();
  }

}
