
import BilowAbout  from '../Components/BilowAbout';
import WithSpeechBubbles from '../Components/Student'
import GridBlurredBackdrop from '../Components/Teachers'
import SmallWithLogoLeft from '../Components/Footer'
import CallToActionWithIllustration from '../Components/AboutTemplate'
const about = () => {
  return (
    <div>
     
     <CallToActionWithIllustration/>
      <WithSpeechBubbles/>
      <GridBlurredBackdrop/>
      <SmallWithLogoLeft/>
    </div>
  );
}

export default about;
