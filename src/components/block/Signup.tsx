import { registerRequest } from "@/apis/user";
import { routeEnums } from "@/types/routes";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import * as yup from "yup";
import FormWrapper from "../formprovider";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function Signup(): JSX.Element {
  const { push } = useRouter();
  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Invalid Email!")
      .required("Email required!")
      .label("Email"),
    name: yup
      .string()
      .trim()
      .min(
        3,
        "Username too short, please use another user name (within 3 ~ 256 characters)"
      )
      .max(
        256,
        "Username too long, please use another user name (within 3 ~ 256 characters)"
      )
      .label("UserName"),
    password: yup
      .string()
      .required("Password required!")
      .min(8, "Password is too short, at least 8 characrters")
      .max(20, "Password is too long, no longer then 20 characters")
      .label("Password"),
    passwordConfirmation: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "New Password must match"),
  });
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
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
                    {methods?.formState?.errors?.name?.message && (
                      <div
                        className="title-infor-account"
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#EA3F30",
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            methods?.formState?.errors?.name?.message ||
                            "Error",
                        }}
                      />
                    )}
                    <input
                      id="email"
                      {...methods.register("email")}
                      tabIndex={2}
                      aria-required="true"
                      type="email"
                      placeholder="Your Email Address"
                      required
                    />
                    {methods?.formState?.errors?.email?.message && (
                      <div
                        className="title-infor-account"
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#EA3F30",
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            methods?.formState?.errors?.email?.message ||
                            "Error",
                        }}
                      />
                    )}
                    <input
                      id="password"
                      {...methods.register("password")}
                      tabIndex={3}
                      aria-required="true"
                      type="password"
                      placeholder="Set Your Password"
                      required
                    />
                    {methods?.formState?.errors?.password?.message && (
                      <div
                        className="title-infor-account"
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#EA3F30",
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            methods?.formState?.errors?.password?.message ||
                            "Error",
                        }}
                      />
                    )}
                    <input
                      id="passwordConfirmation"
                      {...methods.register("passwordConfirmation")}
                      tabIndex={3}
                      aria-required="true"
                      type="password"
                      placeholder="Confirm Your Password"
                      required
                    />
                    {methods?.formState?.errors?.passwordConfirmation
                      ?.message && (
                      <div
                        className="title-infor-account"
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#EA3F30",
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            methods?.formState?.errors?.passwordConfirmation
                              ?.message || "Error",
                        }}
                      />
                    )}
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
