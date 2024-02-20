import Image from "next/image";
import { Button } from "@nextui-org/button";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";


const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row align-middle justify-between gap-4 lg:gap-36 md:gap-18">
        <div className="w-full flex flex-col justify-between gap-4 min-h-full">
          <div className="w-full flex flex-col justify-between gap-4">
            <div className="text-4xl sm:text-5xl lg:text-7xl md:text-start text-center">
              Watch&nbsp;
              <span className="text-primary-500">
                Together
              </span>
              , wherever you are.
            </div>
            <span className="text-lg sm:text-xl md:text-start text-center">
              Watch together, even when miles apart. Real-time sync, video chat, and more.
            </span>
          </div>
          <Link href={'#about-anchor'} className="md:w-fit">
            <Button id="join-anchor" variant="flat" color="default" radius="lg" size="lg" className="w-full md:w-[200px] group text-lg flex gap-4">
              Know More
              <MdArrowForward size={25} className="group-hover:rotate-[315deg] group-hover:scale-150 transition-transform group-hover:text-primary" />
            </Button>
          </Link>
        </div>
        <Image
          alt="Watch together"
          className="md:w-[360px] w-full"
          height={100}
          src="/illustrations/presencefinal.svg"
          width={100}
        />
      </div>
    </section>
  )
}

export default Hero;
