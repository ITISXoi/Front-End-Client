"use client";
import {
  useDetailCollection,
  useListImageByLayerId,
  useListLayers,
} from "@/apis/collection/queries";
import { ILayer } from "@/apis/collection/types";
import axios from "axios";
import * as Bs64 from "base64-arraybuffer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ProductCard6 from "../card/ProductCard6";
import FormWrapper from "../formprovider";
import { toPng } from "html-to-image";
import BigNumber from "bignumber.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  createNFT,
  draftNFT,
  generateNFT,
  updateDraftNFT,
} from "@/apis/nft/request";
import { COOKIES, getCookies } from "@/libs/cookies";
import { useMutation } from "react-query";
import { DataURIToBlob, convertToFormData } from "@/utils/common";
import { useDetailDraftNFT } from "@/apis/nft/queries";
import { SMART_CONTRACT_ADDRESS } from "@/utils/constants";
import ABIJSON from "@/contracts/ABI.json";
import { useGetNextToken } from "@/hooks/useGetNextToken";
import { useAccount } from "wagmi";
import { useNFTContract } from "@/hooks/useNFTContract";

const tabs = ["ALL", "ART", "MUSIC", "COLLECTIBLES", "SPORTS"];

interface IDesign {
  indexLayer: number;
  url: string;
  base64: any;
  id: number;
}

interface FormValues {
  name: string;
  description: string;
  remark: string;
  tag: string;
}

