import React from "react";
import { useHistory } from "react-router-dom";
import "../scss/Project.scss";

const Project = () => {
  return (
    <>
      <div className="projects-background">
        <div className="project-intro">PROJECTS</div>
        <div className="projects-top">
          <div className="project1">
            <div className="project-title">SWIMMY</div>
            <div className="project-explain">SFML로 만든 수영게임</div>
            <div className="project-subtitle">C++ 프로젝트 수행평가</div>
          </div>
          <div className="project2">
            <div className="project-title">SIGN UP</div>
            <div className="project-explain">
              학생과 관리자 버전의 수강신청 관리 프로그램
            </div>
            <div className="project-subtitle">JAVA 프로젝트 수행평가</div>
          </div>
          <div className="project3">
            <div className="project-title">Curl Fume</div>
            <div className="project-explain">
              선택형 테스트 향수 추천 프로그램
            </div>
            <div className="project-subtitle">IT SHOW 전시 작품</div>
          </div>
          <div className="project4">
            <div className="project-title">Eat Show</div>
            <div className="project-explain">
              부당 환불 요구, 배달료 감소 개선 배달 웹
            </div>
            <div className="project-subtitle">IT SHOW 전시 작품</div>
          </div>
        </div>
        <div className="projects-bottom">
          <div className="project5">
            <div className="project-title">snowman together</div>
            <div className="project-explain">
              취미 공유 및 활동 커뮤니티 서비스
            </div>
            <div className="project-subtitle">협업 프로젝트</div>
          </div>
          <div className="project6">
            <div className="project-title">portpolio</div>
            <div className="project-explain">포트폴리오</div>
            <div className="project-subtitle">포트폴리오</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
