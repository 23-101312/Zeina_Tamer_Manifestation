document.getElementById("style").innerHTML = `Your Credentials are Incorrect`

function test(){
  let gmail = document.getElementById("gmail").value;
  let password = document.getElementById("password").value;
  

  let localUsers = JSON.parse(localStorage.getItem("localUsers"));
  for (i=0; i<localUsers.length; i++) {

  if (gmail == localUsers[i].gmail && password == localUsers[i].password) {
    window.location = "index.html";
  } else {
  document.getElementById("style").style.display = "block"
  }
  }
}

document.getElementById("login_page_title").innerHTML = `Welcome Back`

document.getElementById("login_page_subtitle").innerHTML = ` Sign in to continue your journey`

document.getElementById("login_page_primary_btn").innerHTML = ` Sign In`