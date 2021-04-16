import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export type ChatInputPropTypes = {
  channelName: string;
  channelId: string;
};

function ChatInput({ channelName, channelId }: ChatInputPropTypes) {
  const sendMessage = () => {};
  return (
    <ChatInputContainer>
      <form>
        <input type="text" placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div``;
