"use client";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  id?: string;
  defaultSelect: string;
  data: any[];
  setParams: Dispatch<
    SetStateAction<{
      page: number;
      limit: number;
      type?: string;
      collectionKeyId?: number;
    }>
  >;
  params: {
    page: number;
    limit: number;
    type?: string;
    collectionKeyId?: number;
  };
}

const DropDownFilterType = (props: Props) => {
  const { id, defaultSelect, data, setParams, params } = props;
  const [getCurrentSelect, setCurrentSelect] = useState<string>(defaultSelect);
  const [isHover, setHover] = useState<boolean>(false);

  const dropdownHoverHandler = () => {
    setHover(true);
  };
  const dropdownLeaveHandler = () => {
    setHover(false);
  };
  const selectHandler = (select: string) => {
    setCurrentSelect(select);
    setHover(false);
  };
  return (
    <>
      <div id={id} className="dropdown" onMouseLeave={dropdownLeaveHandler}>
        <a
          onMouseOver={dropdownHoverHandler}
          className="btn-selector nolink"
          style={{ width: "150px" }}
        >
          {getCurrentSelect}
        </a>
        <ul
          className={isHover ? "show" : ""}
          style={
            !isHover ? { visibility: "hidden" } : { visibility: "visible" }
          }
        >
          {data.map((item, index) => (
            <li
              onClick={() => {
                selectHandler(item.name);
                if (item.name === "All Type") {
                  if (params.collectionKeyId === 0) {
                    setParams({ page: params.page, limit: params.limit });
                  } else {
                    setParams({
                      page: params.page,
                      limit: params.limit,
                      collectionKeyId: params.collectionKeyId,
                    });
                  }
                } else {
                  setParams({ ...params, type: item.type });
                }
              }}
              key={index}
              className={item.name === getCurrentSelect ? "active" : ""}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropDownFilterType;
