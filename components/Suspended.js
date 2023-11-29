const Suspended = () => {
  return (
    <div className="font-playfair bg-dime h-screen flex items-center justify-center text-center">
      <div>
        <div className="pb-3">
          <h1 className="font-bebas text-[1.875rem] text-red">NOTE</h1>
        </div>
        <div>
          <p className="text-[1.125rem] py-1">
            Your Account has been suspended due to repeated violations.
          </p>
        </div>
        <div>
          <p className="text-[1.125rem] py-1">
            We prioritize a safe and respectful space.
          </p>
        </div>
        <div>
          <p className="text-[1.125rem] py-1">Contact support for concerns.</p>
        </div>
      </div>
    </div>
  );
};

export default Suspended;
