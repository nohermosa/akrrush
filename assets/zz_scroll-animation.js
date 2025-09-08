document.addEventListener('DOMContentLoaded', function() {
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Get all elements with the animation class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Function to check elements and animate if in viewport
  function checkAnimations() {
    animatedElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
      }
    });
  }
  
  // Run check on initial load and scroll
  checkAnimations();
  window.addEventListener('scroll', checkAnimations);
});