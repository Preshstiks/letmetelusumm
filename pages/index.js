export default function Home() {
  return (
    <div className="bg-white h-screen w-full flex items-center px-[10%] justify-end">
      <div className="bg-white shadow-md p-10 w-[370px]">
        <h1 className="font-oswald py-3 text-black text-[22px] font-medium">
          LETMETEL<span className="text-red">USUMM</span>
        </h1>
        <h1 className="font-oswald py-3">LOGIN TO CONTINUE</h1>
        <p className="font-playfair py-3">
          Don't have an account? <span className="text-red">Create</span>
        </p>
        <form className="font-playfair">
          <div>
            <div className="pt-2 pb-1.5">
              <label className="">Username</label>
            </div>
            <div>
              <input
                className="p-3 outline-none border border-black rounded-md w-full"
                type="text"
                name="username"
              />
            </div>
          </div>
          <div className="pt-6">
            <label>Password</label>
            <div>
              <input type="password" name="password" />
            </div>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
