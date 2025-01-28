import { useEffect, useRef } from 'react';
import './gallery.css';

function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = galleryRef.current?.querySelectorAll('.pic1, .pic2, .pic3');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="pic1">
        <img src="./src/assets/mypics/Pic11.jpg" alt="Gallery Image 1" />
      </div>
      <div className="pic2">
        <img src="./src/assets/mypics/Pic10.jpg" alt="Gallery Image 2" />
      </div>
      <div className="pic3">
        <img src="./src/assets/mypics/Pic9.jpg" alt="Gallery Image 3" />
      </div>
    </div>
  );
}

export default Gallery;
