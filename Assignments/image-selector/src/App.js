import "./App.css";
import { useState } from "react";


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

function App() {
  const [image, setImage] = useState(images[0].src);

  const handleClick = (newImage) => {
    setImage(newImage);
  };
  return (
    <>
      <div className="container">
        <img src={image} alt="image"/>
      </div>
      <div className="images">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
          onClick={() => handleClick(img.src)}
        />
      ))}
      </div>
    </>
  );
}

export default App;
