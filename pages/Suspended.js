const Suspended = () => {
  return (
    <div className="font-playfair bg-dime h-screen flex items-center justify-center text-center">
      <div>
        <div className="mx-auto border flex justify-center items-center border-red py-[0.5rem] px-[0.69rem] w-[6.5rem] h-[3.25rem] rounded-[0.25rem]">
          <h1 className="font-bebas text-[1.875rem] text-red">NOTE</h1>
        </div>
        <div className="py-1">
          <p className="text-[1.125rem]">
            Your Account has been blocked due to repeated violations.
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
