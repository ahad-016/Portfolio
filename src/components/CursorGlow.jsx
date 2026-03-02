import { useEffect, useState } from 'react';

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -300, y: -300 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop
        if (window.matchMedia('(pointer: fine)').matches) {
            setVisible(true);
        }

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!visible) return null;

    return (
        <div
            className="cursor-glow"
            style={{
                left: position.x,
                top: position.y,
            }}
        />
    );
}
