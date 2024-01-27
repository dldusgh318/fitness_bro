import './App.css';
import MyPage from './pages/MyPage.jsx';
import Registration from './pages/Registration.jsx';
import WriteReview from './pages/WriteReview.jsx';
import ApplicationHistory from './pages/ApplicationHistory.jsx';
import Checked from './pages/Checked.jsx';
import Find from './pages/Find.jsx';
import ModifyingInformation from './pages/ModifyingInformation.jsx';
import Header from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './pages/Profile.jsx';
import LookReviews from './pages/LookReviews.jsx';
import Photos from './pages/Photos.jsx';
import SearchPage from './pages/SearchPage'; 
import Main from './pages/Main';
import Reviews from './components2/Reviews';
import MyCoaches from './components2/MyCoaches';
import Favorites from './components2/Favorites';
import ReviewList from './components2/ReviewList';
import GetReviewList from './components2/GetReviewList';
import MyMembers from './components2/MyMembers';
import BottomHeader from "./components/BottomHeader";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Find" element={<Find />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/WriteReview" element={<WriteReview />} />
          <Route path="/ApplicationHistory" element={<ApplicationHistory/>} />
          <Route path="/Checked" element={<Checked/>} />
          <Route path="/ModifyingInformation" element={<ModifyingInformation/>} />
          <Route path="/" element={<Profile />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/lookreviews" element={<LookReviews />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/" element={<Main />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/my-coaches" element={<MyCoaches />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/review-list" element={<ReviewList />} />
          <Route path="/get-review-list" element={<GetReviewList />} />
          <Route path="/my-members" element={<MyMembers />} />
        </Routes>
      </div>
      </BrowserRouter>
      
      <BottomHeader />
    </div>
  );
}

export default App;