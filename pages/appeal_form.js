import Letmetelusumm from "@/components/letmetelusumm";

const AppealForm = () => {
  return (
    <div className="bg-dime w-full flex select-none px-0 minism:px-[10%] minism:mt-[40px] mt:[20px] minism:pb-[100px] items-center justify-between">
      <div className="minixl:block hidden w-[23.875rem]">
        <div className="flex justify-end">
          <div className="border flex justify-center gap-1 items-center mb-2 border-red py-[0.13rem] w-[4.625rem] h-[1.625rem] rounded-[0.25rem]">
            <h1 className="font-bebas text-[0.75rem] text-red">FLAGGED</h1>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="elements">
                <path
                  id="Vector"
                  d="M6.63123 3.12293L7.50829 2.24587C7.71221 2.04196 7.81416 1.94 7.8754 1.83394C8.04157 1.54611 8.04157 1.19149 7.8754 0.903668C7.81416 0.797603 7.71221 0.695648 7.50829 0.491736C7.30438 0.287824 7.20243 0.185869 7.09636 0.124633C6.80854 -0.041544 6.45392 -0.0415439 6.16609 0.124632C6.06003 0.185869 5.95807 0.287824 5.75416 0.491736L4.8771 1.3688C4.46364 1.78225 4.25692 1.98898 4.00003 1.98898C3.74314 1.98898 3.53642 1.78225 3.12296 1.3688L2.2459 0.491736C2.04199 0.287824 1.94003 0.185868 1.83397 0.124632C1.54614 -0.0415441 1.19152 -0.0415441 0.903698 0.124632C0.797634 0.185868 0.695678 0.287824 0.491766 0.491736C0.287855 0.695648 0.185899 0.797604 0.124663 0.903668C-0.0415135 1.19149 -0.0415137 1.54611 0.124663 1.83394C0.185899 1.94 0.287855 2.04196 0.491767 2.24587L1.36883 3.12293C1.78229 3.53639 1.98901 3.74311 1.98901 4C1.98901 4.25689 1.78229 4.46361 1.36883 4.87707L0.491766 5.75413C0.287855 5.95804 0.185899 6.06 0.124663 6.16606C-0.0415135 6.45389 -0.0415137 6.80851 0.124663 7.09633C0.185899 7.2024 0.287855 7.30435 0.491766 7.50826C0.695678 7.71218 0.797634 7.81413 0.903698 7.87537C1.19152 8.04154 1.54614 8.04154 1.83397 7.87537C1.94003 7.81413 2.04199 7.71218 2.2459 7.50826L3.12296 6.6312C3.53642 6.21775 3.74314 6.01102 4.00003 6.01102C4.25692 6.01102 4.46364 6.21775 4.8771 6.6312L5.75416 7.50826C5.95807 7.71218 6.06003 7.81413 6.16609 7.87537C6.45392 8.04154 6.80854 8.04154 7.09636 7.87537C7.20243 7.81413 7.30438 7.71218 7.50829 7.50826C7.71221 7.30435 7.81416 7.2024 7.8754 7.09633C8.04157 6.80851 8.04157 6.45389 7.8754 6.16606C7.81416 6.06 7.71221 5.95804 7.50829 5.75413L6.63123 4.87707C6.21777 4.46361 6.01105 4.25689 6.01105 4C6.01105 3.74311 6.21777 3.53639 6.63123 3.12293Z"
                  fill="#970F0F"
                />
              </g>
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="elements">
                <path
                  id="Vector"
                  d="M6.63123 3.12293L7.50829 2.24587C7.71221 2.04196 7.81416 1.94 7.8754 1.83394C8.04157 1.54611 8.04157 1.19149 7.8754 0.903668C7.81416 0.797603 7.71221 0.695648 7.50829 0.491736C7.30438 0.287824 7.20243 0.185869 7.09636 0.124633C6.80854 -0.041544 6.45392 -0.0415439 6.16609 0.124632C6.06003 0.185869 5.95807 0.287824 5.75416 0.491736L4.8771 1.3688C4.46364 1.78225 4.25692 1.98898 4.00003 1.98898C3.74314 1.98898 3.53642 1.78225 3.12296 1.3688L2.2459 0.491736C2.04199 0.287824 1.94003 0.185868 1.83397 0.124632C1.54614 -0.0415441 1.19152 -0.0415441 0.903698 0.124632C0.797634 0.185868 0.695678 0.287824 0.491766 0.491736C0.287855 0.695648 0.185899 0.797604 0.124663 0.903668C-0.0415135 1.19149 -0.0415137 1.54611 0.124663 1.83394C0.185899 1.94 0.287855 2.04196 0.491767 2.24587L1.36883 3.12293C1.78229 3.53639 1.98901 3.74311 1.98901 4C1.98901 4.25689 1.78229 4.46361 1.36883 4.87707L0.491766 5.75413C0.287855 5.95804 0.185899 6.06 0.124663 6.16606C-0.0415135 6.45389 -0.0415137 6.80851 0.124663 7.09633C0.185899 7.2024 0.287855 7.30435 0.491766 7.50826C0.695678 7.71218 0.797634 7.81413 0.903698 7.87537C1.19152 8.04154 1.54614 8.04154 1.83397 7.87537C1.94003 7.81413 2.04199 7.71218 2.2459 7.50826L3.12296 6.6312C3.53642 6.21775 3.74314 6.01102 4.00003 6.01102C4.25692 6.01102 4.46364 6.21775 4.8771 6.6312L5.75416 7.50826C5.95807 7.71218 6.06003 7.81413 6.16609 7.87537C6.45392 8.04154 6.80854 8.04154 7.09636 7.87537C7.20243 7.81413 7.30438 7.71218 7.50829 7.50826C7.71221 7.30435 7.81416 7.2024 7.8754 7.09633C8.04157 6.80851 8.04157 6.45389 7.8754 6.16606C7.81416 6.06 7.71221 5.95804 7.50829 5.75413L6.63123 4.87707C6.21777 4.46361 6.01105 4.25689 6.01105 4C6.01105 3.74311 6.21777 3.53639 6.63123 3.12293Z"
                  fill="#970F0F"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="">
            <div className="h-[50px] w-[50px] bg-gray rounded-full border border-red"></div>
          </div>
          <div>
            <div className="flex gap-2">
              <h1 className="uppercase font-bebas">bthebeestbuggg</h1>
              <div className="flex gap-1 items-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="elements">
                    <path
                      id="Vector"
                      d="M6.63123 3.12293L7.50829 2.24587C7.71221 2.04196 7.81416 1.94 7.8754 1.83394C8.04157 1.54611 8.04157 1.19149 7.8754 0.903668C7.81416 0.797603 7.71221 0.695648 7.50829 0.491736C7.30438 0.287824 7.20243 0.185869 7.09636 0.124633C6.80854 -0.041544 6.45392 -0.0415439 6.16609 0.124632C6.06003 0.185869 5.95807 0.287824 5.75416 0.491736L4.8771 1.3688C4.46364 1.78225 4.25692 1.98898 4.00003 1.98898C3.74314 1.98898 3.53642 1.78225 3.12296 1.3688L2.2459 0.491736C2.04199 0.287824 1.94003 0.185868 1.83397 0.124632C1.54614 -0.0415441 1.19152 -0.0415441 0.903698 0.124632C0.797634 0.185868 0.695678 0.287824 0.491766 0.491736C0.287855 0.695648 0.185899 0.797604 0.124663 0.903668C-0.0415135 1.19149 -0.0415137 1.54611 0.124663 1.83394C0.185899 1.94 0.287855 2.04196 0.491767 2.24587L1.36883 3.12293C1.78229 3.53639 1.98901 3.74311 1.98901 4C1.98901 4.25689 1.78229 4.46361 1.36883 4.87707L0.491766 5.75413C0.287855 5.95804 0.185899 6.06 0.124663 6.16606C-0.0415135 6.45389 -0.0415137 6.80851 0.124663 7.09633C0.185899 7.2024 0.287855 7.30435 0.491766 7.50826C0.695678 7.71218 0.797634 7.81413 0.903698 7.87537C1.19152 8.04154 1.54614 8.04154 1.83397 7.87537C1.94003 7.81413 2.04199 7.71218 2.2459 7.50826L3.12296 6.6312C3.53642 6.21775 3.74314 6.01102 4.00003 6.01102C4.25692 6.01102 4.46364 6.21775 4.8771 6.6312L5.75416 7.50826C5.95807 7.71218 6.06003 7.81413 6.16609 7.87537C6.45392 8.04154 6.80854 8.04154 7.09636 7.87537C7.20243 7.81413 7.30438 7.71218 7.50829 7.50826C7.71221 7.30435 7.81416 7.2024 7.8754 7.09633C8.04157 6.80851 8.04157 6.45389 7.8754 6.16606C7.81416 6.06 7.71221 5.95804 7.50829 5.75413L6.63123 4.87707C6.21777 4.46361 6.01105 4.25689 6.01105 4C6.01105 3.74311 6.21777 3.53639 6.63123 3.12293Z"
                      fill="#970F0F"
                    />
                  </g>
                </svg>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="elements">
                    <path
                      id="Vector"
                      d="M6.63123 3.12293L7.50829 2.24587C7.71221 2.04196 7.81416 1.94 7.8754 1.83394C8.04157 1.54611 8.04157 1.19149 7.8754 0.903668C7.81416 0.797603 7.71221 0.695648 7.50829 0.491736C7.30438 0.287824 7.20243 0.185869 7.09636 0.124633C6.80854 -0.041544 6.45392 -0.0415439 6.16609 0.124632C6.06003 0.185869 5.95807 0.287824 5.75416 0.491736L4.8771 1.3688C4.46364 1.78225 4.25692 1.98898 4.00003 1.98898C3.74314 1.98898 3.53642 1.78225 3.12296 1.3688L2.2459 0.491736C2.04199 0.287824 1.94003 0.185868 1.83397 0.124632C1.54614 -0.0415441 1.19152 -0.0415441 0.903698 0.124632C0.797634 0.185868 0.695678 0.287824 0.491766 0.491736C0.287855 0.695648 0.185899 0.797604 0.124663 0.903668C-0.0415135 1.19149 -0.0415137 1.54611 0.124663 1.83394C0.185899 1.94 0.287855 2.04196 0.491767 2.24587L1.36883 3.12293C1.78229 3.53639 1.98901 3.74311 1.98901 4C1.98901 4.25689 1.78229 4.46361 1.36883 4.87707L0.491766 5.75413C0.287855 5.95804 0.185899 6.06 0.124663 6.16606C-0.0415135 6.45389 -0.0415137 6.80851 0.124663 7.09633C0.185899 7.2024 0.287855 7.30435 0.491766 7.50826C0.695678 7.71218 0.797634 7.81413 0.903698 7.87537C1.19152 8.04154 1.54614 8.04154 1.83397 7.87537C1.94003 7.81413 2.04199 7.71218 2.2459 7.50826L3.12296 6.6312C3.53642 6.21775 3.74314 6.01102 4.00003 6.01102C4.25692 6.01102 4.46364 6.21775 4.8771 6.6312L5.75416 7.50826C5.95807 7.71218 6.06003 7.81413 6.16609 7.87537C6.45392 8.04154 6.80854 8.04154 7.09636 7.87537C7.20243 7.81413 7.30438 7.71218 7.50829 7.50826C7.71221 7.30435 7.81416 7.2024 7.8754 7.09633C8.04157 6.80851 8.04157 6.45389 7.8754 6.16606C7.81416 6.06 7.71221 5.95804 7.50829 5.75413L6.63123 4.87707C6.21777 4.46361 6.01105 4.25689 6.01105 4C6.01105 3.74311 6.21777 3.53639 6.63123 3.12293Z"
                      fill="#970F0F"
                    />
                  </g>
                </svg>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="elements">
                    <path
                      id="Vector"
                      d="M6.63123 3.12293L7.50829 2.24587C7.71221 2.04196 7.81416 1.94 7.8754 1.83394C8.04157 1.54611 8.04157 1.19149 7.8754 0.903668C7.81416 0.797603 7.71221 0.695648 7.50829 0.491736C7.30438 0.287824 7.20243 0.185869 7.09636 0.124633C6.80854 -0.041544 6.45392 -0.0415439 6.16609 0.124632C6.06003 0.185869 5.95807 0.287824 5.75416 0.491736L4.8771 1.3688C4.46364 1.78225 4.25692 1.98898 4.00003 1.98898C3.74314 1.98898 3.53642 1.78225 3.12296 1.3688L2.2459 0.491736C2.04199 0.287824 1.94003 0.185868 1.83397 0.124632C1.54614 -0.0415441 1.19152 -0.0415441 0.903698 0.124632C0.797634 0.185868 0.695678 0.287824 0.491766 0.491736C0.287855 0.695648 0.185899 0.797604 0.124663 0.903668C-0.0415135 1.19149 -0.0415137 1.54611 0.124663 1.83394C0.185899 1.94 0.287855 2.04196 0.491767 2.24587L1.36883 3.12293C1.78229 3.53639 1.98901 3.74311 1.98901 4C1.98901 4.25689 1.78229 4.46361 1.36883 4.87707L0.491766 5.75413C0.287855 5.95804 0.185899 6.06 0.124663 6.16606C-0.0415135 6.45389 -0.0415137 6.80851 0.124663 7.09633C0.185899 7.2024 0.287855 7.30435 0.491766 7.50826C0.695678 7.71218 0.797634 7.81413 0.903698 7.87537C1.19152 8.04154 1.54614 8.04154 1.83397 7.87537C1.94003 7.81413 2.04199 7.71218 2.2459 7.50826L3.12296 6.6312C3.53642 6.21775 3.74314 6.01102 4.00003 6.01102C4.25692 6.01102 4.46364 6.21775 4.8771 6.6312L5.75416 7.50826C5.95807 7.71218 6.06003 7.81413 6.16609 7.87537C6.45392 8.04154 6.80854 8.04154 7.09636 7.87537C7.20243 7.81413 7.30438 7.71218 7.50829 7.50826C7.71221 7.30435 7.81416 7.2024 7.8754 7.09633C8.04157 6.80851 8.04157 6.45389 7.8754 6.16606C7.81416 6.06 7.71221 5.95804 7.50829 5.75413L6.63123 4.87707C6.21777 4.46361 6.01105 4.25689 6.01105 4C6.01105 3.74311 6.21777 3.53639 6.63123 3.12293Z"
                      fill="#970F0F"
                    />
                  </g>
                </svg>
              </div>
              <p className="text-[#747474] font-playfair text-[13px]">
                31|12|23 08:38:02am
              </p>
            </div>
            <p className="font-playfair text-[0.75rem] text-red">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum
              lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem{" "}
            </p>
            <h1 className="uppercase font-bebas py-6">reply</h1>
          </div>
        </div>
        {/* <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm /> */}
      </div>
      <div className="bg-dime shadow-md p-10 w-[450px]">
        <h1 className="font-bebas py-3 text-black text-[23px]">APPEAL FORM</h1>
        <form className="font-playfair text-[15px]">
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Username</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="text"
                name="username"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Email Address</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Date and Time of flagged comment</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="text"
                name="date_time"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Content of flagged comment</label>
            </div>
            <div>
              <input
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                type="text"
                name="content"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label className="">Reason for appeal</label>
            </div>
            <div>
              <textarea
                rows={2}
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full resize-none"
                name="reason"
              />
            </div>
          </div>
          <div className="pb-6">
            <div className="pt-2 pb-1.5">
              <label>Additional information</label>
            </div>
            <div>
              <textarea
                rows={2}
                className="px-4 py-2.5 outline-none border border-gray rounded-md w-full resize-none"
                name="additional"
              />
            </div>
            <div className="flex items-center gap-3 py-6">
              <input type="checkbox" />
              <p>
                I agree to the community guidelines and commit to respectful
                communication
              </p>
            </div>
          </div>
          <button className="p-3 bg-[#D9D9D9] rounded-md w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AppealForm;
