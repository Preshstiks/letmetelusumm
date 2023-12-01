const RemoveFlag = () => {
  return (
    <div className="px-[8%] pt-[100px]">
      <div className="flex justify-between">
        <div className="w-full">
          <h1 className="pb-3 font-bebas font-bold tracking-wide">
            Additional Information
          </h1>
          <p className="font-playfair text-red text-[0.75rem] leading-5">
            lorem ipsum loremipsumloremipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
            lorem ipsumloremipsumlorem ipsum lorem ipsumloremipsumlorem ipsum
          </p>
        </div>
        <div className="w-full flex flex-col gap-[50px]">
          <div>
            <h1 className="pb-3 font-bebas font-bold tracking-wide">
              Flagged Comment
            </h1>
            <p className="font-playfair text-red text-[0.75rem]">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
            </p>
          </div>
          <div>
            <button className="font-playfair text-[0.9375rem] py-[1.125rem] px-[9rem] bg-red text-white">
              Remove Flag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveFlag;
