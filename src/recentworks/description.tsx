import React, { useEffect } from 'react';
import './description.css';

function Description() {
  // Function to detect when elements come into view
  const checkVisibility = () => {
    const elements = document.querySelectorAll('p');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('p-visible'); // Add class to trigger animation
      } else {
        element.classList.remove('p-visible'); // Remove class if not in view
      }
    });
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);

    // Call the function on initial load to check if any elements are already in view
    checkVisibility();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div>
      <p>Passionate about fostering excellence in <br /> driving meaningful contributions through <br /> impactful projects.</p>
    </div>
  );
}

export default Description;
