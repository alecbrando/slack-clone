import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

export type SidebarOptionsPropTypes = {
  title: string;
  Icon: any;
  addChannelOption?: boolean;
};

function SidebarOptions({
  title,
  Icon,
  addChannelOption,
}: SidebarOptionsPropTypes) {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionsContainer>
  );
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div``;
