import { useState, useEffect, useRef } from 'react';

/**
 * A custom React hook that tells you when an element is visible on the screen.
 * @param {Object} options - Intersection Observer options (e.g., threshold, rootMargin).
 * @returns {[React.RefObject, boolean]} - A ref to attach to the element and a boolean indicating if it's visible.
 */
export default function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // If the element is intersecting (visible)
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing the element once it has become visible to prevent re-triggering
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]); // Re-run effect if ref or options change

  return [ref, isVisible];
}