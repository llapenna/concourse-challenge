import { FormEventHandler, MouseEventHandler, useRef, useState } from "react";
import { XCircle, PaperPlaneRight } from "phosphor-react";

import { useChat } from "@/hooks/useChat";
import { Message } from "@/types/message";

import { chat, chatBubble } from "./styles";

interface ChatBubbleProps extends Message {}
export const ChatBubble = ({ role, content }: ChatBubbleProps) => {
  const classes = chatBubble({ role });
  return (
    <div className={classes.wrapper}>
      <div className={classes.role}>{role === "user" ? "Me" : "Concourse"}</div>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

interface Props {
  isOpen: boolean;
  close: MouseEventHandler;
}
export const Chatbox = ({ isOpen, close }: Props) => {
  const [messageInput, setMessageInput] = useState("");
  const { messages, ask } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);

  // Remove initial setup message
  const [, ...conversation] = messages;

  const onAIAsk: FormEventHandler = (e) => {
    e.preventDefault();
    if (!messageInput) return;

    setMessageInput("");
    ask(messageInput);
  };

  const classes = chat({ open: isOpen });

  return (
    <div className={classes.backdrop}>
      <div className={classes.wrapper}>
        <button className={classes.close} onClick={close}>
          <XCircle size={24}></XCircle>
        </button>
        <div className={classes.chat}>
          {conversation.map((msg) => (
            <ChatBubble key={msg.content} {...msg}></ChatBubble>
          ))}

          {/* TODO: add suggestion */}
        </div>
        <form onSubmit={onAIAsk} className={classes.form}>
          <input
            ref={inputRef}
            onChange={(e) => setMessageInput(e.target.value)}
            type="text"
            value={messageInput}
            placeholder="Try asking anything!"
          />
          <button>
            <PaperPlaneRight></PaperPlaneRight>
          </button>
        </form>
      </div>
    </div>
  );
};
