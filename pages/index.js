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
          <div className="absolute top-[-18px] right-[-18px]">
            <svg
              width="67"
              height="46"
              viewBox="0 0 67 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17_609)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.7739 29.8493L39.3978 40L3 16.1231L3.06117 16.0298L19.4965 16.8759L12.0594 2.31306L13.5767 6.10352e-05L63.9612 33.0522L62.8209 34.7905L35.7739 29.8493Z"
                  fill="#970F0F"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17_609"
                  x="0.333701"
                  y="0"
                  width="66.2938"
                  height="45.3326"
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
                  <feOffset dy="2.6663" />
                  <feGaussianBlur stdDeviation="1.33315" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17_609"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17_609"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-[-18px] left-[-18px]">
            <svg
              width="73"
              height="60"
              viewBox="0 0 73 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17_605)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6244 0L3.00002 17.7202L29.349 35.0051L23.7404 24.0227L53.5868 25.5592L14.6244 0ZM63.1686 31.8449L70 36.3263L58.3756 54.0465L51.6424 49.6296L63.1686 31.8449Z"
                  fill="#970F0F"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17_605"
                  x="0.208334"
                  y="0"
                  width="72.5833"
                  height="59.6297"
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
                  <feOffset dy="2.79167" />
                  <feGaussianBlur stdDeviation="1.39583" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17_605"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17_605"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-[-18px] right-[-18px]">
            <svg
              width="70"
              height="58"
              viewBox="0 0 70 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17_601)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.6233 17.3194L56.4856 0.898617L55.8961 0L3 34.6998L14.1039 51.6265L26.7697 43.3178L21.1649 34.6697L41.5527 33.6202L67 16.9267L65.4774 14.6057L50.6233 17.3194Z"
                  fill="#970F0F"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17_601"
                  x="0.0727584"
                  y="0"
                  width="69.8545"
                  height="57.4809"
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
                  <feOffset dy="2.92724" />
                  <feGaussianBlur stdDeviation="1.46362" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17_601"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17_601"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
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
