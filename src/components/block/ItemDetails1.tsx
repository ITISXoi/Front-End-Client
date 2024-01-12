"use client";
import { useDetailDraftNFT, useListAllNFT } from "@/apis/nft/queries";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemDetailsTab from "../element/ItemDetailsTab";

export default function ItemDetails1() {
  const router = useRouter();
  const { id } = router.query;
  const { data: items } = useListAllNFT({
    page: 1,
    limit: 4,
  });
  const { data } = useDetailDraftNFT(String(id), { enabled: !!id });
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: any): JSX.Element | string => {
    if (completed) {
      return "Completed";
    } else {
      return (
        <p className="countdown__timer">
          <span className="countdown__item">{days}</span>
          <span className="countdown__item"> : </span>
          <span className="countdown__item">{hours}</span>
          <span className="countdown__item"> : </span>
          <span className="countdown__item">{minutes}</span>
          <span className="countdown__item"> : </span>
          <span className="countdown__item">{seconds}</span>
        </p>
      );
    }
  };

  return (
    <>
      <div className="tf-section tf-item-details">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-left">
                <div className="media">
                  <img height={1000} width={1000} src={data?.imageUrl} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">" {data?.name} "</h2>
                  <div className="meta-item">
                    <div className="left">
                      <span className="viewed">
                        {data?.type?.toLocaleUpperCase() || "MINTED"}
                      </span>
                      {/* <span className="liked heart wishlist-button mg-l-8">
                        <span className="number-like">100</span>
                      </span> */}
                    </div>
                    <div className="right">
                      <a className="share" />
                      <a className="option" />
                    </div>
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img
                            height={200}
                            width={200}
                            src={
                              data?.creatorImageUrl ||
                              "/assets/images/avatar/avt-8.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <span>Create By</span>
                          <h6>
                            <Link href="/authors-2">
                              {data?.creatorUserName}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img
                            height={200}
                            width={200}
                            src={
                              data?.collectionImageUrl ||
                              "/assets/images/avatar/avt-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <span>Collection</span>
                          <h6>
                            <Link href="/authors-2">
                              {data?.collectionName}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    {data?.description ||
                      "Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum"}
                  </p>
                  <div className="meta-item-details style2">
                    <div
                      className="item meta-price"
                      style={{
                        width: "fit-content",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <span className="heading">Price</span>
                      <div className="price">
                        <div className="price-box">
                          <h5>{Number(data?.price).toFixed(5)} tBNB</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {data?.type === "draft" && (
                    <Link
                      href={`/create-nft?id=${data?.collectionKeyId}&draftId=${data?.id}`}
                      className="sc-button loadmore style bag fl-button pri-3"
                    >
                      <span>Update Draft</span>
                    </Link>
                  )}
                </div>
                <ItemDetailsTab data={data?.images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
