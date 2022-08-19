// Import stylesheets
import './style.css';

// Write Javascript code!
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(increment + c)}`;
      setTimeout(updateCounter, 5);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
