import { useCreateAccount } from "@/api-services/auth";
import Letmetelusumm from "@/components/letmetelusumm";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";
const Register = () => {
  const router = useRouter();
  const { mutate: createUser, isPending } = useCreateAccount();
  const formik = useFormik({
    validationSchema: "",
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    onSubmit: (values) => {
      createUser(values, { onSuccess: () => router.push("/") });
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
        <h1 className="font-bebas py-3 text-[23px]">CREATE AN ACCOUNT</h1>

        <FormikProvider value={formik}>
          <form
            className="font-playfair text-[15px] space-y-[2.81rem]"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="pt-2 pb-1.5">
                <label className="">Firstname</label>
              </div>
              <div>
                <input
                  className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                  type="text"
                  name="first_name"
                  id="first_name"
                  onChange={({ target: { value } }) =>
                    setFieldValue("first_name", value)
                  }
                />
              </div>
            </div>
            <div>
              <div className="pt-2 pb-1.5">
                <label className="">Lastname</label>
              </div>
              <div>
                <input
                  className="px-4 py-2.5 outline-none border border-gray rounded-md w-full"
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={({ target: { value } }) =>
                    setFieldValue("last_name", value)
                  }
                />
              </div>
            </div>
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
            <button
              type="submit"
              className="p-3 bg-red border border-red hover:bg-opacity-0 hover:text-red text-white rounded-md w-full mt-10"
            >
              {isPending ? "Creating..." : "Create account"}
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Register;
