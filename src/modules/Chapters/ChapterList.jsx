import React, { useState, useEffect, useRef, useMemo } from 'react';
import ChapterTile from './ChapterTile';
import './_chapters.css';

export default function ChapterList({ chapters }) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return (
    <div className={`chapter-list ${isIntersecting && 'animate-entry'}`} id="chapter-list" ref={ref}>
      { chapters.map(chapter => 
        <ChapterTile key={chapter.title} title={chapter.title} image={chapter.image} />)
      }
    </div>
  );
}