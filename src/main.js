$(document).ready(() => {

  $(".btn-save-vendor").click((e) => {
    e.preventDefault()
    const validator = new ValidatorForm(document.querySelector(".form-data-vendor"));
    validator.validate();
  });
});
