import { Message } from "@/types/message";
import { GPT_API } from "@/utils/constants";

type OnMessage = (message: string) => void;
/**
 * Ask the GPT-4 model a question and parses the stream of messages
 * @param messages Messages to send to the GPT-4 model API
 * @param onMessage Action to perform when a message is received
 */
export const ask = async (messages: Message[], onMessage: OnMessage) => {
  const response = await fetch(GPT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  const reader = (response.body as ReadableStream)
    .pipeThrough(new TextDecoderStream())
    .getReader();

  // Start reading
  // @ts-expect-error - TS can't infer the correct return type for the processor function
  reader.read().then(function processor({ done, value }) {
    if (done) {
      console.log("Stream complete");
      return;
    }

    onMessage(value);

    // Continue reading some more until finishing
    return reader.read().then(processor);
  });
};
