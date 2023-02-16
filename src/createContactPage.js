export function createContactForm() {
  let contactForm = document.createElement("form");
  contactForm.action = "https://httpbin.org/get";
  contactForm.method = "get";
  contactForm.id = "contact-form";

  contactForm.append(createFormTitle());
  contactForm.append(createFormField("fullName", false));
  contactForm.append(createFormField("email", false));
  contactForm.append(createFormField("message", true));
  contactForm.append(createSubmitButton());

  return contactForm;
}

function createFormTitle() {
  let formTitle = document.createElement("div");
  formTitle.classList.add("form-title");

  let contactUs = document.createElement("div");
  contactUs.classList.add("form-contact-us");
  contactUs.textContent = "Contact Us";

  let formNote = document.createElement("div");
  formNote.classList.add("form-note");
  formNote.textContent = "Please contact us for more information";

  formTitle.append(contactUs, formNote);
  return formTitle;
}

function createFormField(labelName, isTextArea) {
  let formField = document.createElement("div");
  formField.classList.add("form-field");

  let label = document.createElement("label");
  switch (labelName) {
    case "fullName":
      label.textContent = "Full Name";
      break;
    case "email":
      label.textContent = "E-mail";
      break;
    default:
      label.textContent = "Message";
  }

  let input;
  if (isTextArea) {
    input = document.createElement("textarea");
    input.cols = 30;
    input.rows = 5;
  } else {
    input = document.createElement('input');
    input.type = 'text';
    input.autocomplete = 'on';
  }

  input.name = labelName;
  input.id = labelName;
  input.required = true;

  formField.append(label, input);
  return formField;
}

function createSubmitButton() {
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'submit';

    return submit;
}