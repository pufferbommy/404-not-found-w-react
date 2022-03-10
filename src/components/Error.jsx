import Scarecrow from '../images/Scarecrow.png'

const Error = () => {
  return (
    <main className="mt-16 md:mt-[100px] lg:mt-[200px] transition-all">
      <div className="ml-6  md:ml-[77px] flex flex-col lg:flex-row gap-[60px] lg:gap-[120px] transition-all">
        <div className="flex justify-center ">
          <img
            style={{ imageRendering: 'pixelated' }}
            className="object-contain w-[286.83px] md:w-[400px] md:h-[350px] h-[238px] lg:w-[539.22px] lg:h-[447.43px]"
            src={Scarecrow}
            alt="Scarecrow"
          />
        </div>
        <div>
          <div className="max-w-full lg:max-w-[600px] mb-[30px] md:mb-9">
            <h1 className="font-spacemono leading-[71px] md:leading-[95px] text-primary text-5xl md:text-[64px] font-bold transition-all">
              I have bad news for you
            </h1>
          </div>
          <div className="max-w-full lg:max-w-[400px] mb-[66px] md:mb-16">
            <p className="font-spacemono text-secondary text-lg md:text-2xl">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
          </div>
          <div>
            <button className="font-spacemono text-sm uppercase font-bold bg-primary hover:bg-opacity-90 transition-all text-white px-6 md:px-[43px] py-4 md:py-6">
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Error
