import { useState } from "react";

import { RawActivity } from "@/types/activity";
import { Message } from "@/types/message";
import { ask as askService } from "@/services/gpt";
import { GPT_SETUP } from "@/utils/constants";

import { useActivity } from "./useActivity";

const setup = (data: RawActivity[]): Message => ({
  role: "system",
  content: GPT_SETUP(data.map((w) => w.days)),
});

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { data } = useActivity();

  const append = (chunk: string) => {
    setMessages((arr) => {
      const last = arr[arr.length - 1];
      return [...arr.slice(0, -1), { ...last, content: last.content + chunk }];
    });
  };

  const ask = (prompt: string) => {
    const userMessage: Message = { role: "user", content: prompt };

    const newState =
      // TODO: remove null assertion
      messages.length === 0
        ? [setup(data!), userMessage]
        : [...messages, userMessage];

    // Append and empty state to show the streamed data
    setMessages([...newState, { role: "system", content: "" }]);

    askService(newState, (chunk) => {
      append(chunk);
    });
  };

  return { messages, ask };
};
