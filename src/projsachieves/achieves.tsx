import React, { useEffect, useRef, useState } from 'react';
import './achieves.css';

function Achieves() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollDuration, setScrollDuration] = useState<number>(400); // Adjust scroll duration dynamically

  // Array of image paths (you can add up to 100 or more)
  const images = [
    "./src/assets/mypics/Pic11.jpg",
    "./src/assets/mypics/Pic10.jpg",
    "./src/assets/mypics/Pic9.jpg",
    "./src/assets/mypics/Pic5.jpg",
    "./src/assets/mypics/Pic4.jpg",
    "./src/assets/mypics/Pic3.jpg",
    "./src/assets/mypics/Pic2.jpg",
    "./src/assets/mypics/Pic1.jpg",
    // Add more images here
  ];

  // Function to get the dominant color from an image
  const getDominantColor = (image: HTMLImageElement, callback: (color: string) => void) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      r += pixels[i]; // Red
      g += pixels[i + 1]; // Green
      b += pixels[i + 2]; // Blue
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    callback(`rgb(${r}, ${g}, ${b})`);
  };

  // Function to apply the gradient background
  const applyGradientToImageHolder = (imageHolder: HTMLElement, dominantColor: string) => {
    const gradient = `linear-gradient(135deg, ${dominantColor}, rgba(0, 0, 0, 0.3))`;
    imageHolder.style.background = gradient;
  };

  // Dynamically set the scroll duration based on the number of images
  useEffect(() => {
    const numImages = images.length;
    const baseDuration = 201; // Base duration in seconds for 10 images

    // Calculate the duration so that the speed is the same no matter the number of images
    setScrollDuration(baseDuration * (numImages / 10));

    const gallery = galleryRef.current;

    if (gallery) {
      const children = Array.from(gallery.children);

      // Duplicate the slides to create an endless scrolling effect
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        gallery.appendChild(clone);
      });

      const imageHolders = Array.from(gallery.querySelectorAll('.image-holder2'));

      imageHolders.forEach((imageHolder) => {
        const img = imageHolder.querySelector('img') as HTMLImageElement;

        if (img) {
          img.onload = () => {
            getDominantColor(img, (dominantColor) => {
              applyGradientToImageHolder(imageHolder as HTMLElement, dominantColor);
            });
          };
        }
      });
    }
  }, [images.length]);

  return (
    <div className="gallery-container2">
      <div className="gallery2" ref={galleryRef} style={{ animationDuration: `${scrollDuration}s` }}>
        {/* Dynamically render image holders */}
        {images.map((src, index) => (
          <div className="image-holder2" key={index}>
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achieves;
