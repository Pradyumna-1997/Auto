import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-ayellow">Car Sevice For you</h1>
        <p className="regular-20 mt-6 text-white xl:max-w-[520px]">
          Lubricant partner Quartz Engine Oil
        </p>
      </div>

      <div className=" flex flex-1">
        <div className="relative z-20 flex w-[500px] flex-col gap-8 rounded-3xl bg-ablue px-7 py-8">
            <div className="flex flex-col">
                <div className="flexBetween">
                    <p className="bold-20 text-white">Name</p>
                </div>
            <p className="regular-16 text-gray-20">Type Name Here</p>
            </div>
            <div className="flex flex-col">
                <div className="flexBetween">
                    <p className="bold-20 text-white">Phone Number</p>
                </div>
            <p className="regular-16 text-gray-20">Type Phone Number Here</p>
            </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Get Quick Assistance" 
            variant="btn_ayellow" 
          />
          </div>
        </div>

          
        </div>
      
    </section>
  )
}

export default Hero