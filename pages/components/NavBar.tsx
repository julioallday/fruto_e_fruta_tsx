import { Butterfly, List } from "phosphor-react";
import { useRef, useState } from "react";

export default function NavBar() {
  const sideBarRef: any = useRef();

  const [hasUserClicked, setHasUserClicked] = useState(false);

  function handleClick() {
    setHasUserClicked(!hasUserClicked);
  }

  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }
  return (
    <div className="md:sticky md:top-0 z-50 text-white ">
      {/* mobile sideBar */}
      <div className="bg-lime-500 flex justify-evenly p-2 items-center sticky top-0 z-30 sm:transform sm:translate-y-0 lg:ease-in-out md:transform md:-translate-y-full md:ease-in-out duration-200">
        <div>
          <a href="./">
            <Butterfly
              className="pl-2 mx-auto mt-0 mb-2"
              size={70}
              weight="duotone"
            />
          </a>
        </div>
        <a
          href="./"
          className="text-white font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-lime-600 to-neutral-900 hover:from-neutral-900 hover:to-lime-600 "
        >
          Fruto e Fruta
        </a>

        <button
          onClick={toogleSideBar}
          className="rounded focus:bg-lime-600 hover:animate-bounce"
        >
          <List
            size={45}
            className="md:hidden focus:border-lime-700/30 focus:border-gray-500"
          />
        </button>
      </div>

      {/* main sideBar */}
      <div
        ref={sideBarRef}
        className=" bg-lime-600 space-y-0 text-gray-900 absolute mt-0 pt-0 inset-y-0 left-0 transform -translate-x-full
        md:w-64  lg: h-screen px-4 md:relative md:translate-x-0 z-50 transition duration-200 ease-in-out child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0 flex "
      >
        <nav className="flex flex-col grow space-y-3 border mt-0 mb-4 bg-lime-500 border-zinc-300 hover:border-lime-500 rounded-t-full">
          <div className="  mt-8 justify-center">
            <div className="">
              <Butterfly
                className="mx-auto mt-0 hover:animate-ping mb-2"
                size={70}
                weight="duotone"
              />
            </div>
            <div className="mx-auto text-center">
              <span className="text-white font-extrabold text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-transparent bg-clip-text bg-gradient-to-tr  from-neutral-900 to-lime-400 hover:from-lime-400 hover:to-neutral-900 ">
                <a href="./">Fruto e Fruta</a>
              </span>
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="m-4 grid gap-10">
              <li className="mb-2 px-4 py-4 bg-lime-600 border-x-2 hover:border-gray-900 text-gray-100 font-extrabold flex flex-row hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-lime-300 hover:text-neutral-900 hover:bg-lime-600  rounded-lg">
                <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                  4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                  4h4v-4h-4M4 8h4V4H4v4z"
                    />
                  </svg>
                </span>
                <a href="./">
                  <span className="ml-2 hover">Home</span>
                </a>
              </li>
              <li className="mb-2 px-4 py-4  bg-lime-600 border-x-2 hover:border-gray-900 font-extrabold text-gray-100 flex flex-row  border-lime-300 hover:text-black hover:bg-lime-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold rounded-lg">
                <span>
                  <svg
                    className="fill-current h-5 w-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <a href="#">
                  <span className="ml-2">Produtos</span>
                </a>
              </li>
              <li className="mb-2 px-4 py-4 text-gray-100  bg-lime-600 border-x-2 hover:border-gray-900 font-extrabold flex flex-row  border-lime-300 hover:text-black   hover:bg-lime-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold rounded-lg">
                <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                  2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                  00-2-2h-1V1m-1 11h-5v5h5v-5z"
                    />
                  </svg>
                </span>
                <a href="#">
                  <span className="ml-2">Encontre-nos</span>
                </a>
              </li>
              <li className="mb-2 px-4 py-4 text-gray-100  bg-lime-600 border-x-2 hover:border-gray-900 font-extrabold flex flex-row hover:text-black  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-lime-600  hover:font-bold rounded-lg">
                <span>
                  <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                  014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                  8-4z"
                    />
                  </svg>
                </span>
                <a href="#">
                  <span className="m-2">Fale Conosco</span>
                </a>
              </li>
            </ul>
            <div className="grid grid-cols-1">
              <button
                onClick={toogleSideBar}
                className="block md:hidden font-extrabold focus:ring transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600 hover:text-yellow-500 m-2 px-4 py-2 rounded-md border border-lime-600 bg-lime-600  text-zinc-900"
              >
                Fechar
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}