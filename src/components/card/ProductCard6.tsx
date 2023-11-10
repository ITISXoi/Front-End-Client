"use client";
import { IImage } from "@/apis/collection/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  data: IImage;
}

export default function ProductCard6({ data }: Props): JSX.Element {
  const [isHeartToggle, setHeartToggle] = useState<number>(0);
  const pathname = usePathname();

  // heart toggle
  const heartToggle = () => {
    if (isHeartToggle === 0) {
      return setHeartToggle(1);
    }
    setHeartToggle(0);
  };

  return (
    <>
      <div className="sc-card-product explode style2 mg-bt">
        <div className="card-media">
          <Link href="/item-details-1">
            <img
              style={{ aspectRatio: "1/1" }}
              src={data.imageUrl}
              alt="Image"
            />
          </Link>
          <button
            onClick={heartToggle}
            className={`wishlist-button  ${
              isHeartToggle === 1 ? "active" : ""
            } `}
          >
            <span>{`${data.remainingQuantity}/${data.quantity}`}</span>
          </button>
        </div>
        <div className="card-title">
          <h5>
            <Link href="/item-details-1">
              {data.name}
              {": "}
              {Number(data.percent)}%
            </Link>
          </h5>
        </div>
        <div className="meta-info">
          <div className="author">
            <div className="avatar">
              <img
                style={{ aspectRatio: "1/1", width: "60px" }}
                src={
                  "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/DPYBKVZG55EWFHIK2TVT3HTH7Y.png"
                }
                alt="Image"
              />
            </div>
            <div className="info">
              <span>Price</span>
              <h6>
                <Link href="/authors-2">1234.56 MATIC</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
