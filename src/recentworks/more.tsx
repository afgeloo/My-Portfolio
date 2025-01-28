import { useEffect, useRef, useState } from 'react';
import './more.css';

function More() {
    const circleRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const circle = circleRef.current;
        const text = textRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (!circle || !text) return;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate offsets for the circle (larger movement range)
            const { x: originalX, y: originalY } = originalPosition;

            const distanceX = mouseX - originalX;
            const distanceY = mouseY - originalY;

            const maxOffsetCircle = 30; // Circle's movement range
            const maxOffsetText = 10; // Text's smaller movement range

            const offsetXCircle = Math.max(Math.min(distanceX, maxOffsetCircle), -maxOffsetCircle);
            const offsetYCircle = Math.max(Math.min(distanceY, maxOffsetCircle), -maxOffsetCircle);

            const offsetXText = Math.max(Math.min(distanceX, maxOffsetText), -maxOffsetText);
            const offsetYText = Math.max(Math.min(distanceY, maxOffsetText), -maxOffsetText);

            // Apply transforms: larger movement for circle, smaller movement for text
            circle.style.transition = 'transform 0.3s ease-out'; // smooth constant transition for circle
            text.style.transition = 'transform 0.3s ease-out'; // smooth constant transition for text

            circle.style.transform = `translate(${offsetXCircle}px, ${offsetYCircle}px)`;
            text.style.transform = `translate(${offsetXText}px, ${offsetYText}px)`;
        };

        const handleMouseEnter = () => {
            if (circle) {
                // Save the circle's original position on hover
                const rect = circle.getBoundingClientRect();
                setOriginalPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
            }
        };

        const handleMouseOut = () => {
            if (circle && text) {
                // Smoothly return both circle and text to their original positions
                circle.style.transition = 'transform 0.4s ease';
                text.style.transition = 'transform 0.4s ease';
                circle.style.transform = 'translate(0, 0)';
                text.style.transform = 'translate(0, 0)';
            }
        };

        if (circle) {
            circle.addEventListener('mousemove', handleMouseMove);
            circle.addEventListener('mouseenter', handleMouseEnter);
            circle.addEventListener('mouseleave', handleMouseOut);
        }

        return () => {
            if (circle) {
                circle.removeEventListener('mousemove', handleMouseMove);
                circle.removeEventListener('mouseenter', handleMouseEnter);
                circle.removeEventListener('mouseleave', handleMouseOut);
            }
        };
    }, [originalPosition]);

    return (
        <div ref={circleRef} className="circle1">
            <p ref={textRef} className="recentsdesc">
                More <br /> about me
            </p>
        </div>
    );
}

export default More;
