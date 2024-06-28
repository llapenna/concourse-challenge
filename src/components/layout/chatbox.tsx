import { FormEventHandler, MouseEventHandler, useRef, useState } from "react";
import { XCircle, PaperPlaneRight } from "phosphor-react";

import { useChat } from "@/hooks/useChat";
import { Message } from "@/types/message";
import { GPT_SUGGESTIONS } from "@/utils/constants";

import { chat, chatBubble, suggestion } from "./styles";

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

interface SuggestionProps {
  content: string;
  onClick: () => void;
}
export const Suggestion = ({ content, onClick }: SuggestionProps) => {
  return (
    <button onClick={onClick} className={suggestion()}>
      {content}
    </button>
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

  const onSuggestionClick = (suggestion: string) => {
    ask(suggestion);
  };

  const classes = chat({ open: isOpen });

  return (
    <div className={classes.backdrop}>
      <div className={classes.wrapper}>
        <button className={classes.close} onClick={close}>
          <XCircle size={24}></XCircle>
        </button>
        {/* TODO: add suggestion */}
        {conversation.length === 0 && (
          <div className={classes.suggestions}>
            {GPT_SUGGESTIONS.map((suggestion) => (
              <Suggestion
                key={suggestion}
                content={suggestion}
                onClick={() => onSuggestionClick(suggestion)}
              ></Suggestion>
            ))}
          </div>
        )}

        {!!conversation.length && (
          <div className={classes.chat}>
            {conversation.map((msg) => (
              <ChatBubble key={msg.content} {...msg}></ChatBubble>
            ))}
          </div>
        )}
        <div></div>
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
