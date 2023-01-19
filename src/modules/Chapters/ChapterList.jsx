import React, { useState, useEffect, useRef, useMemo } from "react";
import ChapterTile from "./ChapterTile";
import { usePlayer } from "../Player/PlayerContext";
import "./_chapters.css";

export default function ChapterList() {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { playlist } = usePlayer();

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      }),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return (
    <div
      className={`chapter-list ${isIntersecting && "animate-entry"}`}
      id="chapter-list"
      ref={ref}
    >
      {playlist.map((chapter) => (
        <ChapterTile
          key={chapter.id}
          title={chapter.title}
          image={chapter.image}
          video={chapter.video}
        />
      ))}
    </div>
  );
}
