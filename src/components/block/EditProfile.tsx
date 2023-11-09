"use client";
import { useUserInfo } from "@/apis/user";
import UploadProfile from "../element/UploadProfile";
import { Controller, useForm } from "react-hook-form";
import FormWrapper from "../formprovider";

interface FormValues {
  username: string;
  firstName: string;
  dateOfBirth: string;
  wallet: string;
  email: string;
  lastName: string;
}

export default function EditProfile(): JSX.Element {
  const { data: userInformation } = useUserInfo();
  console.log("userInformation", userInformation);
  const methods = useForm<FormValues>({
    mode: "onChange",
  });
  const handleUpdateProfile = (values: any) => {
    console.log("value", values);
  };
  return (
    <>
      <div className="tf-create-item tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <UploadProfile methods={methods} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
              <div className="form-upload-profile">
                <FormWrapper methods={methods} onSubmit={handleUpdateProfile}>
                  <div className="form-infor-profile">
                    <div className="info-account">
                      <h4 className="title-create-item">Account info</h4>
                      <fieldset>
                        <h4 className="title-infor-account">User name</h4>
                        <input
                          type="text"
                          placeholder="Your user name"
                          {...methods.register("username")}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">First name</h4>
                        <input
                          type="text"
                          placeholder="Your first name"
                          {...methods.register("firstName")}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Date of birth</h4>
                        <input
                          type="date"
                          {...methods.register("dateOfBirth")}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="info-account">
                      <h4 className="title-create-item">-</h4>
                      <fieldset>
                        <h4 className="title-infor-account">Email</h4>
                        <input
                          type="text"
                          placeholder="Your email"
                          {...methods.register("email")}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Last name</h4>
                        <input
                          type="text"
                          placeholder="Your last name"
                          {...methods.register("lastName")}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Wallet address</h4>
                        <input
                          type="text"
                          {...methods.register("wallet")}
                          required
                        />
                      </fieldset>
                    </div>
                  </div>
                  <button className="tf-button-submit mg-t-15" type="submit">
                    Update Profile
                  </button>
                </FormWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
