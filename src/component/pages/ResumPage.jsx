import React, { useEffect, useState } from "react";
import ResumList from "../includes/resumPage/ResumList";
import api from "../api/axios";
import styled from "styled-components";

function ResumPage() {
  const [resume, setResume] = useState([]); // 전체 데이터
  const [searchTerm, setSearchTerm] = useState(""); // 검색어
  const [filteredResume, setFilteredResume] = useState([]); // 필터링된 데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 16; // 페이지당 아이템 수

  useEffect(() => {
    getResume();
  }, []);

  // 검색 필터링
  // useEffect(() => {
  //   const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //   const filtered = resume.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
  //       (Array.isArray(item.skill) &&
  //         item.skill.some((skill) =>
  //           skill.toLowerCase().includes(lowerCaseSearchTerm)
  //         ))
  //   );
  //   console.log(lowerCaseSearchTerm);
  //   console.log(filtered);
  //   setFilteredResume(filtered); // 필터링된 데이터 저장
  //   setCurrentPage(1); // 검색 시 첫 페이지로 리셋
  // }, [searchTerm, resume]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = resume.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      (item.skill && item.skill.toLowerCase().includes(lowerCaseSearchTerm)) // skill이 문자열인 경우
    );
    
    console.log(lowerCaseSearchTerm);
    console.log(filtered);
    setFilteredResume(filtered); // 필터링된 데이터 저장
    setCurrentPage(1); // 검색 시 첫 페이지로 리셋
  }, [searchTerm, resume]);

  const getResume = async () => {
    try {
      const response = await api.get("resume/index");
      setResume(response.data); // 전체 데이터
      console.log(response.data)
      setFilteredResume(response.data); // 초기에는 필터링 없이 전체 데이터
    } catch (err) {
      console.log(err);
    }
  };

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResume.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // 페이지 변경 시 맨 위로 스크롤
  };

  // 페이지 번호 계산
  const totalPages = Math.ceil(filteredResume.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


  return (
    <Wrapper>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/videos/video2.mp4" type="video/mp4" />
      </BackgroundVideo>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="이름 또는 기술스택을 검색하세요..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <ResumList data={currentItems} />
      <Pagination>
        {pageNumbers.map((number) => (
          <PageNumber
            key={number}
            onClick={() => paginate(number)}
            isActive={number === currentPage}
          >
            {number}
          </PageNumber>
        ))}
      </Pagination>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 50px 150px;
  background-color: #f4f4f4;
  z-index: 1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 60%;
  max-width: 600px;
  padding: 14px 20px;
  font-size: 16px;
  border: 2px solid #0066ff;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #fff;
  color: #333;

  &:focus {
    border-color: #0044cc;
    box-shadow: 0 0 10px rgba(0, 68, 204, 0.4);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
`;

const PageNumber = styled.button`
  padding: 5px 15px;
  font-size: 18px;
  color: ${(props) => (props.isActive ? "#fff" : "#0066ff")};
  background-color: ${(props) => (props.isActive ? "#0066ff" : "#fff")};
  border: 1px solid #0066ff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056d4;
    color: #fff;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export default ResumPage;
