import { useEffect, useState } from 'react';

export default function Loader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-wrapper ${hidden ? 'hidden' : ''}`}>
            <div className="loader">
                <span />
                <span />
                <span />
            </div>
        </div>
    );
}
