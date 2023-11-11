"use client";
import { IImageLayer } from "@/apis/collection/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  data: IImageLayer[] | undefined;
}

export default function ItemDetailsTab(props: Props): JSX.Element {
  const { data } = props;

  return (
    <>
      <div className="flat-tabs themesflat-tabs">
        <ul className="menu-tab tab-title">
          <li className={`item-title active `}>
            <span className="inner">{"Info NFT"}</span>
          </li>
        </ul>
        <div className="content-tab">
          <div className="content-inner tab-content">
            <ul className="bid-history-list">
              {data?.map((item) => (
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <img
                              height={100}
                              width={100}
                              src={
                                item?.imageUrl ||
                                "/assets/images/avatar/avt-3.jpg"
                              }
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link href="/authors-2">{item?.name}</Link>
                            </h6>
                          </div>
                          <span className="time">{item?.layerName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>{item?.price} MATIC</h5>
                      <span>{item?.percent} % have this trait</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
