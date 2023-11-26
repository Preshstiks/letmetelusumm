export default function Home() {
  return (
    <div className="bg-white h-screen w-full flex items-center px-[10%] justify-end">
      <div className="bg-white shadow-md p-10 w-[370px]">
        <h1 className="font-oswald py-3 text-black text-[22px] font-medium">
          LETMETEL<span className="text-red">USUMM</span>
        </h1>
        <h1 className="font-oswald py-3">LOGIN TO CONTINUE</h1>
        <p className="font-playfair">
          Don't have an account? <span className="text-red">Create</span>
        </p>
        <form className="font-playfair">
          <div>
            <label>Username</label>
            <div>
              <input type="text" name="username" />
            </div>
          </div>
          <div>
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
