let localLang = localStorage.getItem("language") || "EN";

let navItems = JSON.parse(localStorage.getItem("navItems" + localLang));

document.getElementById("nav_list").innerHTML += `
  <li class="active"><a href="">${navItems[0]}</a></li>
`;

for (let i = 1; i < navItems.length; i++) {
  document.getElementById("nav_list").innerHTML += `
    <li><a href="">${navItems[i]}</a></li>
  `;
}

document.getElementById('en').innerHTML = 'En';
document.getElementById('ar').innerHTML = 'Ar';
document.getElementById('login_link').innerHTML = localStorage.getItem("loginLink" + localLang);

document.getElementById('hero_title').innerHTML = localStorage.getItem("heroTitle" + localLang);
document.getElementById('hero_subtitle').innerHTML = localStorage.getItem("heroSubtitle" + localLang);

document.getElementById('skip_text').innerHTML = localStorage.getItem("skipText" + localLang);

document.getElementById("story_scroller").innerHTML += `
  <div class="story_frame">
    <div class="story_content">
      <img src="assets/girl1.png" class="story_girl">
      <p class="story_text">${localStorage.getItem("storyFrame1" + localLang)}</p>
    </div>
  </div>
`;

let imagesHTML2 = '';
imagesHTML2 += `<img src="assets/bubble1.png" class="story_neuron story_neuron_1">`;
imagesHTML2 += `<img src="assets/girl2.png" class="story_girl2">`;
document.getElementById("story_scroller").innerHTML += `
  <div class="story_frame story_frame_2">
    <p class="story_text2">${localStorage.getItem("storyFrame2" + localLang)}</p>
    <div class="story_content2">
      ${imagesHTML2}
    </div>
  </div>
`;

let imagesHTML3 = '';
imagesHTML3 += `<img src="assets/bubble2.png" class="story_neuron story_neuron_2">`;
imagesHTML3 += `<img src="assets/girl3.png" class="story_girl2">`;
document.getElementById("story_scroller").innerHTML += `
  <div class="story_frame story_frame_3">
    <p class="story_text2">${localStorage.getItem("storyFrame3" + localLang)}</p>
    <div class="story_content2">
      ${imagesHTML3}
    </div>
  </div>
`;

document.getElementById('cards_header_title').innerHTML = localStorage.getItem("cardsHeaderTitle" + localLang);
document.getElementById('cards_header_desc').innerHTML = localStorage.getItem("cardsHeaderDesc" + localLang);
document.getElementById('cards_hint').innerHTML = localStorage.getItem("cardsHint" + localLang);

document.getElementById('science_header_title').innerHTML = localStorage.getItem("scienceHeaderTitle" + localLang);
document.getElementById('science_header_desc').innerHTML = localStorage.getItem("scienceHeaderDesc" + localLang);

for (let i = 0; i < 3; i++) {
  document.getElementById(`hotspot_${i + 1}_title`).innerHTML = localStorage.getItem(`hotspot${i + 1}Title` + localLang);
  document.getElementById(`hotspot_${i + 1}_desc`).innerHTML = localStorage.getItem(`hotspot${i + 1}Desc` + localLang);
}

document.getElementById('contact_header_title').innerHTML = localStorage.getItem("contactHeaderTitle" + localLang);
document.getElementById('contact_header_desc').innerHTML = localStorage.getItem("contactHeaderDesc" + localLang);
document.getElementById('name_label').innerHTML = localStorage.getItem("nameLabel" + localLang);
document.getElementById('email_label').innerHTML = localStorage.getItem("emailLabel" + localLang);
document.getElementById('message_label').innerHTML = localStorage.getItem("messageLabel" + localLang);
document.getElementById('submit_btn').innerHTML = localStorage.getItem("submitBtn" + localLang);

function changeLang(lang) {
  localStorage.setItem("language", lang);
  window.location.reload();
}

function activate(e) {
  const slider = document.querySelector('.slider') || document.getElementById('gallery_slider');
  const items = document.querySelectorAll('.item');
  if (slider && items.length > 0) {
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);
  }
}

document.addEventListener('click',activate,false);

const galleryImages = [
  { image: 'assets/image1.webp' },
  { image: 'assets/image2.webp' },
  { image: 'assets/image3.webp' },
  { image: 'assets/image4.webp' },
  { image: 'assets/image5.webp' },
  { image: 'assets/image1.webp' }
];

