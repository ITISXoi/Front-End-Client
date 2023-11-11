"use client";
import Link from "next/link";
import { useState } from "react";

interface Props {
  data: {
    id: number;
    bannerUrl: string;
    imageUrl: string;
    name: string;
    type: string;
    status: string;
    address: string;
    fullName: string;
  };
}

export default function ProductCard2({ data }: Props): JSX.Element {
  const [isHeartToggle, setHeartToggle] = useState<number>(0);

  // heart toggle
  const heartToggle = () => {
    if (isHeartToggle === 0) {
      return setHeartToggle(1);
    }
    setHeartToggle(0);
  };

  function shortenHexString(
    hexString: string,
    startLength: number,
    endLength: number
  ) {
    const prefix = hexString.slice(0, startLength);
    const suffix = hexString.slice(-endLength);
    return prefix + "...." + suffix;
  }
  return (
    <>
      <div className="slider-item">
        <div className="sc-card-collection style-2 home2">
          <div className="card-bottom">
            <div className="author">
              <div className="sc-author-box style-2">
                <div className="author-avatar">
                  <img
                    height={100}
                    width={100}
                    src={data.imageUrl}
                    alt="Avatar"
                    className="avatar"
                  />
                  <div className="badge">
                    <i className="ripple" />
                  </div>
                </div>
              </div>
              <div className="content">
                <h4>
                  <Link href="authors-1">{data.name}</Link>
                </h4>
                <div className="infor">
                  <span>Created by</span>
                  <span className="name">
                    <Link href="authors-2">{data.fullName}</Link>
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={heartToggle}
              className={`wishlist-button public active`}
            >
              <span className="type-collection">{data.type}</span>
            </button>
          </div>
          <Link href={`detail-collection?id=${data.id}`}>
            <div className="media-images-collection">
              <img
                style={{
                  width: "420px",
                  height: "200px",
                }}
                src={data.bannerUrl}
                alt="Popular Image"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
