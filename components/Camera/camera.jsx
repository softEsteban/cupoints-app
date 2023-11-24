import { useEffect, useRef } from "react";

const CameraComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((error) => {
                    console.error("Error accessing camera:", error);
                });
        }
    }, []);

    return (
        <div>
            <h1>Camera Example</h1>
            <video ref={videoRef} autoPlay playsInline />
        </div>
    );
};

export default CameraComponent;
