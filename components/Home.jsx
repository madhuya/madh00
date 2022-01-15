import userData from '../constants/data';

export default function Home() {
  return (
    <section>
      <div className="flex-1 text-center dark:bg-gray-800 font-mono bg-white relative">
        <div className="flex relative h-full items-center">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
              <img
                className="w-28 mx-auto rounded-full"
                src={userData.avatar}
                alt=""
              />
              <p className="text-3xl my-6 text-center dark:text-white">
                Hi, I&#x27;m Vivek 🤘
              </p>
              <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                Building digital products, brands, and experiences.I'm a FULL
                STACK MERN DEVLOPER
              </h2>
              <div className="flex items-center justify-center mt-4">
                <a
                  href="#"
                  className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white border-2 border-gray-800 dark:border-white text-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white text-md"
                >
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block absolute -bottom-32 -left-32 w-96 h-96">
        <div className="absolute text-extrabold text-xl right-16 z-20 text-start top-1/4">
          <span className="text-7xl">
            <img src="https://img.icons8.com/fluency/96/000000/idea.png" />
          </span>
          <p>Got a project ?</p>
          <a href="#" className="underline">
            Let&#x27;s talk
          </a>
        </div>
        <svg
          viewBox="0 0 200 200"
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFDBB9"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
            transform="translate(100 100)"
          ></path>
        </svg>
      </div> */}
      </div>
    </section>
  );
}
