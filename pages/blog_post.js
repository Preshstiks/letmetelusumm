import Image from "next/image";

const BlogPost = () => {
  return (
    <div className="bg-dime py-[60px] flex justify-between gap-8">
      <div className="basis-[50%] bg-white shadow-md p-8 relative">
        <Image
          className="absolute top-[-18px] left-[-18px]"
          src="/subtract.png"
          width={70}
          height={70}
        />
        <Image
          className="absolute top-[-18px] right-[-18px]"
          src="/subtract1.png"
          width={70}
          height={70}
        />
        <Image
          className="absolute bottom-[-18px] left-[-18px]"
          src="/subtract3.png"
          width={70}
          height={70}
        />
        <Image
          className="absolute bottom-[-18px] right-[-18px]"
          src="/subtract2.png"
          width={70}
          height={70}
        />
        <h1 className="text-[18px] font-bebas">
          LETMETEL<span className="text-red">USUMM</span>
        </h1>
        <p className="font-playfair text-[13px]">23rd November 2023, 10:23pm</p>
        <q className="uppercase font-bebas text-[18px]">
          lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
        </q>
        <p className="font-playfair">
          lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipslorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ips
        </p>
      </div>
      <div className="basis-[50%]">
        <div>
          <h1 className="uppercase font-bebas text-[18px] pb-6">comments</h1>
        </div>
        <div className="flex gap-2">
          <div className="">
            <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
          </div>
          <div className="">
            <div className="flex gap-2">
              <h1 className="uppercase font-bebas">Annethfranklin</h1>
              <p className="text-[#747474] font-playfair text-[13px]">
                23 hours ago
              </p>
            </div>
            <p className="font-playfair">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem{" "}
            </p>
            <h1 className="uppercase font-bebas py-6">reply</h1>
          </div>
        </div>
        <div className="flex gap-2 ml-[65px]">
          <div className="">
            <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
          </div>
          <div>
            <div className="flex gap-2">
              <h1 className="uppercase font-bebas">JohnsonJ</h1>
              <p className="text-[#747474] font-playfair text-[13px]">
                22 hours ago
              </p>
            </div>
            <p className="font-playfair">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem{" "}
            </p>
            <h1 className="uppercase font-bebas py-6">reply</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="">
            <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
          </div>
          <div>
            <div className="flex gap-2">
              <h1 className="uppercase font-bebas">bthebeestbuggg</h1>
              <p className="text-[#747474] font-playfair text-[13px]">
                23 hours ago
              </p>
            </div>
            <p className="font-playfair">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem{" "}
            </p>
            <h1 className="uppercase font-bebas py-6">reply</h1>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Message..."
            className=" w-full rounded-md resize-none placeholder:text-black font-playfair border border-gray outline-none p-7"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
