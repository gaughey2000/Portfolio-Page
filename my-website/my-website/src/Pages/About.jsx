import kayak from '../Media/kayak.png'

function About () {
    return (
        <div className="text-[#00df9a]">
            <h1 className="text-center text-2xl w-full top-50 ">About Me</h1>
            <p>My name is Connor McGaughey. I am 24 years old and current live in Bolton. </p>
            <img src={kayak} alt="Kayak" className="hidden w-full h-auto md:w-[75%]" />
        </div>
    )
}
export default About