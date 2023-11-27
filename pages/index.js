import Quote from "@/components/Quote";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-dime pb-[60px] pt-10">
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
          <div className="absolute top-[-18px] left-[-18px]">
            <svg
              width="61"
              height="51"
              viewBox="0 0 61 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17_597)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.5915 17.7112L45.9145 0L3 28.1519L15.7911 27.4934L8.00819 42.7333L10.0305 45.8161L57.9999 14.3482L39.5915 17.7112Z"
                  fill="#970F0F"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17_597"
                  x="0.454664"
                  y="0"
                  width="60.0906"
                  height="50.9068"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2.54534" />
                  <feGaussianBlur stdDeviation="1.27267" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17_597"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17_597"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          {/* <Image
            className="absolute top-[-18px] left-[-18px]"
            src="/subtract.png"
            width={70}
            height={70}
          /> */}
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
