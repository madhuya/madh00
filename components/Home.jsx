import userData from '../constants/data';

export default function Home() {
  return (
    <section>
      <div className="flex relative items-center">
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
            <h2 className="dark:text-white text-gray-800 mx-auto font-bold text-center max-w-3xl md:text-6xl text-4xl py-4">
              Building digital products,brands,and experiences.
            </h2>
            <div className="flex items-center justify-center mt-4">
              <a
                href="mailto:starktestic@gmail.com"
                className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white border-2 border-gray-800 dark:border-white text-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white text-md"
              >
                CONNECT WITH ME
              </a>
            </div>
            <div className="md:hidden mt-0">
              <img
                className="mx-auto w-80"
                src="https://c.tenor.com/a-WmoASTchMAAAAi/good-evening-waving-hands.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
