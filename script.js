// document.getElementById('testimonials').innerHTML += reviewElement; 
// fetch('Testimonials.txt')
//   .then(response => response.text())
//   .then(text => {
//     const reviews = text.split('\n');
//     for (let review of reviews) {
//       // code to parse and display each review
//     }
//   });


  var slideIndex = 1;
    showImage(slideIndex);

    function prevImage() {
      showImage(slideIndex -= 1);
    }

    function nextImage() {
      showImage(slideIndex += 1);
    }

    function showImage(n) {
      var i;
      var slides = document.getElementsByTagName("img");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }


// let slideIndex = 0;
// const slides = document.querySelectorAll('.slideshow img');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// function showSlides() {
//   // Hide all slides
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }

//   // Show the current slide
//   slides[slideIndex].style.display = 'block';
// }

// function prevImage() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   showSlides();
// }

// function nextImage() {
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   showSlides();
// }

// // Set the initial slide
// showSlides();

// // Add event listeners to the buttons
// prevButton.addEventListener('click', prevImage);
// nextButton.addEventListener('click', nextImage);

