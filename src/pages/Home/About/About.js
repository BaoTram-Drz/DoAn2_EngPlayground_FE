import aboutround from "./mini-round.jpg";
import {
  PageContainer,
  BigContainer,
  BigDescription,
  SmallDescription,
  RoundedImage,
} from "./About.styled";

function AboutPage() {
  return (
    <PageContainer>
      <RoundedImage bgImage={aboutround} />
      <BigContainer>
        <BigDescription>About Us - Best choice for you</BigDescription>
        <SmallDescription>
          Welcome to our website, where you can learn English through simple
          games. Our platform offers engaging and interactive games designed to
          improve vocabulary, grammar, and comprehension skills. Whether you are
          a beginner or an advanced learner, our games are suitable for all
          levels. Start learning today and enjoy the pleasure of learning!
        </SmallDescription>
      </BigContainer>
    </PageContainer>
  );
}

export default AboutPage;
