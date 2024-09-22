import video from "../assets/hero.mp4";
import logo from "../assets/logo.svg";
import hero from "../assets/logo.svg";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen ">
        {/* Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
            <video src={video} className="object-cover w-full h-full " muted autoPlay loop playsInline poster={hero} ></video>
        </div>
        <div className=" absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-10% to-purple-950"></div>
        <div className="relative z-20 flex flex-col justify-end h-screen pb-20 ">
          <img src={logo} alt="Restura" className="w-full p-4 " />
          <p className="p-4 text-lg tracking-tighter text-white ">Paris</p>
        </div>
    </section>
  )
}
export default HeroSection