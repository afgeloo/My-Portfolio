import './recents.css';
import { useState } from 'react';

function Recents() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);
    const [animationClass, setAnimationClass] = useState<string | null>(null);

    const recentWorks = [
        { title: 'PharmaEase', category: 'Health Service', image: './src/assets/mypics/Pic11.jpg' },
        { title: 'eCarga', category: 'Ride-hailing', image: './src/assets/mypics/Pic10.jpg' },
        { title: 'Match & Spook', category: 'Game', image: './src/assets/mypics/Pic9.jpg' },
    ];

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
                                    : '3'
                            }`}
                        >
                            {work.category}
                        </p>

                        {/* Image Placeholder */}
                        {hoveredIndex === index && cursorPosition && (
                            <div
                                className={`image-placeholder ${animationClass}`}
                                style={{
                                    left: `${cursorPosition?.x ? cursorPosition.x - 150 : 0}px`,
                                    top: `${cursorPosition?.y ? cursorPosition.y - 150 : 0}px`,
                                }}
                            >
                                <img
                                    src={work.image}
                                    alt={`${work.title} preview`}
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
