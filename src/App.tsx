import Legacy from "./Legacy";

function App() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-center bg-[#ED1472] h-20 z-50 max-w-full box-border border-b-4 border-white">
        <img
          src={`${import.meta.env.BASE_URL}mcwsalogowhite.webp`}
          alt="MCWSA Logo"
          className="absolute left-2 top-0 p-2 w-20 h-20 object-contain drop-shadow-lg cursor-pointer max-h-20 z-50"
          onClick={() => {
            window.scrollTo({ top: 0 });
            setTimeout(() => window.location.reload(), 50);
          }}
        />
        <span className="hidden md:block text-white font-medium text-xl px-6">
          Midwest Collegiate Water Ski Association
        </span>
        <a
          href="https://mcwsamerch.creator-spring.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 text-white font-medium text-lg md:text-xl px-4 py-3 opacity-90 hover:opacity-100 underline-offset-4 hover:underline"
          style={{ textDecoration: 'none' }}
        >
          Merchandise
        </a>
      </nav>
      <div>
        <Legacy />
      </div>
    </div>
  );
}

export default App
