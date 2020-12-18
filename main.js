// Navigation
const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', ()=> {
  menu.classList.toggle('active');
})


// validate (Jquery)
$(document).ready(function() {
  $("#form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      fullname : {
      required: true,
      minlength: 3
      },
      email: {
        required: true,
        email: true
        },
        message : {
          required: true,
          minlength: 5
          }},
        messages: {
          name: {
          minlength: "Name should be at least 3 characters"
          },
          email: {
            email: "The email should be in the format: abc@domain.tld"
          }}
  });
});

// submit 
window.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");
  const status = document.getElementById("status");
  
  function success() {
    form.reset();
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});


function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}