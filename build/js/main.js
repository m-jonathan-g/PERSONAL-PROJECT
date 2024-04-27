
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // Trigger animation
    const image = document.querySelector('[data-aos="slide-in"]');
    image.classList.add('animate-slide-in');
  }
});


