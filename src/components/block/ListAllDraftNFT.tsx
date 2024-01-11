"use client";
import { useMetadataCollection } from "@/apis/collection/queries";
import {
  useFetchMoreListCustomized,
  useListCustomized,
} from "@/apis/nft/queries";
import { product1 } from "@/data/product";
import { useEffect, useMemo, useState } from "react";
import ProductCard18 from "../card/ProductCard18";
import DropDownFilter from "../dropdown/DropDownFilter";
import DropDownFilterType from "../dropdown/DropDownFilterType";

const tabs: string[] = ["All", "Art", "Music", "Collectibles", "Sports"];

interface ItemState {
  start: number;
  end: number;
}

export default function ListAllDraftNFT() {
  const [getItem, setItem] = useState<ItemState>({
    start: 0,
    end: 8,
  });
  const [params, setParams] = useState<{
    page: number;
    limit: number;
    type?: string;
    collectionKeyId?: number;
  }>({
    page: 1,
    limit: 8,
  });
  const {
    data: dataNFTDraft,
    fetchNextPage,
    refetch,
  } = useFetchMoreListCustomized(params);
  const { data: metadataCollection } = useMetadataCollection();

  const handleLoadmore = () => {
    fetchNextPage();
  };
  const listCollection = useMemo(() => {
    let dataDrop = [{ id: 0, name: "All Collection" }];
    metadataCollection?.map((item: any) => {
      dataDrop.push({ id: item.id, name: item.name });
    });
    return dataDrop;
  }, [metadataCollection]);
  const listType = [
    { type: "all", name: "All Type" },
    { type: "draft", name: "Draft" },
    { type: "minted", name: "Minted" },
  ];
  return (
    <>
      <div className="tf-section sc-explore-2">
        <div className="ibthemes-container">
          <div className="row">
            <div className="seclect-box style3">
              <DropDownFilter
                id="artworks"
                defaultSelect="All Collection"
                data={listCollection}
                setParams={setParams}
                params={params}
              />
              <DropDownFilterType
                id="sort-by"
                defaultSelect="All Type"
                data={listType}
                setParams={setParams}
                params={params}
              />
            </div>
            <div className="col-md-12">
              <div className="flat-tabs explore-tab">
                <div className="content-tab mg-t-40">
                  <div className="row">
                    {dataNFTDraft?.pages?.map((item: any) => (
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
