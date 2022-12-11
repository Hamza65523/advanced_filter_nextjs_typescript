import React from "react";
import Image from "next/image";
import ListItems from "../ListItems/index";
import { NextPage } from "next";
interface Props {
  list: any;
}
const index: NextPage<Props> = ({ list }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((item: any) => (
        <ListItems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default index;
