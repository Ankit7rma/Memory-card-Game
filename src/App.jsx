import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className="bg-violet-400 h-full w-screen">
        <nav>
          <h1 className="text-red-600 text-8xl p-5">Memory card Game</h1>
          <h1 className=" px-8 text-3xl">
            Get points by clicking on an image but do not click on any more than
            once!
          </h1>
        </nav>
        <div className="p-10 m-10">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
