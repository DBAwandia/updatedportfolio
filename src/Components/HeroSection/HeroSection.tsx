import { HashLink as Link } from 'react-router-hash-link';

function HeroSection() {
  return (
    <div className="w-full min-h-[50vh] text-[0.9rem]">
      <div className="lg:px-[2rem] px-[1rem] py-[0.7rem] w-full flex justify-between ">
        <div
            className="w-full flex flex-col lg:mt-[2rem] mt-[1rem] md:gap-[1.5rem] gap-[1rem]"
        >
            <div>
                <button
                    className="text-[#848e9d] font-semibold tracking-wide bg-[#1a323e] py-[0.6rem] px-[1rem]"
                >
                    Full-Stack Developer
                </button>
            </div>
            <div
                className="flex flex-col gap-[0.3rem]"
            >
                <h1
                    className="lg:text-[4rem] text-[3.5rem] font-extrabold text-gradient"
                >
                    XCRX WALKER
                </h1>
                <h2
                    className="lg:text-[1.5rem] text-[1rem] font-bold tracking-wide"
                >
                    Building the web , one pixel at a time !
                </h2>
            </div>
            <div>
                <Link smooth to="#portfolio">
                    <button
                        className='w-full lg:w-auto px-[3rem] py-[0.7rem] font-bold tracking-wide rounded-md bg-[#3bbebe] hover:bg-[#17a7a7]'
                    >
                        See My Work
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
