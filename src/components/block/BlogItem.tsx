import { useDetailCollection } from "@/apis/collection/queries";
import { blog, CollectionType } from "@/data/blog";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMemo } from "react";
import toast from "react-hot-toast";
import BlogCard1 from "../card/BlogCard1";

export default function BlogItem(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { data: collection } = useDetailCollection(Number(id), { enabled: !!id});

  const handleClick = useCallback(
    (item: CollectionType) => {
      if (collection?.type === "general" && item.type === "random") {
        toast.error(
          "You cannot create NFTs by randomization in this collection"
        );
      } else if (collection?.type === "random" && item.type === "custom") {
        toast.error("You cannot create NFTs by custom in this collection");
      } else {
        router.push(`${item.url}?id=${collection?.id}`);
      }
    },
    [collection?.type]
  );

  return (
    <>
      <div className="tf-section sc-card-blog dark-style2">
        <div className="ibthemes-container">
          <div className="row">
            {blog?.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <BlogCard1 data={item} onClick={() => handleClick(item)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
