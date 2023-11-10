import { useListCustomized } from "@/apis/nft/queries";
import { product3 } from "@/data/product";
import Link from "next/link";
import ProductCard18 from "../card/ProductCard18";
import FilterSection from "../element/FilterSection";

export default function TodaysPicks({
  style,
}: {
  style?: string;
}): JSX.Element {
  const { data: dataNFTDraft } = useListCustomized({ type: "draft" });
  console.log("data", dataNFTDraft);
  return (
    <>
      <section className={`tf-section live-auctions mobie-pb-70 ${style}`}>
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2 className="tf-title pad-l-7">Today&apos;s NFTs</h2>
                <Link href="/explore-3" className="exp style2">
                  EXPLORE MORE
                </Link>
              </div>
            </div>
            <FilterSection />
            {dataNFTDraft?.data?.list.map((item: any) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <ProductCard18 data={item} />
              </div>
            ))}
            <div className="col-md-12 wrap-inner load-more text-center mg-t-4">
              <Link
                href="/explore-3"
                id="loadmore"
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
