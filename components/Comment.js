import { formatDistanceToNow } from "date-fns";
import React from "react";
import XFlag from "./icons/XFlag";

const renderReply = (replies) => {
  if (!replies || replies.length === 0) {
    return null;
  }

  return (
    <>
      {replies?.map((item) => (
        <div className="ml-[65px]">
          <div className="flex gap-2">
            <div className="">
              <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <h1 className="uppercase font-bebas">
                  {item?.author?.first_name} {item?.author?.last_name}
                </h1>
                {item?.author?.flags === 4 && (
                  <div className="mx-auto border flex justify-center p-[0.2rem] items-center mb-2 border-red rounded-[0.25rem]">
                    <h1 className="font-bebas text-[0.7rem] text-red">
                      BLOCKED
                    </h1>
                  </div>
                )}
                {item?.author?.flags < 4 && (
                  <div className="flex gap2">
                    {new Array(item?.author?.flags).fill().map(() => (
                      <XFlag />
                    ))}
                  </div>
                )}
                <p className="text-[#747474] font-playfair text-[13px]">
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <p className="font-playfair">{item?.body}</p>
              <h1 className="uppercase font-bebas py-6">reply</h1>
            </div>
          </div>
          {(item?.replies || item?.replies?.length > 0) &&
            renderReply(item?.replies)}
        </div>
      ))}
    </>
  );
};

const Comment = ({ author, body, replies, createdAt }) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="">
          <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
        </div>
        <div className="">
          <div className="flex gap-2 items-base">
            <h1 className="uppercase font-bebas">
              {author?.first_name} {author?.last_name}
            </h1>
            {author?.flags === 4 && (
              <div className="mx-auto border flex justify-center p-[0.2rem] items-center mb-2 border-red rounded-[0.25rem]">
                <h1 className="font-bebas text-[0.7rem] text-red">BLOCKED</h1>
              </div>
            )}
            {author?.flags < 4 && (
              <div className="flex gap2">
                {new Array(author?.flags).fill().map((item) => (
                  <XFlag />
                ))}
              </div>
            )}
            <p className="text-[#747474] font-playfair text-[13px]">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
          <p className="font-playfair">{body}</p>
          <h1 className="uppercase font-bebas py-6">reply</h1>
        </div>
      </div>
      {renderReply(replies)}
    </>
  );
};

export default Comment;
