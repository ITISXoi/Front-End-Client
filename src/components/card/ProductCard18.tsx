"use client";
import { shortenString } from "@/utils/js";
import Link from "next/link";
import { useState } from "react";

interface Props {
  data: any;
}

export default function ProductCard18({ data }: Props): JSX.Element {
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
          <Link href={`/detail-nft?id=${data.id}`}>
            <img
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
              src={data.imageUrl}
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
            <Link href={`/detail-collection?id=${data.id}`}>{data.name}</Link>
          </h5>
          <div className="tags">{data.type}</div>
        </div>
        <div className="meta-info">
          <div className="author">
            <div className="avatar">
              <img height={100} width={100} src={data.imageUrl} alt="Image" />
            </div>
            <div className="info">
              <span>Price</span>
              <h6>
                <Link href="/authors-2">{data.price} MATIC</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
