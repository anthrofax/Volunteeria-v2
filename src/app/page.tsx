import Jumbotron from "./ui/jumbotron";
import AchievementSection from "./ui/achievement-section";
import ContributionSection from "./ui/contribution-section";
import FaqSection from "./ui/faq-section";
import SupportSection from "./ui/support-section";
import TestimoniSection from "./ui/testimoni-section";

function page() {
  return (
    <div className="">
      <Jumbotron images={['/mainimage.png', '/mainimage2.jpeg', '/mainimage3.png']}/>
      <AchievementSection/>
      <ContributionSection/>
      <TestimoniSection/>
      <SupportSection/>
      <FaqSection/>
    </div>
  );
}

export default page;
