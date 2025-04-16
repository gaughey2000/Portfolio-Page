import kayak from '../Media/kayak.png'
import { useState } from 'react'
function About () {

    const [showSkills, setShowSkills] = useState(false)
    const [showQualifications, setShowQualifications] = useState(false)
    const [showInterests, setShowInterests] = useState(false)
    const [showCharacter, setShowCharacter] = useState(false)

    const handleSkillsClick = () => {
        setShowSkills(!showSkills)
        setShowQualifications(false)
        setShowInterests(false)
        setShowCharacter(false)
    }
    const handleQualificationsClick = () => {
        setShowQualifications(!showQualifications)
        setShowSkills(false)
        setShowInterests(false)
        setShowCharacter(false)
    }
    const handleInterestsClick = () => {
        setShowInterests(!showInterests)
        setShowSkills(false)
        setShowQualifications(false)
        setShowCharacter(false)
    }
    const handleCharacterClick = () => {
        setShowCharacter(!showCharacter)
        setShowSkills(false)
        setShowQualifications(false)
        setShowInterests(false)
    }

    return (
        <div className="text-[#00df9a] md:mt-10">
            <h1 className="text-center text-2xl w-full top-50 ">About Me</h1>
            <p className="p-4">My name is Connor McGaughey. I am 24 years old and current live in Bolton. 
            I began learning to code in 2023 and throughout the process and 
            I am currently looking for a junior developer role to further my knowledge and experience in the field.
            </p>
            <div className="w-screen flex flex-wrap justify-center">
                <h1 className="text-center text-2xl w-full top-50 ">My...</h1>   
                <div onClick={handleSkillsClick} className="w-1/2 h-1/2 p-4 text-center text-white  hover:cursor-pointer hover:text-[#00df9a]">
                    <h1 className="text-center text-2xl w-full top-50 ">
                        Skills
                    </h1>                
                </div>

                <div onClick={handleQualificationsClick} className="w-1/2 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text hover:text-[#00df9a]">
                    <h1 className="text-center text-2xl w-full top-50 ">
                        Qualifcations
                    </h1>
                </div>

                <div onClick={handleInterestsClick} className="w-1/2 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text hover:text-[#00df9a]">
                    <h1 className="text-center text-2xl w-full top-50 ">
                        Intrests
                    </h1>
                </div>
                <div onClick={handleCharacterClick} className="w-1/2 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text hover:text-[#00df9a]">
                    <h1 className="text-center text-2xl w-full top-50 ">
                        Character
                    </h1>
                </div>

                <div className={`w-screen m-4 h-1/2 p-4 text-white hover:cursor-pointer hover:text-[#00df9a] ${showSkills ? 'flex flex-wrap' : 'hidden'}`}>
                    <ul className="flex flex-wrap justify-center text-center ">
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon type='logo' name='html5' color='#ffffff'></box-icon>
                            <p className="text-[#00df9a]">HTML</p>
                        </li> 
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon type='logo' name='css3' color='#ffffff'></box-icon>
                            <p className="text-[#00df9a]">CSS</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='tailwind-css' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">TAILWINDCSS</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='javascript' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">JAVASCRIPT</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='react' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">REACT</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='postgresql' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">POSTGRESQL</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='mongodb' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">MONGODB</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='python' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">PYTHON</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='git' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">GIT</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='terminal' type='solid' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">TERMINAL</p>
                        </li>
                        <li className="p-4 cursor-pointer hover:text-2xl">
                            <box-icon name='nodejs' type='logo' color='#ffffff' ></box-icon>
                            <p className="text-[#00df9a]">NODEJS</p>
                        </li>
                                               
                    </ul>
                </div>
                <div className={`w-screen m-4 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text-[#00df9a] ${showQualifications ? 'block' : 'hidden'}`}>
                    <p>
                        I have completed a full stack web development course with a focus on React and Node.js. 
                        I have also completed a number of projects using these technologies.
                    </p>
                </div>
                <div className={`w-screen m-4 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text-[#00df9a] ${showInterests ? 'block' : 'hidden'}`}>
                    <p>
                        I am interested in web development, game development, and machine learning. 
                        I enjoy learning new technologies and expanding my knowledge in the field.
                    </p>
                </div>
                <div className={`w-screen m-4 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text-[#00df9a] ${showCharacter ? 'block' : 'hidden'}`}>
                    <p>
                        I am a hard-working, motivated, and passionate individual. 
                        I enjoy working in a team and collaborating with others to achieve a common goal.
                        I am always looking to improve my skills and knowledge in the field.
                        I am a quick learner and enjoy taking on new challenges.
                        I am also a friendly and approachable person who enjoys meeting new people.
                        I am always willing to help others and share my knowledge with them.
                        I am a team player and enjoy working with others to achieve a common goal.
                        I am also a good communicator and enjoy sharing my ideas with others.
                        I am always looking to improve my skills and knowledge in the field.
                        I am a quick learner and enjoy taking on new challenges.
                        I am also a friendly and approachable person who enjoys meeting new people.
                        I am always willing to help others and share my knowledge with them.
                        I am a team player and enjoy working with others to achieve a common goal.
                        I am also a good communicator and enjoy sharing my ideas with others.
                        I am always looking to improve my skills and knowledge in the field.
                        
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About