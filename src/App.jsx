import CrossIcons from "./components/icons/CrossIcons";
import Luna from "./components/icons/Luna";

const  App = () => {
  return (
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]  
  bg-no-repeat bg-contain bg-no-repeat">

    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-3xl text-white font-semibold tracking-[0.3em]">Todo</h1>
        <button><Luna /></button>
      </div>
      <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
        <input type="text" placeholder="Create a new todo..." className="w-full text-gray-400 outline-none"/>
      </form>
    </header>

    <main className="container mx-auto mt-8 px-4">
      <div className="rounded-md ss bg-white [&>article]:p-4">

      <article className="flex gap-4 border-b border-b-gray-400">
        <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
        <p className="grow text-gray-600">Complete online javascript curse in bluuweb</p>
        <button><CrossIcons /></button>
      </article
      >
      <article className="flex gap-4 border-b border-b-gray-400">
        <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
        <p className="grow text-gray-600">Complete online javascript curse in bluuweb</p>
        <button><CrossIcons /></button>
      </article>

      <article className="flex gap-4 border-b border-b-gray-400">
        <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
        <p className="grow text-gray-600">Complete online javascript curse in bluuweb</p>
        <button><CrossIcons /></button>
      </article>

      <section className="flex justify-between py-4 px-4">
        <span className="text-gray-400">5 items left</span>
        <button className="text-gray-400">
          Clear Completed
        </button>
      </section>
      </div>
    </main>

    <section className="container mx-auto mt-8 px-4">
      <div className="flex justify-center rounded-md bg-white p-4 gap-4">
        <button className="hover:text-blue-600">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </section>  

    <p className="text-center">Drag and drop to reorder list</p>
  </div>
  );
};

export default App;