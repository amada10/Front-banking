import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Container, Row, Col } from 'react-bootstrap';

import {BsCreditCard} from "react-icons/bs";
import { MdPayment, MdOutlineContactMail, MdOutlineSettings } from "react-icons/md";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine, RiAccountCircleLine } from "react-icons/ri";


import "react-pro-sidebar/dist/css/styles.css";
import "../../assets/css/IndexNavBar.css";


const IndexNavBar = () => {
  
    const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Container>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "Bank" : "Klamma banking"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Overview
              </MenuItem>
              <MenuItem icon={<BsCreditCard />}>Cards</MenuItem>
              <MenuItem icon={<MdPayment />}>Payments</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Repots</MenuItem>
              <MenuItem icon={<MdOutlineContactMail />}>Contacts</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<MdOutlineSettings />}>Settings</MenuItem>
              <MenuItem icon={<RiAccountCircleLine />}>Account</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </Container>
  );
};

export default IndexNavBar;