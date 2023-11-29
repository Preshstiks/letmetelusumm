import { useRouter } from "next/router";

const Quote = ({ title, body, id }) => {
  const router = useRouter();
  return (
    <div
      className="border-l border-red pl-4 cursor-pointer"
      onClick={() => router.push(`/${id}`)}
    >
      <q className="font-bebas text-[20px]">{title}</q>
      <p className="text-[13px] font-playfair">{body}</p>
    </div>
  );
};

export default Quote;
