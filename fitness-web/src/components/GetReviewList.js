import './CommonStyle.css'
import DefaultImage from './DefaultImage';

// 찜한 형 리스트 페이지

const GetReviewList = ()=>{

    // 가상의 데이터 배열
    const dummydata = [
        { id:1, date: '2023.05.09', members: '오타쿠', profileImage: null},
        { id:2, date: '2023.05.09', members: '윤운동', profileImage: null},
    ]

    return (
        <div className="GetReviewList">

            <div className="titleAndBack">
                <h2>받은 후기 리스트</h2>
                <button>뒤로가기</button>
            </div>

            {/* 신청 내역 리스트 */}
            <div className="userList">
                <ul>
                    {dummydata.map((dummy) =>(
                        <li key={dummy.id}>
                             {/* 프로필 이미지 */}
                             {dummy.profileImage ? (
                                <img src={dummy.profileImage} alt="프로필 이미지" className="profileImage" />
                            ) : (
                                <DefaultImage />
                            )}

                            <div className="info">
                                {/* 날짜 */}
                                <p>{dummy.date}</p>

                                {/* 신청인 */}
                                <p className="detail">{dummy.members}</p>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GetReviewList;