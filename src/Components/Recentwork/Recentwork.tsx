import { HiOutlineExternalLink } from "react-icons/hi"

function Recentwork() {

    type Image = {
        image: string,
        url: string,
        title: string
    }

    const images: Array<Image> =[
        {
            image: "https://wandiakennedy.netlify.app/images/booksy.png",
            url: "https://master--booksyclone.netlify.app/",
            title: "Booksy web-app"
        },
        {
            image: "https://wandiakennedy.netlify.app/images/kryptos.png",
            url: "https://kryptoscoin.netlify.app",
            title: "Track crypto-currency"
        },
        {
            image: "https://wandiakennedy.netlify.app/images/phonepalace.png",
            url: "https://phonepalace.netlify.app",
            title: "E-commerce phones"
        },
        {
            image: "https://avatars.mds.yandex.net/i?id=b1bed10bfec57a69970f8a1310a6ddf2dd917407-6849173-images-thumbs&n=13",
            url: "https://xcrxwalker.netlify.app",
            title: "Currently a freelancer ... "
        }
        // {
        //     image: ""
        // }
    ]
  return (
    <div 
        id="portfolio" 
        className="w-full text-[0.9rem] min-h-screen flex flex-col justify-center lg:px-[2rem] px-[1rem] py-[0.7rem] bg-[#1a323e]"
    >
      <div className="flex flex-col gap-[0.5rem]">
        <p 
            className="text-[#fff]"
        >
            Portfolio
        </p>
        <h1 
            className="uppercase text-[1rem] font-bold"
        >
            Recent Work
        </h1>
      </div>
      <div 
        className="w-full  grid py-[1rem] grid-cols-1 lg:grid-cols-3 gap-[1rem]"
      >
        {images?.map((item , i) =>
        <div 
            key={i} 
            className={i === images.length -1 ? "w-full py-[1rem] lg:border-0 flex flex-col gap-[0.5rem]" : "w-full border-b-2 border-[#2a424e] py-[1rem] lg:border-0 flex flex-col gap-[0.5rem]"}
        >
            <img
                className='w-full h-[15.5rem] lg:h-[18rem] md:h-[28rem] rounded-md'
                src={item.image}
                alt="phonepalace"
            />
            <p
                className="text-[#848e9d] font-semibold"
            >
                {item.title}
            </p>
            <a href={item.url}>
                <div 
                    className="flex items-center gap-[0.5rem] w-auto px-[0.6rem] justify-center rounded-md py-[0.6rem] text-white bg-[#264452]"
                >
                    <HiOutlineExternalLink 
                        className="text-[1.4rem]"
                    />
                    <p>View</p>
                </div>
            </a>
        </div>
        
        )}
        
      </div>
    </div>
  )
}

export default Recentwork
