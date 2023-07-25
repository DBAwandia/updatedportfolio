import { BsDiscord, BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { FiMail } from "react-icons/fi"

function Connect() {
  return (
    <div id="connect" className="w-full min-h-0 flex text-[0.9rem] flex-col gap-[1rem]">
      <div className=" lg:px-[2rem] px-[1rem] py-[0.7rem]">
        <h1 className="text-[1rem] text-[#fff] tracking-wide font-bold">My contact</h1>
      </div>
        <div className="md:w-[95%] w-full self-center py-[0.8rem] md:rounded-[50px] h-auto bg-[#1a323e]">
            <div className="px-[0.8rem] md:px-[2rem] py-[1rem] font-bold">
                <p className="w-full text-[#fff] tracking-wide">
                    Thanks for stopping by, 
                    I’m currently looking to join a new team of creative designers and developers. 
                    If you think we might be a good fit for one another, 
                    add me on any social platform or send me an  email.
                </p>
            </div>

            <div className="w-full px-[0.8rem] flex flex-col gap-[1rem] md:px-[2rem] py-[1rem]">
                <h2 className="text-[1rem] text-[#fff] font-semibold">
                    Dont be a stranger!
                </h2>
                <p className="text-[#3f4a59]">Connect with me online</p>
                <div className="grid grid-cols-1 h-auto md:flex items-center md:justify-between w-full gap-[1.3rem] md:gap-0">

                    <a href="https://twitter.com/keniko1297">
                        <div className="flex cursor-pointer items-center gap-[1rem]">
                            <BsTwitter className="text-[1.4rem] text-[#1d9bf0]"/>
                            <p  className="lg:hover:font-extrabold hover:text-[#34a1cd]text-[#3f4a59] lg:font-semibold">TWITTER</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/kennedy-wandia-618684216/">
                        <div className="flex cursor-pointer items-center gap-[1rem]">
                            <BsLinkedin className="text-[#0a66c2] text-[1.4rem]"/>
                            <p  className="lg:hover:font-extrabold hover:text-[#34a1cd] text-[#fff] lg:font-semibold">LINKEDIN</p>
                        </div>
                    </a>

                    <a href="https://discord.com/users/909382388348497951">
                        <div className="flex cursor-pointer items-center gap-[1rem]">
                            <BsDiscord className="text-[1.4rem] text-[#404eed]"/>
                            <p  className="lg:hover:font-extrabold hover:text-[#34a1cd] text-[#fff] lg:font-semibold">DISCORD</p>
                        </div>
                    </a>

                    <a href="https://github.com/DBAwandia">
                        <div className="flex cursor-pointer items-center gap-[1rem]">
                            <BsGithub  className="text-[1.4rem] text-black"/>
                            <p  className="lg:hover:font-extrabold hover:text-[#34a1cd] text-[#fff] lg:font-semibold">GITHUB</p>
                        </div>
                    </a>

                    <a href="https://wa.link/4jddhf">
                        <div className="flex cursor-pointer items-center gap-[1rem]">
                            <BsWhatsapp  className="text-[1.4rem] text-[#25D366]"/>
                            <p  className="lg:hover:font-extrabold hover:text-[#34a1cd] text-[#fff] lg:font-semibold">WHATSAPP</p>
                        </div>
                    </a>

                    <a href="mailto:fluidbrakes@gmail.com">
                        <div className="flex cursor-pointer items-center gap-[1rem]">
                            <FiMail  className="text-[1.4rem] text-[#ef4444]"/>
                            <p  className="lg:hover:font-extrabold hover:text-[#34a1cd] text-[#fff] lg:font-semibold">GMAIL</p>
                        </div>
                    </a>

                </div>
            </div>
      </div>
    </div>
  )
}

export default Connect
