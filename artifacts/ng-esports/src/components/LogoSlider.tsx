import { partners } from "@/data";

export function LogoSlider() {
  // Duplicate partners for infinite effect
  const sliderLogos = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-card/30 border-y border-card-border py-12 relative flex">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
        {sliderLogos.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="flex-1 flex justify-center items-center px-8">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-12 md:h-16 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
