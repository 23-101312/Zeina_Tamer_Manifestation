const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

let contact_form = document.querySelector(".contact_form")

function get_form_values() {
  return {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim()
  }
}

function validateForm() {
  let data = get_form_values()

  if (data.name.length < 2) {
    return "Name must be at least 2 characters"
  }

  if (data.email.includes("@") == false || data.email.includes(".") == false) {
    return "Please enter a valid email"
  }

  if (data.message.length < 10) {
    return "Message must be at least 10 characters"
  }

  return "valid"
}

function saveFormData() {
  let data = get_form_values()

  let new_submission = {
    name: data.name,
    email: data.email,
    message: data.message,
    time: new Date().toLocaleString()
  }

  let submissions = JSON.parse(localStorage.getItem("contact_form_submissions"))
  if (submissions == null) {
    submissions = []
  }

  submissions.push(new_submission)
  localStorage.setItem("contact_form_submissions", JSON.stringify(submissions))
}

function showSuccessSendMsg() {
  let success_msg = document.createElement("p")
  success_msg.className = "success_send_msg"
  success_msg.innerHTML = "Message sent successfully!"

  contact_form.after(success_msg)

  setTimeout(function () {
    success_msg.remove()
  }, 4000)
}

if (contact_form) {
  contact_form.addEventListener("submit", function (e) {
    e.preventDefault()

    let result = validateForm()

    if (result != "valid") {
      alert(result)
      return
    }

    saveFormData()
    showSuccessSendMsg()
    contact_form.reset()
  })
}
