import {connect} from "react-redux";
import { NavbarLinksSection } from "./NavbarLinksSection";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

const mapStateToProps = (state) => {

    const navbarLinksData = state.navbarData.navLinks.map(item => <NavbarLinks link={item.link} title={item.title} key={item.id}/>);

    return {
        navbarLinksData
    };
};

const NavbarLinksSectionContainer = connect(mapStateToProps)(NavbarLinksSection);

export default NavbarLinksSectionContainer;