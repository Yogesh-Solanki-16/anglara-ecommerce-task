import Image from "next/image";

const brands = [
  { name: "VERSACE", logo: "/brands/versace.png" },
  { name: "ZARA", logo: "/brands/zara.png" },
  { name: "GUCCI", logo: "/brands/gucci.png" },
  { name: "PRADA", logo: "/brands/prada.png" },
  { name: "Calvin Klein", logo: "/brands/ck.png" },
];

export default function BrandBar() {
  return (
    <div className="bg-black py-8 sm:py-10 lg:py-11">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 sm:gap-8 lg:gap-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative h-[26px] sm:h-[30px] lg:h-[33px]"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={166}
                height={33}
                className="h-full object-contain brightness-0 invert"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
