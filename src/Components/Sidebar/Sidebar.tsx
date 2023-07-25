import { LazyLoadImage } from "react-lazy-load-image-component"
import { AiOutlineClose } from "react-icons/ai"
import { HashLink as Link } from 'react-router-hash-link';

function Sidebar({ close , setOpen } :any | boolean) {

    //close sidebar
    const handleClose = () =>{
        close()
        setOpen(false)
    }

  return (
    <div className="relative w-full h-screen text-[0.9rem]">

       <div
            onClick={handleClose}
            className="animate__animated animate__fadeIn top-0 left-0 right-0 bottom-0 absolute z-[999] w-full min-h-screen bgTransparent"
        >

       </div>

       <div className="absolute animate__animated animate__slideInLeft top-0 left-0 right-0 bottom-0 z-[999999] bg-[#1a323e] w-[80%] md:w-[50%] py-[1rem] md:py-[2rem] min-h-full gap-[2rem] flex flex-col">
        <div className="w-full px-[1rem] md:px-[1.5rem]  flex justify-between">

        <Link 
            onClick={handleClose}
            smooth  
            to="#home"
        >
          <div>
                <LazyLoadImage
                    effect="blur"
                    className='lg:w-[1.8rem] lg:h-[1.8rem] w-[1.3rem] h-[1.3rem] object-cover'
                    src="https://wandiakennedy.netlify.app/images/favicon.png"
                />
            </div>
        </Link>

            <div 
            >
              <AiOutlineClose
                onClick={handleClose}
                className="text-[1.4rem] text-[#858e9b]"
              />
            </div>
          </div>

          <Link 
            onClick={handleClose}
            smooth  
            to="#portfolio"
         >
            <div className="w-full border-b-2 border-[#2a424e] text-[1rem] font-bold">
              <p className="px-[1.5rem] md:py-[2rem]  py-[1.7rem] tracking-wider">Skills</p>
            </div>
          </Link>
          
            <Link 
                onClick={handleClose}
                smooth  
                to="#portfolio"
            >
            <div className="w-full border-b-2 border-[#2a424e] text-[1rem] font-bold">
              <p className="px-[1.5rem] md:py-[2rem]  py-[1.7rem] tracking-wider">Portfolio</p>
            </div>
          </Link>

          ` <Link 
                onClick={handleClose}
                smooth  
                to="#connect"
            >
            <div className="w-full border-b-2 border-[#2a424e] text-[1rem] font-bold">
              <p className="px-[1.5rem] md:py-[2rem]  py-[1.7rem] tracking-wider">Connect</p>
            </div>
          </Link>

       </div>
      </div>
      
  )
}

export default Sidebar
