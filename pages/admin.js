import { adminData } from "@/components/adminData";

const Admin = () => {
  return (
    <div className="bg-dime h-screen px-[10%]">
      <div className="pb-[40px]">
        <h1 className="text-[33px] font-bebas">WELCOME BACK ABI!</h1>
        <p className=" font-playfair text-[13px]">
          Here’s what’s happening with your blog today.
        </p>
      </div>
      <div>
        <div className="flex text-red font-playfair">
          {adminData.map((items) => (
            <div className="border border-gray w-[13.5rem] h-[10.5625rem]">
              <div>
                <div className="text-[0.75rem]">{items.title}</div>
                <div className="text-[3.75rem]">{items.total}</div>
                <div className="text-[0.75rem]">
                  <div>U</div>
                  <div>2%</div>
                  <div>+4 this week</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
