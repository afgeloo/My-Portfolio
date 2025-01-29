import './recents.css';
import { useState, useEffect } from 'react';

function Recents() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);
    const [animationClass, setAnimationClass] = useState<string | null>(null);
    const [dominantColors, setDominantColors] = useState<string[]>([]);

    const recentWorks = [
        { title: 'PharmaEase', category: 'Health Service', image: './src/assets/recentworks/pharmaease.png' },
        { title: 'eCarga', category: 'Ride-hailing', image: './src/assets/recentworks/ecarga.png' },
        { title: 'Final Invitation', category: 'Horror Game', image: './src/assets/recentworks/finalinv.png' },
        { title: 'Match & Spook', category: 'Matching Game', image: './src/assets/recentworks/matchspook.png' },
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

    // Set dominant color when component mounts
    useEffect(() => {
        const colors: string[] = [];
        recentWorks.forEach((work, index) => {
            const img = new Image();
            img.src = work.image;
            img.onload = () => {
                getDominantColor(img, (dominantColor) => {
                    colors[index] = dominantColor;
                    setDominantColors([...colors]);
                });
            };
        });
    }, []);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        setAnimationClass('pop-in'); // Set the pop-in animation class
    };

    const handleMouseLeave = () => {
        setAnimationClass('pop-out'); // Trigger the pop-out animation
        setTimeout(() => {
            setHoveredIndex(null); // Reset hovered index after animation completes
            setCursorPosition(null); // Reset cursor position
        }, 1); // Match the animation duration (0.3s)
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (hoveredIndex !== null) {
            const { clientX, clientY } = event; // Get cursor's absolute position
            const rect = event.currentTarget.getBoundingClientRect();
            setCursorPosition({
                x: clientX - rect.left,
                y: clientY - rect.top,
            });
        }
    };

    return (
        <div>
            <p className="recentworks">RECENT WORKS</p>

            {recentWorks.map((work, index) => (
                <div key={index}>
                    {/* Line before each work */}
                    <div className="line" style={{ width: '82%' }}></div>

                    <div
                        className="recentworks2"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <p className="description">{work.title}</p>
                        <p
                            className={`category${
                                index === 0
                                    ? '1'
                                    : index === 1
                                    ? '2'
                                    : index === 2
                                    ? '3'
                                    : index === 3
                                    ? '4'
                                    : '5' // Default case for all other indices
                            }`}
                        >
                            {work.category}
                        </p>

                        {/* Image Placeholder with dominant color background */}
                        {hoveredIndex === index && cursorPosition && dominantColors[index] && (
                            <div
                                className={`image-placeholder ${animationClass}`}
                                style={{
                                    left: `${cursorPosition?.x ? cursorPosition.x - 150 : 0}px`,
                                    top: `${cursorPosition?.y ? cursorPosition.y - 150 : 0}px`,
                                    background: dominantColors[index] ? `linear-gradient(135deg, ${dominantColors[index]}, rgb(141, 139, 139))` : undefined,
                                }}
                            >
                                <img
                                    src={work.image}
                                    alt={`${work.title} preview`}
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Line after the last work */}
            <div className="line" style={{ width: '82%' }}></div>
        </div>
    );
}

export default Recents;
