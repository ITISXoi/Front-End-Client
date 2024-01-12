"use client";
import { useFetchMoreListCustomized } from "@/apis/nft/queries";
import { product1 } from "@/data/product";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCard18 from "../card/ProductCard18";

const tabs: string[] = ["All", "Art", "Music", "Collectibles", "Sports"];

interface ItemState {
  start: number;
  end: number;
}

export default function ListDraftNFT() {
  const router = useRouter();
  const { id } = router.query;
  const [getItem, setItem] = useState<ItemState>({
    start: 0,
    end: 8,
  });
  const [params, setParams] = useState<{
    page: number;
    limit: number;
    type: string;
    collectionKeyId: number;
  }>({
    page: 1,
    limit: 8,
    type: "draft",
    collectionKeyId: Number(id),
  });
  const { data: dataNFTDraft, fetchNextPage } =
    useFetchMoreListCustomized(params);

  const handleLoadmore = () => {
    fetchNextPage();
  };

  return (
    <>
      <div className="tf-section sc-explore-2">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-tabs explore-tab">
                <div className="content-tab mg-t-40">
                  <div className="row">
                    {dataNFTDraft?.pages.map((item: any) => (
                      <>
                        {item.data?.list?.map((record: any) => (
                          <div
                            key={record.id}
                            className="col-xl-3 col-lg-4 col-md-6 col-12"
                          >
                            <ProductCard18 data={record} />
                          </div>
                        ))}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 wrap-inner load-more text-center">
              <button
                onClick={handleLoadmore}
                id="loadmore"
                className="sc-button loadmore fl-button pri-3"
              >
                <span>Load More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
