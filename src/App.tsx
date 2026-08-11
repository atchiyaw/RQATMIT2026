import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PresentationPage from './pages/PresentationPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/presentation" element={<PresentationPage />} />
    </Routes>
  );
}
