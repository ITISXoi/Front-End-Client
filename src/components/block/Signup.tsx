import { registerRequest } from "@/apis/user";
import { routeEnums } from "@/types/routes";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import * as yup from "yup";
import FormWrapper from "../formprovider";

export default function Signup(): JSX.Element {
  const { push } = useRouter();
  //   const schema = yup.object().shape({
  //     email: yup
  //       .string()
  //       .trim()
  //       .email("Invalid Email!")
  //       .required("Email required!")
  //       .label("Email"),
  //     name: yup
  //       .string()
  //       .trim()
  //       .min(
  //         3,
  //         "Username too short, please use another user name (within 3 ~ 256 characters)"
  //       )
  //       .max(
  //         256,
  //         "Username too long, please use another user name (within 3 ~ 256 characters)"
  //       )
  //       .label("UserName"),
  //     password: yup
  //       .string()
  //       .required("Password required!")
  //       .min(8, "Password is too short, at least 8 characrters")
  //       .max(20, "Password is too long, no longer then 20 characters")
  //       .label("Password"),
  //     passwordConfirmation: yup
  //       .string()
  //       .required("Confirm your password")
  //       .oneOf([yup.ref("password"), null], "New Password must match"),
  //   });
  const methods = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  const { mutate } = useMutation(registerRequest, {
    onSuccess: (res, req) => {
      toast.success("Register success");
      push(routeEnums.home);
    },
    onError: (error) => {
      toast.error("Register failed!");
    },
  });

  const handleSignup = (values: any) => {
    mutate(values);
  };
  return (
    <>
      <section className="tf-login tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">Sigup To NFTs</h2>
              <div className="flat-form box-login-email">
                <div className="form-inner">
                  <FormWrapper methods={methods} onSubmit={handleSignup}>
                    <input
                      id="name"
                      {...methods.register("name")}
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="text"
                      placeholder="Your Full Name"
                    />
                    <input
                      id="email"
                      {...methods.register("email")}
                      tabIndex={2}
                      aria-required="true"
                      type="email"
                      placeholder="Your Email Address"
                      required
                    />
                    <input
                      id="password"
                      {...methods.register("password")}
                      tabIndex={3}
                      aria-required="true"
                      type="text"
                      placeholder="Set Your Password"
                      required
                    />
                    <input
                      id="passwordConfirmation"
                      {...methods.register("passwordConfirmation")}
                      tabIndex={3}
                      aria-required="true"
                      type="text"
                      placeholder="Confirm Your Password"
                      required
                    />
                    <div className="row-form style-1">
                      <label>
                        Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <button className="submit">Sign Up</button>
                      <span className="forgot-pass">Or</span>
                      <button
                        type="button"
                        onClick={() => push(routeEnums.login)}
                      >
                        Login
                      </button>
                    </div>{" "}
                  </FormWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
