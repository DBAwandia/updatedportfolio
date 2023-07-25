
function Methodology() {

    type DATA = {
      id: number
      phase: string,
      title: string,
      color: string,
      description: string,
    }
  
    const data : Array<DATA> = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Discovery",
      color:"#34a1cd",
      description: "This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience."
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Design",
      color:"#e7a741",
      description: "I take what I’ve learned about you & craft a bespoke website that’s tailored to meet your unique needs, all while accurately representing your brand & keeping things aesthetically pleasing & useable for your audience."
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Build",
      color:"#d74848",
      description: "Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability."
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Launch",
      color:"#352bc1",
      description: "After I’ve completed the build and double checked everything alongside your approval, it’s time to launch your website. In this phase I will also provide some training videos on how you can add content to your website so you can do it yourself."
    }
  ]
    return (
      <div className="w-full min-h-0 flex flex-col text-[0.9rem]">
      <div className="w-full lg:flex lg:flex-1 lg:px-[2rem] px-[1rem] py-[0.7rem]">
        <div className="flex flex-col md:flex-[0.4] gap-[0.5rem]">
          <p className="text-[#fff] uppercase">Methodology</p>
          <h1 className="text-[1rem] font-bold">
            My Process
          </h1>
        </div>
        <div className="lg:flex-[0.6] w-full">
         <div className="py-[1rem] flex flex-col gap-[0.7rem]">
          {data?.map((item) =>
          <div key={item.id} >
            <div className="flex flex-col gap-[0.4rem]">
              <p className={`${item.title} font-medium tracking-wide`}>
                {item.phase}
              </p>
              <p className="text-[1rem] text-[#fff] tracking-wide font-bold">
                {item.title}
              </p>
              <p className="text-[#848e9d] font-semibold">
                {item.description}
              </p>
            </div>
          </div>
          )}
         </div>
  
        </div>
      </div>
    </div>
    )
  }
  
  export default Methodology
  