export default function CustomNFT(): JSX.Element {
  const ref = useRef<any>();
  const router = useRouter();
  const { id, draftId } = router.query;
  const [getCurrentTab, setCurrentTab] = useState<Number>(-1);
  const [isFullLoading, setFullLoading] = useState(false);
  const { data } = useDetailCollection(Number(id), { enabled: !!id });
  const [src, setSrc] = useState("");
  const { data: listLayer } = useListLayers(Number(id), { enabled: !!id });
  const [price, setPrice] = useState<any>({});
  const { data: draftInfo } = useDetailDraftNFT(String(draftId), {
    enabled: !!draftId,
  });
  const [layerId, setLayerId] = useState(-1);
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(256).required("Name field requrired!"),
    description: Yup.string().max(256).required("Description field required!"),
    remark: Yup.string().max(256).required("Remark field required!"),
    tag: Yup.string().max(256).required("Tag field required!"),
  });
  const nextTokenId = useGetNextToken(
    String(data?.collectionId),
    SMART_CONTRACT_ADDRESS,
    ABIJSON,
    97
  );
  console.log(nextTokenId, "nextTokenId");
  
  const { data: listImageLayer } = useListImageByLayerId(
    Number(getCurrentTab),
    { enabled: getCurrentTab !== -1 }
  );
  const startDate = new Date(Number(data?.startMintTime));
  const endDate = new Date(Number(data?.endMintTime));
  const timeStamp = new Date().getTime();
  const nowDate = new Date(timeStamp);
  const [initData, setInitData] = useState<IDesign[]>([]);
  const [imagesIds, setImageIds] = useState<string>();
  const myContract = useNFTContract(SMART_CONTRACT_ADDRESS) as any;
  const { address } = useAccount();

  const handleChooseLayer = (data: number) => {
    setLayerId(data);
  };
  const handleSelectImage = async (item: any) => {
    if (item.remainingQuantity === 0) {
      toast.error("This image out of quantity");
      return;
    }
    const { layerId, imageUrl, id, price: layerPrice } = item;
    const currentPrice: any = price;
    currentPrice[layerId] = layerPrice;
    if (initData.find((item) => item.indexLayer === layerId)) {
      const i = initData.findIndex((item) => item.indexLayer === layerId);
      if (initData[i].url === imageUrl) {
        setInitData([...initData.slice(0, i), ...initData.slice(i + 1)]);
        currentPrice[layerId] = 0;
        return;
      }
    }
    setPrice(currentPrice);
    // const { data } = await getImageFromServer({ url: imageUrl });
    const { data } = await axios.get(imageUrl + "?cacheblock=true", {
      responseType: "arraybuffer",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    const temp = `data:image/jpg;base64,${Bs64.encode(data)}`;

    if (initData.find((item) => item.indexLayer === layerId)) {
      const i = initData.findIndex((item) => item.indexLayer === layerId);
      await setInitData([
        ...initData.slice(0, i),
        { ...initData[i], url: imageUrl, base64: temp, id: id },
        ...initData.slice(i + 1),
      ]);
      // initData[i].url = url;
    } else
      await setInitData([
        ...initData,
        { indexLayer: layerId, url: imageUrl, base64: temp, id: id },
      ]);
  };
  const [click, setClick] = useState(false);
  const onclick = () => {
    setClick(true);
  };
  useEffect(() => {
    const imgIds = initData?.map((item) => {
      return item?.id;
    });
    setImageIds(imgIds.toString());

    const gen64 = async () => {
      const uri = await toPng(ref.current);
      setSrc(uri);
    };
    gen64().catch(() => {
      console.error("error");
    });
  }, [initData]);
  
  const priceNft: number = Object.values(price).reduce(
    (prev, current) => new BigNumber(Number(prev)).plus(Number(current)),
    0
  ) as number;
  
  const handleRandomNFT = async () => {
    const images: IDesign[] = [];
    const updateInitData = async () => {
      const dataGenerate = await generateNFT(Number(id));
      for (let i = 0; i < dataGenerate.length; i++) {
        const { data } = (await axios.get(
          dataGenerate[i].imageUrl + "?cacheblock=true",
          {
            responseType: "arraybuffer",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )) as any;
        const temp = `data:image/jpg;base64,${Bs64.encode(data)}`;
        images.push({
          indexLayer: Number(dataGenerate[i]?.layerId),
          url: dataGenerate[i]?.imageUrl,
          base64: temp,
          id: dataGenerate[i]?.id,
        });
        const tempPrice: any = {};
        dataGenerate.forEach((item) => {
          tempPrice[item.layerId] = item.price;
        });
        setPrice(tempPrice);
      }
    };
    updateInitData().then(() => {
      setInitData(images);
    });
  };

  useEffect(() => {
    methods.reset({
      name: draftInfo?.name,
      description: draftInfo?.description,
      remark: draftInfo?.note,
      tag: draftInfo?.slug,
    });
    const images: IDesign[] = [];
    const updateInitData = async () => {
      if (draftInfo && draftInfo.images) {
        // eslint-disable-next-line array-callback-return
        for (let i = 0; i < draftInfo.images.length; i++) {
          const { data } = (await axios.get(
            draftInfo.images[i].imageUrl + "?cacheblock=true",
            {
              responseType: "arraybuffer",
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )) as any;
          const temp = `data:image/jpg;base64,${Bs64.encode(data)}`;
          images.push({
            indexLayer: Number(draftInfo.images[i]?.layerId),
            url: draftInfo.images[i]?.imageUrl,
            base64: temp,
            id: draftInfo.images[i]?.id,
          });
          const tempPrice: any = {};
          draftInfo.images.forEach((item) => {
            tempPrice[item.layerId] = item.price;
          });
          setPrice(tempPrice);
        }
      }
    };
    updateInitData().then(() => {
      setInitData(images);
    });
  }, [draftInfo]);

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  useEffect(() => {
    if (listLayer && listLayer?.list?.length > 0) {
      setCurrentTab(listLayer?.list[0].id);
    }
  }, [listLayer]);
  const tabHandler = (item: ILayer) => {
    setCurrentTab(item.id);
  };

  const { mutate: mutateDraftNFT, status: statusDraftNFT } = useMutation(
    draftNFT,
    {
      onSuccess: (data) => {
        toast.success("Draft success!");
        setFullLoading(false);
        router.push(`detail-nft?id=${data?.id}`);
      },
      onError: (error: any) => {
        toast.error(error?.meta?.message || "Create Draft NFT failed");
        setFullLoading(false);
      },
    }
  );
  const { mutate: mutateUpdateDraftNFT, status: statusUpdateDraftNFT } =
    useMutation(updateDraftNFT, {
      onSuccess: (data) => {
        toast.success("Draft success!");
        setFullLoading(false);
        router.push(`detail-nft?id=${data?.id}`);
      },
      onError: (error: any) => {
        toast.error(error?.meta?.message || "Update Draft NFT failed");
        setFullLoading(false);
      },
    });
  const { mutate: mutateCreateNFT, status: statusCreateNFT } = useMutation(
    createNFT,
    {
      onSuccess: (data) => {
        (async () => {
          if (!myContract) return;
          console.log(price, 'price');
          
          // fake 0
          // const bigNumber = new BigNumber(price || 0).multipliedBy(10 ** 4);
          const bigNumber = new BigNumber(priceNft || 0).multipliedBy(10 ** 4);
          // const txread = await myContract.collections(collectionId);
          // console.log(txread)
          // const price = formatUnits(txread.price, 0);
          try {

            const tx = await myContract?.mintNFT(
              data.collectionId,
              `${data.url_ipfs.toString()}.json`,
              `${Math.round(Number(bigNumber.valueOf()))}`,
              data.hashUniqueNft,
              data.signature,
              {
                gasLimit: 3000000,
                value: `${Math.round(Number(bigNumber.valueOf()))}`,
              }
            );
            myContract.on('NFTMinted', async (collectionId, collectionAddress, receiver, uri, tokenId, royaltyFee) => {
              await tx?.wait(2);
              // setLoading(false);
              toast.success("Mint NFT successfully!");
              router.push(`/nft/${data?.id}`);
            });
            // console.log(tx);
          } catch (error) {
            // setLoading(false);
            toast.error("Mint failed!");
            console.log(error);
            setFullLoading(false);
          }
        })();
      },
      onError: (error: any) => {
        console.log("error", error);
        toast.error(error?.meta?.message || "Create NFT failed");
        // setLoading(false);
        setFullLoading(false);
      },
    }
  );

  const handleCreateNFT = () => {
    if (getCookies(COOKIES.accessToken) === null) {
      toast.error("You must be to login first!");
      return;
    }
    setFullLoading(true);
    mutateCreateNFT(
      convertToFormData({
        name: methods.getValues("name"),
        description: methods.getValues("description"),
        note: methods.getValues("remark"),
        slug: methods.getValues("tag"),
        collectionName: "",
        properties: "",
        price: new BigNumber(priceNft).valueOf(),
        collectionId: data?.collectionId,
        images: DataURIToBlob(src),
        imageIds: `[${imagesIds}]`,
        chainId: 97,
        nextTokenId: nextTokenId,
        wallet: address,
      })
    );
  };

  const handleCreateDraft = () => {
    if (getCookies(COOKIES.accessToken) === null) {
      toast.error("You must be to login first!");
      return;
    }
    setFullLoading(true);
    mutateDraftNFT(
      convertToFormData({
        name: methods.getValues("name"),
        description: methods.getValues("description"),
        note: methods.getValues("remark"),
        slug: methods.getValues("tag"),
        collectionName: "",
        properties: "",
        price: new BigNumber(priceNft).valueOf(),
        collectionId: id,
        images: DataURIToBlob(src),
        imageIds: `[${imagesIds}]`,
      })
    );
  };
  const handleUpdateDraft = async () => {
    setFullLoading(true);
    const params = {
      id: Number(draftInfo?.id),
      data: convertToFormData({
        name: methods.getValues("name"),
        description: methods.getValues("description"),
        note: methods.getValues("remark"),
        slug: methods.getValues("tag"),
        collectionName: "",
        properties: "",
        price: new BigNumber(priceNft).valueOf(),
        collectionId: id,
        images: DataURIToBlob(src),
        imageIds: `[${imagesIds}]`,
      }),
    };
    mutateUpdateDraftNFT(params);
  };
  if (!data) {
    return <></>;
  }
  return (
    <>
      <section className="tf-section authors">
        <div
          className="ibthemes-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            {nowDate > endDate && <h3>{"Out of time can create NFT"}</h3>}
            {nowDate < startDate && (
              <h3>
                {
                  "The time to create NFT hasn't come yet, but you can still create a draft"
                }
              </h3>
            )}
          </div>

          <div className="flat-tabs tab-authors" style={{ width: "100%" }}>
            <div className="author-profile flex">
              <div
                ref={ref}
                className="feature-profile"
                style={{
                  border: "1px solid #ffffff",
                }}
              >
                {initData?.map((item, index) => (
                  <img
                    src={`${item.base64}`}
                    style={{
                      position: "absolute",
                      zIndex: item.indexLayer,
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                    }}
                    key={index}
                  ></img>
                ))}
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                <div className="form-upload-profile">
                  <FormWrapper methods={methods} onSubmit={handleCreateNFT}>
                    <div className="form-infor-profile">
                      <div className="info-account">
                        <fieldset>
                          <h4 className="title-infor-account">Name</h4>
                          <input
                            style={{ color: "white", borderColor: "white" }}
                            type="text"
                            {...methods.register("name")}
                            required
                          />
                          {methods?.formState?.errors?.name?.message && (
                            <div
                              className="title-infor-account"
                              style={{
                                color: "#EA3F30",
                                marginTop: "5px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  methods?.formState?.errors?.name?.message ||
                                  "Error",
                              }}
                            />
                          )}
                        </fieldset>
                        <fieldset>
                          <h4 className="title-infor-account">Remark</h4>
                          <input
                            style={{ color: "white", borderColor: "white" }}
                            type="text"
                            {...methods.register("remark")}
                            required
                          />
                          {methods?.formState?.errors?.remark?.message && (
                            <div
                              className="title-infor-account"
                              style={{
                                color: "#EA3F30",
                                marginTop: "5px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  methods?.formState?.errors?.remark?.message ||
                                  "Error",
                              }}
                            />
                          )}
                        </fieldset>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <h5>
                            Price: {new BigNumber(priceNft).valueOf()} MATIC
                          </h5>
                        </div>
                      </div>
                      <div className="info-account">
                        <fieldset>
                          <h4 className="title-infor-account">Description</h4>
                          <input
                            style={{ color: "white", borderColor: "white" }}
                            type="text"
                            {...methods.register("description")}
                            required
                          />
                          {methods?.formState?.errors?.description?.message && (
                            <div
                              className="title-infor-account"
                              style={{
                                color: "#EA3F30",
                                marginTop: "5px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  methods?.formState?.errors?.description
                                    ?.message || "Error",
                              }}
                            />
                          )}
                        </fieldset>
                        <fieldset>
                          <h4 className="title-infor-account">Tag</h4>
                          <input
                            style={{ color: "white", borderColor: "white" }}
                            type="text"
                            {...methods.register("tag")}
                            required
                          />
                          {methods?.formState?.errors?.tag?.message && (
                            <div
                              className="title-infor-account"
                              style={{
                                color: "#EA3F30",
                                marginTop: "5px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  methods?.formState?.errors?.tag?.message ||
                                  "Error",
                              }}
                            />
                          )}
                        </fieldset>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: "20px",
                      }}
                    >
                      <button
                        disabled={nowDate > endDate || nowDate < startDate}
                        type="submit"
                        className={`sc-button ${
                          nowDate > endDate || nowDate < startDate
                            ? " "
                            : "fl-button"
                        } pri-3 cursor-pointer`}
                      >
                        <span>Create New NFT</span>
                      </button>

                      {draftInfo?.id ? (
                        <button
                          type="button"
                          disabled={nowDate > endDate}
                          className={`sc-button ${
                            nowDate > endDate ? " " : "fl-button"
                          } pri-3 cursor-pointer`}
                          onClick={handleUpdateDraft}
                        >
                          <span>Update Draft</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={nowDate > endDate}
                          className={`sc-button ${
                            nowDate > endDate ? " " : "fl-button"
                          } pri-3 cursor-pointer`}
                          onClick={handleCreateDraft}
                        >
                          <span>Draft NFT</span>
                        </button>
                      )}
                    </div>
                  </FormWrapper>
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
                    <ProductCard6
                      data={item}
                      handeClickItem={() => handleSelectImage(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="col-md-12 wrap-inner load-more text-center">
              <Link
                href="/authors-2"
                className="sc-button loadmore fl-button pri-3"
              >
                <span>Load More</span>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
