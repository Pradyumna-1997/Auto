import { FOOTER_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className=" sticky bottom-0 z-30 py-2 bg-ablue">
            <ul className=" flex w-full gap-[30%] px-[10%]">
            {FOOTER_LINKS.map((link) => (
                <Link href={link.href} key={link.key}>
                    <Image src={link.src} alt={link.key} width={50} height={50}/>
                </Link>
            ))}
            </ul>
        </div>

      
    )
  }
  
  export default Footer