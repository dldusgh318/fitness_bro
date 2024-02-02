import './Favorites.css';
import './CommonStyle.css'
import DefaultImage from './DefaultImage';

// 찜한 형 리스트 페이지

const Favorites = ()=>{

    // 가상의 데이터 배열
    const dummydata = [
        { id:1, coaches: '강동원', address: '서울시 강남구', rating: '★4.5', profileImage: null},
        { id:2, coaches: '송 강', address: '서울시 강남구', rating: '★4.5', profileImage: null},
        { id:3, coaches: '마동석', address: '서울시 서초구', rating: '★4.5', profileImage: null},
        { id:4, coaches: '박신양', address: '서울시 마포구', rating: '★4.5', profileImage: null},
    ]

    return (
        <div className="Favorites">

            <div className="titleAndBack">
                <h2>찜한 형 리스트</h2>
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
                                {/* 이름/주소 */}
                                <p>{dummy.coaches} / {dummy.address}</p>

                                {/* 별점 */}
                                <p className="detail">{dummy.rating}</p>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Favorites;