const Oops = () => {
  return (
    <div>
      <div className="font-playfair bg-dime h-screen flex items-center justify-center text-center">
        <div>
          <div className="pb-3">
            <h1 className="font-bebas text-red text-[1.875rem]">Oops!!</h1>
          </div>
          <div className="px-[15%]">
            <p className="text-[1.125rem] py-1">
              Your comment has been flagged for inappropriate language. Let's
              keep it positive.
            </p>
          </div>
          <div className="pb-6">
            <p className="text-[1.125rem] py-1">
              Second warning!!—watch your language
            </p>
          </div>
          <div>
            <button className="text-[1.1875rem] font-semibold w-[26rem] rounded-[0.5rem] text-white bg-red py-[1.125rem] px-[9rem]">
              Appeal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oops;
