import styled from 'styled-components';
import HomeBg from '../assets/images/home-background.png';
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommend from './Recommend';
import NewDisney from './NewDisney';
import Trending from './Trending';
import Originals from './Originals';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      let recommend = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];

      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend.push({ id: doc.id, ...doc.data() });
            break;
          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;
          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;
          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    };

    fetchMovies();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${HomeBg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
