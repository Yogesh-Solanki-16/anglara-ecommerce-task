import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface DressStyleProps {
  products: Product[];
}

export default function DressStyle({ products }: DressStyleProps) {
  const styles = [
    { name: "Casual", image: products[0]?.image || "" },
    { name: "Formal", image: products[1]?.image || "" },
    { name: "Party", image: products[2]?.image || "" },
    { name: "Gym", image: products[3]?.image || "" },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-[76px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="bg-[#F0F0F0] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] py-10 sm:py-14 lg:py-[70px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-center mb-10 sm:mb-14 lg:mb-[64px] tracking-tight">
            BROWSE BY DRESS STYLE
          </h2>

          {/* Grid Layout */}
          <div className="space-y-4 sm:space-y-5">
            {/* First Row: Casual (40%) + Formal (60%) */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">
              {/* Casual */}
              <Link
                href="#"
                className="relative bg-white rounded-[20px] overflow-hidden h-[190px] sm:h-[240px] lg:h-[289px] lg:col-span-2 group hover:shadow-lg transition-shadow"
              >
                <h3 className="absolute top-6 left-6 sm:top-8 sm:left-9 z-10 text-2xl sm:text-3xl lg:text-[36px] font-bold">
                  Casual
                </h3>
                <div className="absolute right-0 top-0 w-[60%] h-full">
                  <Image
                    src={styles[0].image}
                    alt="Casual style"
                    fill
                    className="object-cover object-left group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 60vw, 24vw"
                  />
                </div>
              </Link>

              {/* Formal */}
              <Link
                href="#"
                className="relative bg-white rounded-[20px] overflow-hidden h-[190px] sm:h-[240px] lg:h-[289px] lg:col-span-3 group hover:shadow-lg transition-shadow"
              >
                <h3 className="absolute top-6 left-6 sm:top-8 sm:left-9 z-10 text-2xl sm:text-3xl lg:text-[36px] font-bold">
                  Formal
                </h3>
                <div className="absolute right-0 top-0 w-[60%] h-full">
                  <Image
                    src={styles[1].image}
                    alt="Formal style"
                    fill
                    className="object-cover object-left group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 60vw, 36vw"
                  />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">
              {/* Party */}
              <Link
                href="#"
                className="relative bg-white rounded-[20px] overflow-hidden h-[190px] sm:h-[240px] lg:h-[289px] lg:col-span-3 group hover:shadow-lg transition-shadow"
              >
                <h3 className="absolute top-6 left-6 sm:top-8 sm:left-9 z-10 text-2xl sm:text-3xl lg:text-[36px] font-bold">
                  Party
                </h3>
                <div className="absolute right-0 top-0 w-[60%] h-full">
                  <Image
                    src={styles[2].image}
                    alt="Party style"
                    fill
                    className="object-cover object-left group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 60vw, 36vw"
                  />
                </div>
              </Link>

              {/* Gym */}
              <Link
                href="#"
                className="relative bg-white rounded-[20px] overflow-hidden h-[190px] sm:h-[240px] lg:h-[289px] lg:col-span-2 group hover:shadow-lg transition-shadow"
              >
                <h3 className="absolute top-6 left-6 sm:top-8 sm:left-9 z-10 text-2xl sm:text-3xl lg:text-[36px] font-bold">
                  Gym
                </h3>
                <div className="absolute right-0 top-0 w-[60%] h-full">
                  <Image
                    src={styles[3].image}
                    alt="Gym style"
                    fill
                    className="object-cover object-left group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 60vw, 24vw"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
