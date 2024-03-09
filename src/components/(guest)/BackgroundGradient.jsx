import {BackgroundGradientAnimation} from "@/components/(guest)/background-gradient-animation.jsx";

export default function BackgroundGradient() {
  return (
    <BackgroundGradientAnimation>
      <div
        className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-5xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Welcome to the <span className="text-white">Team Finder</span> platform
        </p>
      </div>
    </BackgroundGradientAnimation>
  )
}
