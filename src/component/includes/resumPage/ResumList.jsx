import React from "react";
import ResumeCard from "./ResumCard";

const ResumeList = (props) => {
  // 더미 데이터 배열
  // const resumes = [
  //   { id: 1, name: '홍길동', title: '프론트엔드 개발자', description: 'React와 JavaScript를 사용하여 웹 애플리케이션을 개발합니다.' },
  //   { id: 2, name: '김철수', title: '백엔드 개발자', description: 'Node.js와 Express를 사용하여 서버 API를 구축합니다.' },
  //   { id: 3, name: '이영희', title: 'UI/UX 디자이너', description: '사용자 경험을 고려한 디자인 작업을 합니다.' },
  //   { id: 4, name: '박영수', title: '데이터 분석가', description: '데이터를 분석하여 인사이트를 도출합니다.' },
  //   { id: 5, name: '최지혜', title: 'QA 엔지니어', description: '소프트웨어 품질 보증을 담당합니다.' },
  //   { id: 6, name: '이민호', title: 'DevOps 엔지니어', description: '개발과 운영을 통합하는 역할을 합니다.' },
  //   { id: 7, name: '김유진', title: '모바일 앱 개발자', description: 'iOS 및 Android 앱을 개발합니다.' },
  //   { id: 8, name: '정수빈', title: '시스템 관리자', description: '서버와 네트워크를 관리합니다.' },
  //   { id: 9, name: '한상우', title: '프로젝트 매니저', description: '프로젝트를 계획하고 관리합니다.' },
  //   { id: 10, name: '이소영', title: '프론트엔드 개발자', description: 'Vue.js와 CSS를 사용하여 웹 사이트를 개발합니다.' },
  // ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {props.data.map((resume) => (
        <ResumeCard
          key={resume.userId}
          name={resume.name}
          title={resume.title}
          content={resume.content}
          onViewResume={() => alert(`${resume.name}의 이력서 보기`)} // 이력서 보기 기능
          skill = {resume.skill}
          userId={resume.userId}
        />
      ))}
    </div>
  );
};

export default ResumeList;
