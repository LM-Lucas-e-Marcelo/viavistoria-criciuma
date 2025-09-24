import { Heart, Users, Shield } from "lucide-react";
import mini9 from "@/assets/office/mini9.jpg";
import mini4 from "@/assets/office/mini4.jpg";

export const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div className="rounded-xl bg-primary/10 overflow-hidden">
            <img
              src="https://placehold.co/150x100"
              alt="Consultório"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
