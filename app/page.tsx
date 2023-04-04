export default function Home() {
  return (
    <>
      <section className='relative m-auto h-screen max-w-7xl flex justify-center gap-5 md:justify-center items-left flex-col p-5'>
        <h1 className='font-bold text-lg'>Trip Planner</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full h-96 md:w-[600px] md:h-[400px] rounded-md bg-amber-400"></div>
          <div className="w-[600px] h-[60px] md:w-[600px] md:h-[400px] rounded-md bg-amber-400"></div>
          {/* <div className="w-full h-96 md:w-[600px] md:h-[400px] rounded-md bg-amber-400"></div> */}
        </div>
      </section>
    </>

  )
}
