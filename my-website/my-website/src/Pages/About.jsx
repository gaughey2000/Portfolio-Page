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
                    <h1>Education:</h1>
                    <ol>
                        <p>GCSE</p>
                        <li>
                            <p>Maths:  A</p>
                            <p>Core Science: B</p>
                            <p>Additional Science: A</p>
                            <p>English Language: C</p>
                            <p>English Literature: B</p>
                            <p>History: A</p>
                            <p>Religious Education: B</p>
                            <p>Physical Education: A</p>
                        </li>
                        <p>College:</p>
                        <li>
                            <p>Level 3 Extended Diploma in Sport: Distinction Distinction Distinction</p>
                        </li>
                        <p>University:</p>
                        <li>
                            <p>
                                I attended MMU and studied a BSc in Exercise Science and bio-mechanics however unfortunatly due to 2020 lockdowns
                                I made the decsion to leave university due to impact it had on the level of education I was recieving due to 
                                course requiring pratical seminars and experiments/test.
                            </p>
                        </li>
                    </ol>

                </div>
                <div className={`w-screen m-4 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text-[#00df9a] ${showInterests ? 'block' : 'hidden'}`}>
                    <p>
                        Outside of software development, I enjoy to keep myself busy with hobbies that challange me.
                        My main hobbie's are martial arts (BJJ, Boxing, Wrestling, MMA). I have been a lifelong 
                        competitor in combat sports and found it brings a good healthy structure to my week.
                         More recently I have taken upon more active hobbies including padel, rock climbing, chess 
                        and reading litrature. I find these activites to be great for my mental health and help me 
                        to stay focused and motivated whilst also learning something new everyday and improving myself.
                    </p>
                </div>
                <div className={`w-screen m-4 h-1/2 p-4 text-center text-white hover:cursor-pointer hover:text-[#00df9a] ${showCharacter ? 'block' : 'hidden'}`}>
                    <p>
                        'Patience is a Vertue' - I grew up as the oldest brother of 4 children which sculpted me to have patience.
                        I feel this is one of my strongest traits as I am able to stay focused and find soloutions when setbacks occur.
                        <br />
                        <br />
                        "I have no special talents. I am only passionately curious." - Albert Einstein.
                        Naturally I am a very curious person. This has led me to alot of mistakes and failures in my life and work.
                        However because of my curiousity it alows me to stay motivated and discaplined meaning my 'failures'
                        never stay failures for long.
                        <br />
                        <br />
                        "We are what we repeatedly do. Excellence, then, is not an act, but a habit." - Aristotle.
                        Coming from a competitive background I have always been driven to be the best I can be.
                        I've found it intresting how habbits and structure effect a persons performance.
                        This led me to become a discaplined person who tries to find as many wins as possible throughout a day by
                        making sure I focus on completing my daily task and habbits.  


                    </p>
                </div>
            </div>
        </div>
    )
}
export default About