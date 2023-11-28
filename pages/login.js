import Letmetelusumm from "@/components/letmetelusumm";
const Login = () => {
  return (
    <div className="bg-dime w-full sm:my-[60px] minism:px-[10%] minism:mt-[40px] my-0 flex select-none items-center justify-between">
      <div className="smxl:block hidden">
        <div className="grid grid-cols-2 gap-[50px]">
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
        </div>
      </div>
      <div className="bg-dime shadow-md p-10 minism:w-[31rem] w-full">
        <h1 className="font-bebas py-3 text-black text-[27px]">
          LETMETEL<span className="text-red">USUMM</span>
        </h1>
        <h1 className="font-bebas py-3 text-[23px]">LOGIN TO CONTINUE</h1>
        <p className="font-playfair py-3">
          Don't have an account? <span className="text-red">Create</span>
        </p>
        <form className="font-playfair text-[15px]">
          <div>
            <div className="pt-2 pb-1.5">
              <label className="">Username</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="text"
                name="username"
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="pt-2 pb-1.5">
              <label>Password</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="password"
                name="password"
              />
            </div>
          </div>
          <button className="p-3 bg-red border border-red hover:bg-opacity-0 hover:text-red text-white rounded-md w-full mt-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
