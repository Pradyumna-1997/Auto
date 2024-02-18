
import { TOP_ADS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const TopAd = () => {
  return (
    <section className="relative flex flex-col lg:mb-10 lg:py-20 xl:mb-20">
        <div className="flex w-full items-start justify-start overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {TOP_ADS.map((link) => (
          <Link href={link.href} key={link.key}>
            <Image src={link.image} alt={link.alt} className="rounded" width={400} height={200}/>
          </Link>
          ))}
        </div>
    </section>
  )
}

export default TopAd