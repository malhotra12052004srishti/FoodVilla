import { useState, useEffect } from 'react';

const useOffline = () => {
    const [isOffline, setisOffline] = useState(false);

    useEffect(() => {

        const handleOnline = () => {
            setisOffline(false);
        };
        const handleOffline = () => {
            setisOffline(true);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);


    return isOffline;
};

export default useOffline;