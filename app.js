let seccontain = document.getElementById('seccontain');

    function fun() {
      seccontain.style.transform = "translateX(680px)";
    
    }
const accordions = document.querySelectorAll('.accordiyan-listcontainer');

  accordions.forEach(container => {
    const title = container.querySelector('.accordian-title');

    title.addEventListener('click', () => {
      container.classList.toggle('active');

      // Optional: Close others
      accordions.forEach(other => {
        if (other !== container) {
          other.classList.remove('active');
        }
      });
    });
  });



  const sections = document.querySelectorAll('.contensfortimelinefirst');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Uncomment to animate once only
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3  // Triggers when 30% is in view
  });

  sections.forEach(section => observer.observe(section));




      const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;

            // Speed factor – smaller = faster
            const increment = target / 100;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 20); // adjust speed here
            } else {
                counter.innerText = `${target}+`;
            }
        };

        updateCounter();
    });




//  const courseBoxes = document.querySelectorAll('.coursebox');

//   // Get the slider container from the "Why Choose Code 99" section
//   const sliderContainer = document.getElementById('whychoosesectionsliderconatiner');

//   // Add click listener to each course box
//   courseBoxes.forEach(box => {
//     box.addEventListener('click', () => {
//       sliderContainer.classList.toggle('actives');
      
//       // OPTIONAL: Scroll to the slider section smoothly
//       sliderContainer.scrollIntoView({ behavior: 'smooth' });
//     });
//   });