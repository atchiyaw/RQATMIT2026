import { useNavigate } from 'react-router-dom';
import { PresentationViewer } from '../Presentation';
import { initialPresentationData } from '../presentationData';

export default function PresentationPage() {
  const navigate = useNavigate();

  return (
    <PresentationViewer
      slidesData={initialPresentationData}
      onClose={() => navigate('/')}
    />
  );
}
