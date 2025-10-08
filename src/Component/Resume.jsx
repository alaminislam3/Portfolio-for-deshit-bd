export default function Resume() {
  return (
    <div id='resume' className='bg-[#333333]  px-6 sm:px-10 lg:px-12 mx-auto'> 
      <div className="relative text-center">
        <h2 className="font-bold text-[30px] text-white mb-2">Our Resume</h2>

        <div className="relative w-full flex justify-center mb-2">
          <div className="w-[120px] h-[2px] bg-[#FFBD39]"></div>

          <div className="absolute top-1/2 -translate-y-1/2 bg-white border-[#FFBD39] w-3 h-3 rounded-full border-2"></div>
        </div>

        <p className="text-[16px] text-white">Passionate MERN Stack Developer crafting scalable and user-friendly web solutions.</p>
      </div>  
      <h2 className='text-white text-center text-[32px] font-bold mt-2'>My Education</h2>
      
    </div>
  )
}
