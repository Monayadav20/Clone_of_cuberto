// Get the follower element
var follower = document.getElementById('follower');

// Function to update follower position
function moveFollower(event) {
    // Get mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    // Update follower position
    follower.style.left = mouseX + 'px';
    follower.style.top = mouseY + 'px';
}

// Add mousemove event listener to the document
document.addEventListener('mousemove', moveFollower);



// video section here...

document.addEventListener('DOMContentLoaded', function() {
  const textElements = document.querySelectorAll('.text');
  const videoElement = document.getElementById('backgroundVideo');

  textElements.forEach(textElement => {
    textElement.addEventListener('click', function() {
      const videoSource = this.getAttribute('data-video');
      videoElement.src = videoSource;
      videoElement.play();
    });
  });
});





// slide js here.

const fleft = document.getElementById('fleft');
const images = document.querySelectorAll('#imageContainer img');

fleft.addEventListener('scroll', () => {
  let scrollTop = fleft.scrollTop;
  let currentImageIndex = Math.floor(scrollTop / fleft.clientHeight);
  
  images.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
});


