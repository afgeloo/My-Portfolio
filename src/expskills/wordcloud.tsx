import React from 'react';
import './wordcloud.css';

function Wordcloud() {
  const words = [
    "Full-Stack", "React", "Flutter", "Excel", "Python", "C", 
    "C++", "Database", "Data Science", "Java", "MySQL", "Nodejs", "Firebase"
  ];

  return (
    <div className="wordcloud-container">
      <div className="cloud-shape">
        <div className="wordcloud">
          {words.map((word, index) => (
            <div
              className="word"
              key={index}
              style={{
                fontSize: `${Math.random() * (3 - 1) + 1}rem`, // Random font size
                left: `${Math.random() * 60 + 10}%`,  // Random horizontal position within the cloud
                top: `${Math.random() * 60 + 10}%`,   // Random vertical position within the cloud
                animationDelay: `${Math.random() * 5}s`, // Staggered animation timing
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wordcloud;
