/*The functions will go through the formElement either loginForm or createAccountForm the type and the message
  Second line is stating the messageElemnt equals the form element message */
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");
  /* the messageElement.textcontent equals the message 
    second line messageElement.classList.remove will remove the "form__message--success and the form__message--error
    messageElement.classList.add will add the form__message and pass through the type provided by the actual parameter*/
  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}
/*it is taking the actual input field itself and than it can take it through the message
  second line will be adding the form__input--error
  Third line is grabing the actual parent input group and selecting the .form__input-error-message to set the message content*/
function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}
/* will clear out the input error message*/
function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}
/* 1st line is saying once document is ready to be worked with the function will be ran
   second and third line are referencing the forms login and createAccountForm*/
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  /*  querySeloctor will pass throught linkCreateAccount id eventlistener will be activcated when link is clicked the lginForm will be hidden
    Create account needs to be visible so a remove form hidden statement is given e=Event e.preventDefault prevents the default behavior*/
  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });
  /*Top request is reversed to do the oposite when login link is pressed the Create form will be hidden when the create account is clicked 
      login will be hidden  e=Event e.preventDefault prevents the default behavior when you click on the link it will take you to the actual page*/
  // document.querySelector("#linklogin").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   loginForm.classList.remove("form--hidden");
  //   createAccountForm.classList.add("form--hidden");
  // });
  /* loginForm,addEventlistener("submit") says at submitting the loginform we canevent for it can grab the e(eventobject) 
     e.preventDefault will prevent the form from being sibmitted through a traditional page refresh or submission you will the perform your AJAX or fetch login
     depending on the return value success or failure you will setFormMessage (loginForm, error, "Invalid username/password combination") message*/
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });
  /*this is selecting every input Element itself and for each one of those elements we can grab the input element
      second line when the input element is blurred event is added if the user is blurring focus away from the username field and also
      if the target value length is more than 0  but less than 10 set the error through the input element to say message Username must at least be 10characters in length */
  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        console.log("Error code detected");
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });
    /* event lstener will be listening to the input when someone put in any input it will trigger the event to clear input error throught the input element itself
    it will by default clear any error message in the input field when a user provides input inside of it*/
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
