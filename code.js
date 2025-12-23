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
  {
    image: 'assets/image1.webp',
    title: '"Lossless Youths"',
    shortDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    fullDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. This is a deeper exploration into the concept of youth and its preservation. The artwork captures the essence of timeless moments and the beauty of fleeting experiences.'
  },
  {
    image: 'assets/image2.webp',
    title: '"Estrange Bond"',
    shortDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    fullDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. This piece explores the complex relationships between individuals, highlighting the strange and beautiful connections that bind us together despite our differences.'
  },
  {
    image: 'assets/image3.webp',
    title: '"The Gate Keeper"',
    shortDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    fullDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. A powerful representation of guardianship and protection, this work symbolizes the role of those who stand at the threshold between worlds, protecting what lies beyond.'
  },
  {
    image: 'assets/image4.webp',
    title: '"Last Trace Of Us"',
    shortDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    fullDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. An emotional journey through memory and loss, capturing the final remnants of what once was, leaving only traces of our existence in the world.'
  },
  {
    image: 'assets/image5.webp',
    title: '"Urban Decay"',
    shortDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    fullDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. This artwork examines the beauty found in decay, the transformation of urban landscapes, and the poetry of deterioration that tells stories of time and change.'
  },
  {
    image: 'assets/image1.webp',
    title: '"The Migration"',
    shortDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    fullDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. A visual narrative of movement and transition, capturing the essence of migration, both physical and metaphorical, as beings move through space and time seeking new beginnings.'
  }
];

function loadGallery() {
  const gallerySlider = document.getElementById('gallery_slider');
  if (!gallerySlider) return;
  
  gallerySlider.innerHTML = '';
  
  for (let i = 0; i < galleryImages.length; i++) {
    const item = galleryImages[i];
    const li = document.createElement('li');
    li.className = 'item';
    li.style.backgroundImage = `url('${item.image}')`;
    li.dataset.imageUrl = item.image;
    
    const content = document.createElement('div');
    content.className = 'content';
    
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = item.title;
    
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = item.shortDesc;
    description.dataset.fullText = item.fullDesc;
    description.dataset.shortText = item.shortDesc;
    
    const readMoreBtn = document.createElement('button');
    readMoreBtn.className = 'read_more_btn';
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleReadMore(description, readMoreBtn);
    });
    
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(readMoreBtn);
    li.appendChild(content);
    
    li.addEventListener('click', function() {
      openLightbox(item.image);
    });
    
    gallerySlider.appendChild(li);
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

function toggleReadMore(description, button) {
  const isExpanded = button.textContent === 'Read Less';
  
  if (isExpanded) {
    description.textContent = description.dataset.shortText;
    button.textContent = 'Read More';
  } else {
    description.textContent = description.dataset.fullText;
    button.textContent = 'Read Less';
  }
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

const mythCards = [
  {
    text: "If you believe hard enough, the universe will deliver what you want.",
    isFact: false,
    result: "MYTH"
  },
  {
    text: "Writing affirmations rewires your brain automatically.",
    isFact: false,
    result: "MYTH"
  },
  {
    text: "Belief changes how your brain filters and interprets information.",
    isFact: true,
    result: "SCIENCE"
  }
];

const cardsGrid = document.getElementById("cards_grid");

for (let i = 0; i < mythCards.length; i++) {
  const card = mythCards[i];
  
  const cardButton = document.createElement("button");
  cardButton.className = "myth_card";
  cardButton.type = "button";
  cardButton.dataset.index = i;
  cardButton.dataset.isFact = card.isFact;
  
  const cardImage = document.createElement("div");
  cardImage.className = "card_image";
  
  const cardText = document.createElement("p");
  cardText.textContent = card.text;
  
  const cardBack = document.createElement("div");
  cardBack.className = "card_back";
  cardBack.textContent = card.result;
  
  cardImage.appendChild(cardText);
  cardButton.appendChild(cardImage);
  cardButton.appendChild(cardBack);
  
  cardButton.addEventListener("click", function() {
    if (this.classList.contains("flipped")) return; 
    
    this.classList.add("flipped");
    
    if (i === mythCards.length - 1) {
      setTimeout(() => {
        alert("You win! This is the scientifically proven fact.");
      }, 300);
    } else {
      setTimeout(() => {
        alert("You lose! This is a myth, not a fact.");
      }, 300);
    }
  });
  
  cardsGrid.appendChild(cardButton);
}

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
