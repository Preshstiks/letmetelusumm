import { analytics } from "@/components/Analytics";
import { AppealData } from "@/components/AppealData";

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
        <div className="flex text-red font-playfair minilg:flex-nowrap flex-wrap">
          {analytics.map((items) => (
            <div className="border border-gray flex items-center p-4 w-[13.5rem] h-[10.5625rem]">
              <div>
                <div className="text-[0.75rem]">{items.title}</div>
                <div className="text-[3.75rem]">{items.total}</div>
                <div className="text-[0.75rem] flex gap-1">
                  <div>U</div>
                  <div>2%</div>
                  <div>+4 this week</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-playfair pt-10">
          <div>
            <h1 className="text-[1.25rem] py-1">Recent Appeals</h1>
            <p className="text-[0.75rem] py-1">
              Here are some of the recent appeals
            </p>
          </div>
          <div className="flex flex-col pt-5">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full border text-center text-[0.625rem] font-light border-gray">
                    <thead className="border-b font-medium border-gray">
                      <tr>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-gray"
                        >
                          UserName
                        </th>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-gray"
                        >
                          Appeal Number
                        </th>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-gray"
                        >
                          Date and Time
                        </th>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-gray"
                        >
                          Reason
                        </th>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-gray"
                        >
                          Status
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {AppealData.map((items) => (
                        <tr className="border-b border-gray">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray">
                            {items.userName}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 border-gray">
                            {items.appealNumber}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 border-gray">
                            {items.dateAndTime}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 border-gray">
                            {items.Reason}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 border-gray">
                            {items.Reason}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <button className="bg-red text-white py-2 px-3 rounded-md">
                              {items.Action}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
