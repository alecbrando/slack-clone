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
  console.log(user);
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

const MessageContainer = styled.div``;
const MessageInfo = styled.div``;
