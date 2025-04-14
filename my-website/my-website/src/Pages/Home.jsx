import image from '../Media/homeimage.jpg'
function Home () {
  return (
    <div className="text-[#00df9a] flex flex-col md:justify-between md:items-center md:p-20">
      <h1 className="text-center text-2xl w-full top-0">Welcome to My Website <br />My Name is Connor McGaughey</h1>
      <div className='md:flex md:justify-between md:items-center md:p-20'>
        <div className="md:w-[50%]">
          <img src={image} alt="Home" className="w-full h-auto" />
        </div>
        <div className="md:w-[40%] text-2xl md:ml-10">
          <p className="text-center md:block">
            This is my personal website. I built this page using React and plan to use this website to
            showcase my projects and show-off my skills as a developer. 
            Using this sight I plan to commit to posting  a personal blog to help keep track 
            of my learning, thoughts and development.
          </p>
        </div>
      </div>  
      <div>
      </div>
    </div>
  );
}
export default Home;