function loadGallery() {
  let localLang = localStorage.getItem("language");
  let gallerySlider = document.getElementById('gallery_slider');
  
  gallerySlider.innerHTML = '';
  
  for (let i = 0; i < galleryImages.length; i++) {
    let title = localStorage.getItem(`galleryTitle${i + 1}` + localLang);
    let shortDesc = localStorage.getItem(`galleryShort${i + 1}` + localLang);
    let fullDesc = localStorage.getItem(`galleryFull${i + 1}` + localLang);
    
    gallerySlider.innerHTML += `
      <li class="item" style="background-image: url('${galleryImages[i].image}')" data-image-url="${galleryImages[i].image}">
        <div class="content">
          <h2 class="title">${title}</h2>
          <p class="description" data-full-text="${fullDesc}" data-short-text="${shortDesc}">${shortDesc}</p>
          <button class="read_more_btn" onclick="event.stopPropagation(); toggleReadMore(this)">${localStorage.getItem("readMore" + localLang)}</button>
        </div>
      </li>
    `;
  }
  
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
      openLightbox(this.dataset.imageUrl);
    });
  }
}

function openLightbox(imageUrl) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox_image');
  if (lightbox && lightboxImage) {
    lightboxImage.src = imageUrl;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function toggleReadMore(button) {
  let localLang = localStorage.getItem("language");
  let description = button.previousElementSibling;
  let isExpanded = button.textContent === localStorage.getItem("readLess" + localLang);
  
  description.textContent = isExpanded ? description.dataset.shortText : description.dataset.fullText;
  button.textContent = isExpanded ? localStorage.getItem("readMore" + localLang) : localStorage.getItem("readLess" + localLang);
}

loadGallery();

const lightboxClose = document.getElementById('lightbox_close');
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });
}

const cardsGrid = document.getElementById("cards_grid");

for (let i = 0; i < 3; i++) {
  let cardText = localStorage.getItem(`mythCard${i + 1}` + localLang);
  let isFact = i === 2;
  let resultText = isFact ? localStorage.getItem("scienceResult" + localLang) : localStorage.getItem("mythResult" + localLang);
  
  const cardButton = document.createElement("button");
  cardButton.className = "myth_card";
  cardButton.type = "button";
  cardButton.dataset.index = i;
  cardButton.dataset.isFact = isFact;
  
  const cardImage = document.createElement("div");
  cardImage.className = "card_image";
  
  const cardTextElement = document.createElement("p");
  cardTextElement.textContent = cardText;
  
  const cardBack = document.createElement("div");
  cardBack.className = "card_back";
  cardBack.textContent = resultText;
  
  cardImage.appendChild(cardTextElement);
  cardButton.appendChild(cardImage);
  cardButton.appendChild(cardBack);
  
  cardButton.addEventListener("click", function() {
    if (this.classList.contains("flipped")) return; 
    
    this.classList.add("flipped");
    
    if (i === 2) {
      setTimeout(() => {
        alert(localStorage.getItem("winMessage" + localLang));
      }, 300);
    } else {
      setTimeout(() => {
        alert(localStorage.getItem("loseMessage" + localLang));
      }, 300);
    }
  });
  
  cardsGrid.appendChild(cardButton);
}

let contact_form = document.getElementById("contact_form")

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

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 3000);
});

let neurologyFacts = [
  "Your brain creates new neural pathways every time you learn something new.",
  "Belief activates the same brain regions as actual experience, which is why visualization can feel so real.",
  "The placebo effect proves that belief alone can trigger measurable physical changes in your brain and body.",
  "When you focus on a goal, your brain's reticular activating system filters information to match your beliefs.",
  "Neuroplasticity means your brain can literally rewire itself based on your thoughts and actions."
];

let randomNum = Math.floor(Math.random() * neurologyFacts.length);
document.getElementById("random_fact_card").innerHTML = `<button onclick="closeAd()">x</button><p>${neurologyFacts[randomNum]}</p>`;
document.getElementById("random_fact_card").style.backgroundImage = `url(assets/story.png)`;

function closeAd(){
  document.getElementById("random_fact_card").style.display = "none";
}
