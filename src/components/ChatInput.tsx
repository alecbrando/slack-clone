import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";
export type ChatInputPropTypes = {
  channelName: string;
  channelId: string;
  chatRef: any;
};

function ChatInput({ channelName, channelId, chatRef }: ChatInputPropTypes) {
  const [message, setMessage] = useState("");
  const sendMessage = (e: any) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      // @ts-ignore
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Alec",
      userImage:
        "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.6435-9/117339497_3581000808587429_4367855100768334768_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FKBPK_zkJfMAX8mpQue&_nc_ht=scontent.fphx1-2.fna&oh=73127c4cc8c5a663e7d385fcc4b77fe5&oe=609DDEC7",
    });
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setMessage("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
