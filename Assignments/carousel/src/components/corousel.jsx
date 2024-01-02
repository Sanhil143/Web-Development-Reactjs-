import React, { useEffect, useState } from "react";
import './corousel.css';

const images = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1665423291654-f937fd6e649e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "/anastasiia-rozumna-PgP9L5CWI38-unsplash.jpg",
  },
  {
    id: 3,
    src: "/artem-kniaz-0Ad6Q6SQo1Y-unsplash.jpg",
  },
  {
    id: 4,
    src: "/jeshoots-com-TWRCH-GaKr4-unsplash.jpg",
  },
  {
    id: 5,
    src: "/stories-l2UalXYB-yM-unsplash.jpg",
  },
  {
    id: 6,
    src: "/kateryna-hliznitsova-ocb4ft1qyjA-unsplash.jpg",
  },
];

const Corousel = () => {
  const [img, setImg] = useState(0);

  const prev = () => {
      setImg((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }
  const next = () => {
      setImg((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
      const auto = setInterval(next, 3000);
      return () => clearInterval(auto);
  }, [img]);

  return (
      <div className="carousel-container">
      <button className="arrow-button" onClick={prev}>
        Prev
      </button>
      <div className="slide-container">
        {images.map((i) => (
            <img key={i.id} src={i.src} alt={`Slide ${img + 1}`} />
        ))}
      </div>
      
      <button className="arrow-button" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Corousel;
