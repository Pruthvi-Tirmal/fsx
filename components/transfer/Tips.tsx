import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageComponent from "../common/ImageComponent";
import dumbImg from "@/public/images/dummy-image.jpg";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { Lightbulb } from "lucide-react";
import { tips } from "@/constants/tips";
const Tips = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl flex gap-2 items-center">
          {" "}
          <Lightbulb className="w-9 h-9 p-2 relative rounded-full bg-amber-400 text-white" />
          Tips
        </DialogTitle>
      </DialogHeader>
      <Carousel className="w-full max-w-[600px]">
        <CarouselContent>
          {tips.map((tip) => (
            <CarouselItem key={tip.id}>
              <div className="p-1">
                <main className="w-full">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <ImageComponent src={dumbImg} alt="dummy image" fill />
                  </div>
                  <div className="mt-3 text-gray-800">
                    <h1 className="text-2xl font-semibold">{tip.title}</h1>
                    <p className="font-medium">{tip.subtitle}</p>
                  </div>
                </main>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Tips;
