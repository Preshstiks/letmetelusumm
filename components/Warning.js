const Warning = () => {
  return (
    <div className="font-playfair bg-dime h-screen flex items-center justify-center text-center">
      <div>
        <div className="pb-3">
          <h1 className="font-bebas text-[1.875rem] text-red">WARNING</h1>
        </div>
        <div>
          <p className="text-[1.125rem] py-1">
            Your recent comment may violate our guidelines.
          </p>
        </div>
        <div className="py-1">
          <p className="text-[1.125rem]">
            Please review and adjust your tone to maintain a positive and
            respectful environment.
          </p>
        </div>
        <div className="py-1">
          <p className="text-[1.125rem]">This is your first warning!.</p>
        </div>
      </div>
    </div>
  );
};

export default Warning;
