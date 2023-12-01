import { useLogin } from "@/api-services/auth";
import CustomToast from "@/components/CustomToast";
import Letmetelusumm from "@/components/letmetelusumm";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const router = useRouter();
  const { mutate: loginUser, isPending } = useLogin();
  const formik = useFormik({
    validationSchema: "",
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginUser(values, {
        onSuccess: () => {
          router.push("/");
          CustomToast({ message: "Login successful", type: "success" });
        },
        onError: (err) => {
          CustomToast({
            message: err.message,
            type: "error",
          });
        },
      });
    },
  });
  const { setFieldValue } = formik;
  return (
    <div className="bg-dime w-full sm:my-[60px] minism:px-[10%] minism:mt-[40px] my-0 flex select-none items-center justify-between">
      <div className="smxl:block hidden">
        <div className="grid grid-cols-2 gap-[50px]">
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
          <Letmetelusumm />
        </div>
      </div>
      <div className="bg-dime shadow-md p-10 minism:w-[31rem] w-full">
        <h1 className="font-bebas py-3 text-black text-[27px]">
          LETMETEL<span className="text-red">USUMM</span>
        </h1>
        <h1 className="font-bebas py-3 text-[23px]">LOGIN TO CONTINUE</h1>

        <FormikProvider value={formik}>
          <form
            className="font-playfair text-[15px] space-y-[2.81rem]"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="pt-2 pb-1.5">
                <label>Email</label>
              </div>
              <div>
                <input
                  className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                  type="email"
                  name="email"
                  id="email"
                  onChange={({ target: { value } }) =>
                    setFieldValue("email", value)
                  }
                />
              </div>
            </div>
            <div>
              <div className="pt-2 pb-1.5">
                <label>Password</label>
              </div>
              <div>
                <input
                  className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                  type="password"
                  name="password"
                  id="password"
                  onChange={({ target: { value } }) =>
                    setFieldValue("password", value)
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              className="p-3 bg-red border border-red hover:bg-opacity-0 hover:text-red text-white rounded-md w-full mt-10"
            >
              {isPending ? "Logging in..." : "Create account"}
            </button>
          </form>
        </FormikProvider>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
