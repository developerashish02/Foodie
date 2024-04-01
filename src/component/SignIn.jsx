import simile from "../assets/img/smiling.svg";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gray-200 h-[130vh] bg-fixed flex justify-center">
      <div className="w-[35%]  bg-white  rounded-xl py-6 px-9 absolute mt-12 ">
        <div className="flex justify-center items-center flex-col space-y-6">
          <p className="text-[#FAB005] font-bold uppercase tracking-[0.3rem] text-base font-[Poppins]">
            WELCOME BACK
          </p>

          <img src={simile} className="w-16" />
        </div>
        <div className="flex justify-center flex-col items-center space-y-4">
          <p className="font-semibold text-3xl mt-4  text-[#272c32] font-[Poppins]">
            Sign In to Your Account
          </p>
          <p className="font-normal font-[Poppins]">
            Let's get you signed in and straight to the icons.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-12">
          <div className="space-y-8">
            <div className="space-y-2 font-[poppins] text-base font-semibold relative">
              <label htmlFor="email" className="text-[#183153]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border-2 border-gray-500 py-3  w-full rounded-xl pl-14"
                placeholder="work.ashish.gaikwad@gmail.com"
              />
              <i className="fa-regular  text-lg font-bold fa-envelope absolute left-3 top-9 px-4"></i>
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500 ml-2">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="space-y-2 relative">
              <label
                htmlFor="password"
                className="font-[poppins] text-base font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                className="border-2 border-gray-500 py-3  w-full rounded-xl pl-14"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="password"
              />
              <i className="fa-solid fa-lock absolute top-9 left-3 px-4 text-lg font-bold"></i>
              {formik.errors.password && formik.touched.password ? (
                <div className="ml-2 text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-2 bg-[#FAB005] mt-10 font-[poppins] text-base font-semibold rounded-xl border-2 border-black border-b-8"
          >
            Sign In
            <i className="fa-solid fa-arrow-right-to-bracket ml-2 "></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
