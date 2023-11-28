import Letmetelusumm from "@/components/letmetelusumm";

const AppealForm = () => {
  return (
    <div className="bg-dime w-full flex select-none px-0 minism:px-[10%] minism:mt-[40px] mt:[20px] minism:pb-[100px] items-center justify-between">
      <div className="minixl:block hidden">
        <div className="grid grid-cols-2 gap-[50px]">
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
        </div>
      </div>
      <div className="bg-dime shadow-md p-10 w-[450px]">
        <h1 className="font-bebas py-3 text-black text-[23px]">APPEAL FORM</h1>
        <form className="font-playfair text-[15px]">
          <div className="pb-6">
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
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Email Address</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Date and Time of flagged comment</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="text"
                name="date_time"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Content of flagged comment</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="text"
                name="content"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Reason for appeal</label>
            </div>
            <div>
              <textarea
                rows={2}
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full resize-none"
                name="reason"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label>Additional information</label>
            </div>
            <div>
              <textarea
                rows={2}
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full resize-none"
                name="additional"
              />
            </div>
            <div className="flex items-center gap-3 py-6">
              <input type="checkbox" />
              <p>
                I agree to the community guidelines and commit to respectful
                communication
              </p>
            </div>
          </div>
          <button className="p-3 bg-[#D9D9D9] rounded-md w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AppealForm;
