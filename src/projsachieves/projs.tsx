import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './projs.css';

function Projs() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null); // Track which card is flipped

  // Array of image paths and details
  const images = [
    { src: "./src/assets/mypics/Pic11.jpg", description: "Project 11", link: "https://example.com/11" },
    { src: "./src/assets/mypics/Pic10.jpg", description: "Project 10", link: "https://example.com/10" },
    { src: "./src/assets/mypics/Pic9.jpg", description: "Project 9", link: "https://example.com/9" },
    { src: "./src/assets/mypics/Pic5.jpg", description: "Project 5", link: "https://example.com/5" },
    { src: "./src/assets/mypics/Pic4.jpg", description: "Project 4", link: "https://example.com/4" },
    { src: "./src/assets/mypics/Pic3.jpg", description: "Project 3", link: "https://example.com/3" },
    { src: "./src/assets/mypics/Pic2.jpg", description: "Project 2", link: "https://example.com/2" },
    { src: "./src/assets/mypics/Pic1.jpg", description: "Project 1", link: "https://example.com/1" },
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

  return (
    <div className="gallery-container1">
      <p className="projsachievesdesc">PROJECTS AND ACHIEVEMENTS</p>
      <div className="gallery1" ref={galleryRef}>
        {/* Dynamically render image holders */}
        {images.concat(images).map((item, index) => ( // Duplicate images for infinite scroll effect
          <motion.div
            className="image-holder1"
            key={index}
            onClick={() => setFlippedIndex(index === flippedIndex ? null : index)}
            style={{ perspective: "1000px" }} // Add perspective for the 3D effect
          >
            <AnimatePresence mode="wait">
              {flippedIndex === index ? (
                // Back Side
                <motion.div
                  className="card-back"
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Visit Link
                  </a>
                </motion.div>
              ) : (
                // Front Side
                <motion.div
                  className="card-front"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={item.src}
                    alt={`Gallery Image ${index + 1}`}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      getDominantColor(img, (dominantColor) => {
                        const imageHolder = img.closest('.image-holder1');
                        if (imageHolder) {
                          applyGradientToImageHolder(imageHolder as HTMLElement, dominantColor);
                        }
                      });
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projs;
