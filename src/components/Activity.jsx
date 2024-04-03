import React from "react";
import "../scss/Activity.scss";

const Activity = () => {
  return (
    <>
      <div className="activity">
        <div className="activity-background">
          <div className="activity-intro">ACTIVITIES</div>
          <div className="activities">
            <p>Meta Digital Wellness 프로그램</p>
            <p>2022년 6회 소프트웨어 챌린지</p>
            <p>NYPC - 넥슨 프로그래밍 경진대회</p>
            <p>2022 STAC (스마트 앱챌린지) - 아이디어 (엔터네이먼트)</p>
            <p>2023 직업계고 청년 창업아이디어 공모</p>
            <p>제 7회 소프트웨어챌린지 2023 예선</p>
            <p>2023 Woori 코딩 페스티벌 - 파이썬</p>
            <p>K-ICT 빅데이터센터의 분석인프라활용AI 교육</p>
            <p>2023 YEEP 스타트업 어드벤처</p>
          </div>
        </div>
        <div className="certificate-background">
          <div className="certificate-intro">CERTIFICATE</div>
          <div className="certificate">
            <p>MOS Excel 2016 Core</p>
            <p>MOS PowerPoint 2016</p>
            <p>COSPro 2급 (Python)</p>
            <p>ITQ 인터넷 A등급</p>
            <p>ITQ 아래한글 B등급</p>
          </div>
        </div>
        <div className="award-background">
          <div className="award-intro">AWARD</div>
          <div className="award">
            <p>2024년 모범학생표창(봉사상)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
