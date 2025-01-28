import { useEffect, useRef, useState } from 'react';
import './header.css';

function Header() {
    const [, setHovered] = useState(false);

    const fontRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const [work, about, contact] = fontRefs.current; 

        const handleMouseMove = (e: MouseEvent, element: HTMLElement | null) => {
            if (!element) return;

            const circleSize = 10; 
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const distanceX = mouseX - element.offsetLeft - element.offsetWidth / 2;
            const distanceY = mouseY - element.offsetTop - element.offsetHeight / 2;

            const maxDistance = circleSize;
            const distance = Math.min(Math.sqrt(distanceX * distanceX + distanceY * distanceY), maxDistance);

            const angle = Math.atan2(distanceY, distanceX);
            const offsetX = distance * Math.cos(angle);
            const offsetY = distance * Math.sin(angle);

            element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };

        const handleMouseOut = () => {
            setHovered(false);
            if (work && about && contact) {
                work.style.transition = 'transform 0.4s ease';
                about.style.transition = 'transform 0.4s ease';
                contact.style.transition = 'transform 0.4s ease';
                work.style.transform = 'translate(0, 0)';
                about.style.transform = 'translate(0, 0)';
                contact.style.transform = 'translate(0, 0)';
            }
        };

        const handleMouseEnter = () => {
            setHovered(true);
            if (work && about && contact) {
                work.style.transition = 'transform 0.1s ease';
                about.style.transition = 'transform 0.1s ease';
                contact.style.transition = 'transform 0.1s ease';
            }
        };

        if (work && about && contact) {
            work.addEventListener('mousemove', (e) => handleMouseMove(e, work));
            about.addEventListener('mousemove', (e) => handleMouseMove(e, about));
            contact.addEventListener('mousemove', (e) => handleMouseMove(e, contact));
            work.addEventListener('mouseenter', handleMouseEnter);
            about.addEventListener('mouseenter', handleMouseEnter);
            contact.addEventListener('mouseenter', handleMouseEnter);
            work.addEventListener('mouseleave', handleMouseOut);
            about.addEventListener('mouseleave', handleMouseOut);
            contact.addEventListener('mouseleave', handleMouseOut);
        }

        return () => {
            if (work && about && contact) {
                work.removeEventListener('mousemove', (e) => handleMouseMove(e, work));
                about.removeEventListener('mousemove', (e) => handleMouseMove(e, about));
                contact.removeEventListener('mousemove', (e) => handleMouseMove(e, contact));
                work.removeEventListener('mouseenter', handleMouseEnter);
                about.removeEventListener('mouseenter', handleMouseEnter);
                contact.removeEventListener('mouseenter', handleMouseEnter);
                work.removeEventListener('mouseleave', handleMouseOut);
                about.removeEventListener('mouseleave', handleMouseOut);
                contact.removeEventListener('mouseleave', handleMouseOut);
            }
        };
    }, []);

    return (
        <div>
            <header>
                <img
                    src="./src/assets/brand/Logo 5.png"
                    alt="Logo"
                />
                <p className='headerfonts' ref={(el) => fontRefs.current[0] = el}>Works</p>
                <p className='headerfonts' ref={(el) => fontRefs.current[1] = el}>About</p>
                <p className='headerfonts' ref={(el) => fontRefs.current[2] = el}>Contact</p>
            </header>
        </div>
    );
}

export default Header;
