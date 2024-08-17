import { useLocation } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { RiMenuAddFill } from "react-icons/ri";

import {
  SideBarContainer,
  Li,
  Span,
  StyledLink,
  ContactUs,
  ContactUsImg,
  Img,
  P,
} from "./SideBarStyles";

const SideBarItems = [
  { id: "1", ItemName: "Home", ItemIcon: "home" },
  { id: "2", ItemName: "Trending", ItemIcon: "trending" },
  { id: "3", ItemName: "Gaming", ItemIcon: "gaming" },
  { id: "4", ItemName: "Saved videos", ItemIcon: "saved-videos" },
];

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;

  const getIcon = (value, color) => {
    switch (value) {
      case "home":
        return <IoMdHome color={color} />;
      case "trending":
        return <FaFire color={color} />;
      case "gaming":
        return <SiYoutubegaming color={color} />;
      case "saved-videos":
        return <RiMenuAddFill color={color} />;
      default:
        return null;
    }
  };

  return (
    <SideBarContainer>
      {SideBarItems.map((item) => (
        <StyledLink to={item.ItemIcon === "home" ? "/" : `/${item.ItemIcon}`}>
          <Li
            key={item.id}
            isActive={
              item.ItemIcon === "home"
                ? pathname === "/"
                : pathname === `/${item.ItemIcon}`
            }
          >
            <Span>
              {getIcon(item.ItemIcon)} <p>{item.ItemName}</p>
            </Span>
          </Li>
        </StyledLink>
      ))}

      <ContactUs>
        <p>CONTACT US</p>
        <ContactUsImg>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />

          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />

          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactUsImg>

        <P>Enjoy! Now to see your channels and recommendations!</P>
      </ContactUs>
    </SideBarContainer>
  );
};

export default SideBar;
