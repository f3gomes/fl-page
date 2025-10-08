"use client";
import Image from "next/image";
// import { useState } from "react";

const Hero = () => {
  // const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Soluções de TI seguras para um ambiente mais seguro
              </h4>
              <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                Garantia, Qualidade e o Melhor Preço!
              </h1>
              <p>
                {
                  "'A qualidade nunca se obtém por acaso, ela é sempre o resultado do esforço inteligente'"
                }
                .
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=5585999504382&text=Gostaria%2C%20de%20um%20or%C3%A7amento!"
                    >
                      <Image
                        src="/images/icon/wpp.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="block transition-all duration-300 hover:scale-110 hover:opacity-90 hover:drop-shadow-lg"
                      />
                    </a>
                  </div>
                </form>

                <p className="invisible mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute top-0 -left-11.5"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l mask-[radial-gradient(white_70%,transparent_100%)] dark:hidden"
                    src="/images/hero/hero-light.avif"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.avif"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
