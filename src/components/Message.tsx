import React from "react";
import styled from "styled-components";
import moment from "moment";
export type MessagePropTypes = {
  message: any;
  timestamp: any;
  user: any;
  userImage: any;
};

function Message({ message, timestamp, user, userImage }: MessagePropTypes) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{" "}
          <span>
            {moment(timestamp?.toDate()).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
  }
`;
const MessageInfo = styled.div`
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
