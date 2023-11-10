"use client";
import { ICollection } from "@/apis/collection/types";
import { shortenString } from "@/utils/js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  data: ICollection;
}

export default function ProductCard3({ data }: Props): JSX.Element {
  const [isHeartToggle, setHeartToggle] = useState<number>(0);

  // heart toggle
  const heartToggle = () => {
    if (isHeartToggle === 0) {
      return setHeartToggle(1);
    }
    setHeartToggle(0);
  };

  return (
    <>
      <div className="sc-card-product">
        <div className="card-media">
          <Link href={`/detail-collection?id=${data.id}`}>
            <img
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
              src={data.bannerUrl}
              alt="Image"
            />
          </Link>
          {data.status === "Coming Soon" ? (
            <div className="coming-soon">coming soon</div>
          ) : undefined}

          <button
            onClick={heartToggle}
            className={`wishlist-button heart ${
              isHeartToggle === 1 ? "active" : ""
            } `}
          >
            <span className="number-like">{data.totalNfts || 100}</span>
          </button>
        </div>
        <div className="card-title">
          <h5 className="style2">
            <Link href={`/detail-collection?id=${data.id}`}>
              {data.description}
            </Link>
          </h5>
          <div className="tags">{data.name}</div>
        </div>
        <div className="meta-info">
          <div className="author">
            <div className="avatar">
              <img height={100} width={100} src={data.imageUrl} alt="Image" />
            </div>
            <div className="info">
              <span>Address</span>
              <h6>
                <Link href="/authors-2">{shortenString(data.address)}</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
