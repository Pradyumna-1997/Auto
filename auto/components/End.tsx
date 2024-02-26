import { FOOTER_CONTACT_INFO, FOOTER_LINKS1, FOOTER_LINKS2, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const End = () => {
  return (
    <footer className="flexCenter mb-24 mt-10 fixed-bottom">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/AutoLogo.png" alt="logo2" width={160} height={120}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            <FooterColumn title='Learn More'>
            <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                {FOOTER_LINKS1.map((link) => (
                  <Link href={link.href} key={link.key} className="regular-16 text-ayellow flex cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                  </Link>
                  ))}
              </ul>
            </FooterColumn>
            <FooterColumn title='Services'>
            <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                {FOOTER_LINKS2.map((link) => (
                  <Link href={link.href} key={link.key} className="regular-16 text-ayellow flex cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                  </Link>
                  ))}
              </ul>
            </FooterColumn>

            
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Automovill | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default End