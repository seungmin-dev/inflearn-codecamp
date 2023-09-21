import styled from "@emotion/styled";
import { memo } from "react";

const LayoutFooter = (): JSX.Element => {
  const FooterWrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 285px;
    background-color: #f2f2f2;
  `;
  const Footer = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 50px 0;
  `;
  const FooterText = styled.h3`
    color: #828282;
  `;
  const SocialWrapper = styled.div`
    padding: 30px 0 20px;
    border-bottom: 2px solid #bdbdbd;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 40px;
  `;
  const SocialIcon = styled.img`
    margin-left: 10px;
    width: 32px;
  `;
  const Copyright = styled.p`
    color: #bdbdbd;
  `;
  return (
    <FooterWrapper>
      <Footer>
        <FooterText>FOOTER</FooterText>
        <SocialWrapper>
          <SocialIcon src="/images/social/facebook.png" />
          <SocialIcon src="/images/social/instagram.png" />
          <SocialIcon src="/images/social/youtube.png" />
        </SocialWrapper>
        <Copyright>@2021 codecamp notice board</Copyright>
      </Footer>
    </FooterWrapper>
  );
};
export default memo(LayoutFooter);
