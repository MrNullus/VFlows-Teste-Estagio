const Attachment = (countAttachment) => {
  return `
    <!-- @FieldGroup Attachment -->
    <div class="fs-display-flex gap-5 p-2 justify-content-start align-items-center align-content-center start single-attachment" data-file-key="attachment-${countAttachment}">
      <!-- @ActionsBar -->
      <div class="actions-bar">
        <button type="button" class="btn btn-danger btn-delete-attachment">
          <i class="fi fi-rs-trash"></i>
        </button>
        <button type="button" class="btn btn-info btn-view-attachment">
          <i class="fi fi-rs-eye"></i>
        </button>
      </div>
      <!-- @AttachmentDetails -->
      <p class=" text-left">
        <strong>Documento anexo - ${countAttachment}</strong>
      </p>
    </div>
  `;
}