"use client";

export default function OfferBanner() {
  return (
    <div className="w-full bg-[#000000] text-white overflow-hidden py-2">
      <div className="flex w-max animate-marquee marquee 20s linear infinite whitespace-nowrap">
        
        {/* FIRST COPY */}
        <div className="flex gap-10 px-4 text-sm sm:text-base font-medium tracking-wide">
          <span>SALE 20% ON EACH ROOM</span>
          <span>SALE 20% ON EACH ROOM</span>
          <span>SALE 20% ON EACH ROOM</span>
          <span>SALE 20% ON EACH ROOM</span>
        </div>

        {/* SECOND COPY (IMPORTANT for infinite loop) */}
        <div className="flex gap-10 px-4 text-sm sm:text-base font-medium tracking-wide">
          <span>SALE 20% ON EACH ROOM</span>
          <span>SALE 20% ON EACH ROOM</span>
          <span>SALE 20% ON EACH ROOM</span>
          <span>SALE 20% ON EACH ROOM</span>
        </div>

      </div>
    </div>
  );
}