
function Home() {
  return (
    <div className="fixed left-0 right-0 top-[5rem] w-screen h-[calc(100vh-5rem)] m-0 p-0 z-0">
      <img
        src={`${import.meta.env.BASE_URL}teamphoto.jpeg`}
        alt="MCWSA Team Photo"
        className="w-full h-full object-contain object-top m-0 p-0"
        style={{ display: 'block', margin: 0, padding: 0 }}
      />
    </div>
  );
}

export default Home;
