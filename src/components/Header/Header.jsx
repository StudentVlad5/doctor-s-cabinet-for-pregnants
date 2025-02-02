import {
  HeaderContainer,
  Link,
  Headline,
  HeaderSection,
  HeadLogo,
} from './Header.styled';
import logo from 'images/logo.png';

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Link to="/">
          <HeadLogo src={logo} aria-label="Logo" loading="lazy" />
        </Link>
        <Headline>
          SOS Emergency Connection
          <br />
          Алгоритм оказания помощи <br /> при преэклампсии и эклампсии
        </Headline>
      </HeaderContainer>
    </HeaderSection>
  );
};
