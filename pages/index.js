import Quote from "@/components/Quote";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-dime pb-[60px]">
      <div className="flex justify-between items-center py-6">
        <div>
          <div className="pb-[40px]">
            <h1 className="text-[33px] font-bebas">WELCOME BACK ABI!</h1>
            <p className=" font-playfair text-[13px]">
              Me cant wait to tell you what you missed...
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[50px] pt-10">
            <Quote />
            <Quote />
            <Quote />
            <Quote />
          </div>
        </div>
        <div className="w-[400px] p-5 rounded-xl bg-dark relative font-playfair">
          {/* <Image
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
          /> */}
          <div className="flex items-center justify-between">
            <div>
              <p className="py-2">2023</p>
              <h1 className="py-2 ">TRENDING NEWS</h1>
              <h1 className="py-2 font-bebas text-[20px]">NAME OF THE NEWS</h1>
            </div>
            <div className="basis-1/2">
              <q className="text-[13px]">
                A special cut out from the blog post that is mentioned here
                juicy stuff
              </q>
            </div>
          </div>
          <div className="w-[350px] pt-10">
            <Image
              className="mx-auto rounded-[15px] object-cover"
              src="/news2.png"
              width={527}
              height={471}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
