import ItemForm from "@/components/ItemForm";
import ItemView from "@/components/ItemView";
import React from "react";

const RecoilPage = () => {
  return (
    <section>
      <ItemForm />
      <ItemView />
    </section>
  );
};

export default RecoilPage;

/* 
기본적인 recoil 사용법
셀렉터 사용법

추가예정 -> 비동기처리, atomEffect, 테스팅 
*/
