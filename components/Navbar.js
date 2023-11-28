import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-dime font-bebas text-[20px] py-6 flex px-[10%] justify-between items-center">
      <div className="">
        <Link href="/">
          LETMETEL<span className="text-red">USUMM</span>
        </Link>
      </div>
      <div className="flex gap-[35px]">
        <Link className="p-3" href="/">
          NEWS
        </Link>
        <Link className="p-3" href="/blog_post">
          TECH BLOG
        </Link>
        <Link className="p-3" href="#">
          COLLECTIONS
        </Link>
        <Link className="p-3" href="#">
          PROFILE
        </Link>
        <Link className="p-3" href="#">
          SEARCH
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
