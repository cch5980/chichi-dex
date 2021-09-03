import React, { useState } from "react";
import { prepare, request, getResult, getCardList } from "klip-sdk";
import QRCode from "qrcode.react";

const ServiceList = () => {
  const [url, setUrl] = useState("");
  const bappName = "chichi-app";
  const onClick = async () => {
    try {
      const res = await prepare.auth({ bappName });
      if (res.err) {
        // 에러 처리
      } else if (res.request_key) {
        // request_key 보관
        console.log(res);
        setUrl(
          `https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`
        );

        console.log("hello");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={onClick}>클립 연결</button>
      <QRCode value={url} />
    </div>
  );
};

export default ServiceList;
