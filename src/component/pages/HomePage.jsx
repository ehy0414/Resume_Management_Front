import React, { useEffect, useState } from 'react';
import '../../static/css/HomePage.css';

function HomePage() {
    const id = sessionStorage.getItem("userId");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!id) {
            setShowModal(true); // id가 없으면 모달 표시
        }
    }, [id]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {id ? (
                <div>로그인 됨</div>
            ) : (
                <>
                    {showModal && (
                        <>
                            <div className="modal-backdrop" onClick={handleCloseModal}></div>
                            <div className="modal" id="myModal" tabIndex="-1" style={{ display: 'block' }}>
                                <div className="modal-dialog modal-dialog-centered"> {/* 중앙 정렬 */}
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">로그인 후 이용가능합니다.</h5>
                                            
                                        </div>
                                        <div className="modal-body">
                                            <div className="d-flex align-items-center" style={{marginBottom:5}}>
                                                <label for="inputPassword5" class="form-label" style={{marginRight:40}}>아이디</label>
                                                <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" style={{width:'350px'}}/>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <label for="inputPassword5" class="form-label" style={{marginRight:28}}>비밀번호</label>
                                                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" style={{width:'350px'}}/>
                                            </div>
                                            <div style={{textAlign:'right', fontSize:'15px', color:'blue'}}>
                                                회원가입
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary">로그인</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default HomePage;
