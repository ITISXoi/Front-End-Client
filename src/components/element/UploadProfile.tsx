"use client";
import { IUserInfo } from "@/apis/user";
import { Dispatch } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  setProfileImage: Dispatch<any>;
  methods: UseFormReturn<any>;
  getProfileImg: any;
  userInformation: IUserInfo | undefined;
}

export default function UploadProfile(props: Props): JSX.Element {
  const { methods, setProfileImage, getProfileImg, userInformation } = props;
  const uploadImage = (e: any) => {
    setProfileImage(e.target.files[0]);
  };

  return (
    <>
      <div className="sc-card-profile text-center">
        <div className="card-media">
          <img
            id="profileimg"
            src={
              getProfileImg !== null
                ? URL.createObjectURL(getProfileImg)
                : userInformation?.avatarUrl
                ? userInformation?.avatarUrl
                : "/assets/images/avatar/avata_profile.jpg"
            }
            alt="Image"
            height={500}
            width={500}
          />
        </div>
        <div id="upload-profile">
          <a className="btn-upload">Upload New Photo </a>
          <input
            id="tf-upload-img"
            type="file"
            name="profile"
            required
            onChange={uploadImage}
            accept=".png, .jpg, .jpeg"
          />
        </div>
        {/* <a
          onClick={() => setProfileImage(null)}
          style={{ cursor: "pointer" }}
          className="btn-upload style2"
        >
          Delete
        </a> */}
      </div>
    </>
  );
}
