const FinalWarning = () => {
  return (
    <div className="font-playfair bg-dime h-screen flex items-center justify-center text-center">
      <div>
        <div>
          <h1 className="font-bebas text-red text-[1.875rem]">
            Final warning!!!
          </h1>
        </div>
        <div>
          <p className="text-[1.125rem] py-1">
            Your comment was flagged again.
          </p>
        </div>
        <div>
          <p className="text-[1.125rem] py-1">Three strikes now.</p>
        </div>
        <div className="pb-3">
          <p className="text-[1.125rem] py-1">
            Be careful, one more means a temporary suspension.
          </p>
        </div>
        <div>
          <button className="text-[1.1875rem] font-semibold w-[26rem] rounded-[0.5rem] text-white bg-red py-[1.125rem] px-[9rem]">
            Appeal
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalWarning;
