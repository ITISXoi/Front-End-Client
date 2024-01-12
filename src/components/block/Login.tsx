import { loginRequest } from "@/apis/user";
import { COOKIES, setCookies } from "@/libs/cookies";
import { routeEnums } from "@/types/routes";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import FormWrapper from "../formprovider";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

export default function Login(): JSX.Element {
  const { push } = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().max(256).required("Email field requrired!"),
    password: Yup.string().max(256).required("Password field required!"),
  });
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const { mutate } = useMutation(loginRequest, {
    onSuccess: (res, req) => {
      toast.success("Login success!");
      setCookies(COOKIES.accessToken, res.token);
      setCookies(COOKIES.email, res.email);
      setCookies(COOKIES.userId, res.userId);
      push(routeEnums.home);
    },
    onError: (error) => {
      toast.error("Login failed!");
    },
  });

  const handleLogin = (values: any) => {
    mutate(values);
  };
  return (
    <>
      <section className="tf-login tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">Login To NFTs</h2>
              <div className="flat-form box-login-email">
                <div className="form-inner">
                  <FormWrapper methods={methods} onSubmit={handleLogin}>
                    <input
                      id="email"
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="text"
                      placeholder="Your Email"
                      {...methods.register("email")}
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
                      tabIndex={2}
                      aria-required="true"
                      type="password"
                      placeholder="Your Password"
                      required
                      {...methods.register("password")}
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
                    <div className="row-form style-1">
                      <label>
                        Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                      <a className="forgot-pass">Forgot Password ?</a>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <button className="submit">Login</button>
                      <span className="forgot-pass">Or</span>
                      <button
                        type="button"
                        onClick={() => push(routeEnums.signUp)}
                      >
                        Sign Up
                      </button>
                    </div>
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
