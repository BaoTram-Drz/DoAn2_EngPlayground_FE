import aboutround from "./mini-round.jpg"
import {PageContainer, BigContainer, BigDescription, SmallDescription, RoundedImage} from './About.styled'

function AboutPage() {
  return (
    <PageContainer>
      <RoundedImage bgImage={aboutround}/>  
      <BigContainer>
        <BigDescription>About Us - Best choice for you</BigDescription>
        <SmallDescription>
        Chào mừng bạn đến với trang web của chúng tôi, nơi bạn có thể học tiếng Anh thông qua những trò chơi đơn giản. Nền tảng của chúng tôi cung cấp những trò chơi hấp dẫn và tương tác được thiết kế để cải thiện từ vựng, ngữ pháp và kỹ năng hiểu. Dù bạn là người mới học hay người học nâng cao, những trò chơi của chúng tôi phù hợp với mọi cấp độ. Hãy bắt đầu học ngay hôm nay và tận hưởng niềm vui trong quá trình học!</SmallDescription>
      </BigContainer>
    </PageContainer>
  );
};

export default AboutPage;
