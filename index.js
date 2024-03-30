function OpenMenu() {
  const body = document.body;
  body.classList.add("open");
}

function CloseMenu() {
  const body = document.body;
  body.classList.remove("open");
}

// template_m9bxp3s
// service_szejres
// Nt6Va1jBvglhI7Tuq

 async function sendEmail(event) {
   event.preventDefault();  
   const body = document.body;
   const loading = document.querySelector('.loading__spinner__wrapper')
   const form = document.querySelector('.contact__form')

try{
  
// Loading State
loading.classList.remove("hidden")


await emailjs.sendForm(
  "service_szejres",
  "template_m9bxp3s",
  event.target,
  "Nt6Va1jBvglhI7Tuq"
);

// Success State
form.reset()  
loading.classList.add("hidden")
body.classList.add("success-open")
setTimeout(() => {
 body.classList.remove("success-open")
},  5000)
console.log('hey the email has been sent!')
}

catch{
  loading.classList.add("hidden")
 alert ("An error has occured. Please try again later.")
}
 
}
