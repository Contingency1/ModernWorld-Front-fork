"use client";

import "../../style/globals.css";
import DataDisplay from "@/utils/DataDisplay";

export default function test() {
  return (
    <DataDisplay url="http://54.180.98.58:3000/inventory/users/1?theme=%EC%97%AC%EB%A6%84%20%ED%85%8C%EB%A7%88" />
  );
}
