"use client";
import { product1 } from "@/data/product";
import { useEffect, useState } from "react";
import ProductCard6 from "../card/ProductCard6";
import Link from "next/link";
import Image from "next/image";
import {
  useListImageByLayerId,
  useListLayers,
} from "@/apis/collection/queries";
import { useRouter } from "next/router";
import { ILayer } from "@/apis/collection/types";

const tabs = ["ALL", "ART", "MUSIC", "COLLECTIBLES", "SPORTS"];

export default function AuthorProfile(): JSX.Element {
  const [getCurrentTab, setCurrentTab] = useState<Number>(-1);
  const router = useRouter();
  const { id } = router.query;

  const { data: listLayer } = useListLayers(Number(id), { enabled: !!id });
  const { data: listImageLayer } = useListImageByLayerId(
    Number(getCurrentTab),
    { enabled: getCurrentTab !== -1 }
  );

  useEffect(() => {
    if (listLayer && listLayer?.list?.length > 0) {
      setCurrentTab(listLayer?.list[0].id);
    }
  }, [listLayer]);

  // tab handler
  const tabHandler = (item: ILayer) => {
    setCurrentTab(item.id);
  };

  return (
    <>
      <section className="tf-section authors">
        <div className="ibthemes-container">
          <div className="flat-tabs tab-authors">
            <div className="author-profile flex">
              <div className="feature-profile">
                <img
                  style={{ height: "300px", width: "300px" }}
                  src="/assets/images/avatar/avt-author-tab.jpg"
                  alt="Image"
                  className="avatar"
                />
              </div>
              <div className="infor-profile">
                <span>Author Profile</span>
                <h2 className="title">Trista Francis</h2>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
                <form>
                  <input
                    type="text"
                    className="inputcopy"
                    defaultValue="DdzFFzCqrhshMSxABCdfrge"
                    readOnly
                  />
                  <button type="button" className="btn-copycode">
                    <i className="icon-fl-file-1" />
                  </button>
                </form>
              </div>
              <div className="widget-social style-3">
                <ul>
                  <li>
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="style-2">
                    <a>
                      <i className="fab fa-telegram-plane" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="mgr-none">
                    <a>
                      <i className="icon-fl-tik-tok-2" />
                    </a>
                  </li>
                </ul>
                <div className="btn-profile">
                  <Link href="/login" className="sc-button style-1 follow">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <ul className="menu-tab flex">
              {listLayer?.list?.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => tabHandler(tab)}
                  className={`tablinks ${
                    getCurrentTab === tab.id ? "active" : ""
                  }`}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
            <div className="content-tab active">
              <div className="row">
                {listImageLayer?.list?.map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-2 col-lg-2 col-md-6 col-12"
                  >
                    <ProductCard6 data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12 wrap-inner load-more text-center">
              <Link
                href="/authors-2"
                className="sc-button loadmore fl-button pri-3"
              >
                <span>Load More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
