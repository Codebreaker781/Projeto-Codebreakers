document.addEventListener('DOMContentLoaded', () => {
  console.log("Particles rodando");

  const containers = document.querySelectorAll('.particles');

  containers.forEach(container => {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('span');

      particle.style.position = 'absolute';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';

      const size = 5 + Math.random() * 10;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      particle.style.animation = 'floatUp linear infinite';
      particle.style.animationDuration = (8 + Math.random() * 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';

      particle.style.opacity = Math.random();

      container.appendChild(particle);
    }
  });
});