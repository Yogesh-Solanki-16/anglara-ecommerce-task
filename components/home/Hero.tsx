import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 px-5 sm:px-6 lg:pl-[100px] py-12 lg:py-[100px] text-center lg:text-left">
          <h1 className="text-[40px] sm:text-[44px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-5 text-left mx-auto lg:mx-0 ">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-black/60 text-[12px] sm:text-base leading-[22px] mb-6 text-left mx-auto lg:mx-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            href="#"
            className="inline-block w-full sm:w-auto bg-black text-white px-12 py-3.5 rounded-full text-base font-medium hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          {/* STATS */}
          <div className="mt-10 flex justify-center lg:justify-start items-center gap-6 flex-wrap">
            <div>
              <h3 className="text-[26px] sm:text-[28px] font-bold">200+</h3>
              <p className="text-xs text-black/60">International Brands</p>
            </div>

            <div className="hidden sm:block w-[1px] h-[40px] bg-black/10"></div>

            <div>
              <h3 className="text-[26px] sm:text-[28px] font-bold">2,000+</h3>
              <p className="text-xs text-black/60">High-Quality Products</p>
            </div>

            <div className="hidden sm:block w-[1px] h-[40px] bg-black/10"></div>

            <div>
              <h3 className="text-[26px] sm:text-[28px] font-bold">30,000+</h3>
              <p className="text-xs text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 relative h-[420px] sm:h-[500px] lg:h-[650px] mt-8 lg:mt-0">
          {/* STAR TOP RIGHT */}
          <div className="absolute top-[60px] right-[20px] sm:top-[100px] sm:right-[60px] w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] z-10">
            <Image
              src="/vector.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 640px) 60px, 90px"
            />
          </div>

          {/* STAR LEFT */}
          <div className="absolute top-[220px] left-[10px] sm:top-[300px] sm:left-[40px] w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] z-10">
            <Image
              src="/vector.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 640px) 35px, 50px"
            />
          </div>

          {/* HERO IMAGE */}
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
