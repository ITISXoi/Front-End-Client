import { changePasswordRequest } from "@/apis/user";
import { routeEnums } from "@/types/routes";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import FormWrapper from "../formprovider";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ChangePassword(): JSX.Element {
  const { push } = useRouter();
  const validationSchema = yup.object().shape({
    oldPassword: yup
      .string()
      .required("Password required!")
      .min(8, "Password is too short, at least 8 characrters")
      .max(20, "Password is too long, no longer then 20 characters")
      .label("Password"),
    newPassword: yup
      .string()
      .required("Password required!")
      .min(8, "Password is too short, at least 8 characrters")
      .max(20, "Password is too long, no longer then 20 characters")
      .label("Password"),
    confirmNewPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("newPassword")], "New Password must match"),
  });
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const { mutate } = useMutation(changePasswordRequest, {
    onSuccess: (res, req) => {
      toast.success("Change password success!");
      push(routeEnums.home);
    },
    onError: (error) => {
      toast.error("Change password failed!");
    },
  });

  const handleLogin = (values: any) => {
    mutate({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
  };
  return (
    <>
      <section className="tf-login tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">
                Change Your Password
              </h2>
              <div className="flat-form box-login-email">
                <div className="form-inner">
                  <FormWrapper methods={methods} onSubmit={handleLogin}>
                    <input
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="password"
                      placeholder="Your Current Password"
                      {...methods.register("oldPassword")}
                    />{" "}
                    {methods?.formState?.errors?.oldPassword?.message && (
                      <div
                        className="title-infor-account"
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#EA3F30",
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            methods?.formState?.errors?.oldPassword?.message ||
                            "Error",
                        }}
                      />
                    )}
                    <input
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="password"
                      placeholder="Your New Password"
                      {...methods.register("newPassword")}
                    />
                    {methods?.formState?.errors?.newPassword?.message && (
                      <div
                        className="title-infor-account"
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#EA3F30",
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            methods?.formState?.errors?.newPassword?.message ||
                            "Error",
                        }}
                      />
                    )}
                    <input
                      tabIndex={2}
                      aria-required="true"
                      type="password"
                      placeholder="Confirm New Password"
                      required
                      {...methods.register("confirmNewPassword")}
                    />
                    {methods?.formState?.errors?.confirmNewPassword
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
                            methods?.formState?.errors?.confirmNewPassword
                              ?.message || "Error",
                        }}
                      />
                    )}
                    <button className="submit">Change Password</button>
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
