import styled from "styled-components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPages from "./pages/all-pages";
import MainHome from "./pages/home";
import Footer from "./components/Footer";
import QuestionPage from "./pages/question";
import Recruiter from "./pages/recruiter";

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<AllPages />}>
          <Route path="" element={<MainHome />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="*" element={<Footer />} />
        </Route>
      </Routes>
    </StyledApp>
  );
}

const StyledApp = styled.div``;

export default App;
