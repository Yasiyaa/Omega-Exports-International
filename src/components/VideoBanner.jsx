import React, { useRef, useEffect } from 'react';

export default function VideoBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Guarantee muted state for browser autoplay policy
    video.muted = true;
    video.defaultMuted = true;

    // Initial play attempt
    const attemptPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Handled gracefully by browser muted autoplay policy
        });
      }
    };

    attemptPlay();

    // Auto-resume if the browser stalls during network buffering
    const handleCanPlay = () => attemptPlay();
    const handleWaiting = () => attemptPlay();

    // Failsafe loop handler: guarantee continuous looping across all mobile and desktop browsers
    const handleEnded = () => {
      video.currentTime = 0;
      attemptPlay();
    };

    // Error recovery: reload and resume if a connection dropped
    const handleError = () => {
      setTimeout(() => {
        if (video) {
          video.load();
          attemptPlay();
        }
      }, 1000);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // IntersectionObserver: automatically ensure playback when visible in viewport
    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              attemptPlay();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section aria-label="Corporate Showcase Video Banner" className="w-full bg-[#072042] relative overflow-hidden leading-none">
      <video
        ref={videoRef}
        poster="/assets/video-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto block"
      >
        <source src="/assets/Final.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
}

