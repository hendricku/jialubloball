export const initScrollAnimations = () => {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    document.querySelectorAll('.scroll-animate').forEach((element) => {
      observer.observe(element);
    });
  }
};