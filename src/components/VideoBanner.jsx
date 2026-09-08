import React, { useRef, useEffect } from 'react';

export default function VideoBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policy gracefully
      });
    }
  }, []);

  return (
    <section aria-label="Corporate Showcase Video Banner" className="w-full bg-[#072042] relative overflow-hidden leading-none">
      <video
        ref={videoRef}
        src="/assets/Final.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto block"
      />
    </section>
  );
}
