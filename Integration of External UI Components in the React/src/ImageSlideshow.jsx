import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "https://via.placeholder.com/300/ff7f7f",
  "https://via.placeholder.com/300/7fbfff",
  "https://via.placeholder.com/300/7fff7f",
];

function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="space-y-4 text-center">
        <img src={images[index]} alt="Slide" className="rounded mx-auto" />

        <div className="flex justify-between">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ImageSlideshow;
