import { ChevronDown } from "lucide-react";
import type { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="min-h-dvh flex flex-col items-center justify-center relative px-6 pt-14"
    >
      <span className="sr-only">名前</span>
      <h1 className="text-5xl sm:text-6xl font-semibold tracking-wider text-[--color-sumi] text-center">
        竹内 貴紀
      </h1>
      <p className="text-base sm:text-lg text-[--color-sumi-light] mt-4 tracking-wide">
        Takaki Takeuchi
      </p>
      <p className="text-sm text-[--color-sumi-light] mt-6 tracking-wide">
        フリーランスの Web エンジニア
      </p>

      <div className="absolute bottom-12 animate-bounce-gentle">
        <ChevronDown className="h-6 w-6 text-[--color-sumi-light]" />
      </div>
    </section>
  );
};
