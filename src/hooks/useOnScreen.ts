"use client"

import { useEffect, useRef, useState } from "react";

const useOnScreen = (options:any) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]); // dependencies should include options

  return { ref, isIntersecting };
};


export default useOnScreen