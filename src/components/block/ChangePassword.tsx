import { changePasswordRequest } from "@/apis/user";
import { routeEnums } from "@/types/routes";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import FormWrapper from "../formprovider";

interface FormValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ChangePassword(): JSX.Element {
  const { push } = useRouter();
  const methods = useForm({
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
                    />
                    <input
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="password"
                      placeholder="Your New Password"
                      {...methods.register("newPassword")}
                    />
                    <input
                      tabIndex={2}
                      aria-required="true"
                      type="password"
                      placeholder="Confirm New Password"
                      required
                      {...methods.register("confirmNewPassword")}
                    />
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
