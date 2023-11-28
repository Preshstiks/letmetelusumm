import React from "react";

const Comment = ({ author, body, replies }) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="">
          <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
        </div>
        <div className="">
          <div className="flex gap-2">
            <h1 className="uppercase font-bebas">
              {author?.first_name} {author?.last_name}
            </h1>
            <p className="text-[#747474] font-playfair text-[13px]">
              23 hours ago
            </p>
          </div>
          <p className="font-playfair">{body}</p>
          <h1 className="uppercase font-bebas py-6">reply</h1>
        </div>
      </div>
      {replies?.length > 0 &&
        replies?.map((item) => (
          <div className="flex gap-2 ml-[65px]">
            <div className="">
              <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <h1 className="uppercase font-bebas">
                  {item?.author?.first_name} {item?.author?.last_name}
                </h1>
                <p className="text-[#747474] font-playfair text-[13px]">
                  22 hours ago
                </p>
              </div>
              <p className="font-playfair">{item?.body}</p>
              <h1 className="uppercase font-bebas py-6">reply</h1>
            </div>
          </div>
        ))}
    </>
  );
};

export default Comment;
