import { useEffect, useState } from "react";
import  { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FcMenu } from "react-icons/fc"
import 'animate.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Popover } from "@headlessui/react";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [ open , setOpen ] = useState<boolean>(false)

  // disable body from scroll if pop up is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);
  
  return (
    <div 
        className="flex w-full items-center bg-[#1a323e] border-b-2 border-[#2a424e] text-[0.9rem]"
    >
    <div 
        className="lg:px-[2rem] px-[1rem] py-[0.7rem] w-full flex justify-between"
    >
        <Link smooth to="#home">
          <div>
              <LazyLoadImage
                  effect="blur"
                  className='lg:w-[1.8rem] lg:h-[1.8rem] w-[1.3rem] h-[1.3rem] object-cover'
                  src="https://wandiakennedy.netlify.app/images/favicon.png"
              />
          </div>
        </Link>

        <div 
            className="flex items-center gap-[2rem]"
        >

          {/* <Link smooth to="#skills">
            <p className="hidden lg:block hover:text-[#34a1cd] hover:underline hover:decoration-[0.1rem] hover:underline-offset-[0.5rem] hover:font-semibold">Skills</p>
          </Link> */}
            <Link smooth to="#portfolio">
              <p className="hidden lg:block hover:text-[#34a1cd] hover:underline hover:decoration-[0.1rem] hover:underline-offset-[0.5rem] hover:font-semibold">Portfolio</p>
            </Link>
            {/* <p className="hidden lg:block hover:text-[#34a1cd]">Testimonials</p> */}

            <Link smooth to="#connect">
                <button 
                    className='hidden lg:block w-auto font-semibold rounded-md cursor-pointer px-[1rem] py-[0.45rem] bg-[#3bbebe] hover:bg-[#17a7a7]'
                >
                  Connect
                </button>
            </Link>

          
        </div>

            {/* menu bar opens sidebar */}
            <Popover
                className="relative lg:hidden"
            >
                <Popover.Button
                    onClick={()=>setOpen(true)}
                >
                    <div  className="lg:hidden">
                        <FcMenu 
                            className="text-[1.4rem] mb-[0.4rem] text-[#858e9b]"
                        />
                    </div>
                </Popover.Button>

                {/* if open body dont scroll */}
                {open &&
                    <Popover.Panel className='animate__animated animate__fadeIn fixed top-0 left-0 z-[999999999999999999] w-full h-screen'>
                    {({ close }) => (
                            <Sidebar
                                // pass close as prop to sidebar
                                close={close}
                                setOpen={setOpen}
                            />
                            )}
                    </Popover.Panel>
                }
            </Popover>
      </div>
    </div>
  )
}

export default Navbar
