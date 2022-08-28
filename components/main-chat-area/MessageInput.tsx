import React, { FC, useEffect, useState, FormEvent, Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdSend } from "react-icons/md";
import MessageI from "../../types/MessageI";

interface IFormInput {
   messageInput: string;
}

const MessageInput: FC<{
   setMessages: Dispatch<SetStateAction<MessageI[]>>;
   messages: MessageI[];
}> = ({ setMessages, messages }) => {
   const { register, handleSubmit, reset, watch } = useForm<IFormInput>();

   const onFormSubmit: SubmitHandler<IFormInput> = data => {
      setMessages([
         ...messages,
         {
            content: data.messageInput,
            authorId: Math.random().toString(),
            messageId: Math.random().toString(),
         },
      ]);

      reset();
   };

   const formInputMaxLength = 300;
   const currentInputLength = watch("messageInput")?.length;
   const formInputValidationSchema = register("messageInput", {
      required: true,
      maxLength: formInputMaxLength,
   });
   return (
      <div className="p-3 bg-base-200">
         <form
            onSubmit={handleSubmit(onFormSubmit)}
            aria-label="Message input form"
            className="flex items-center justify-center"
         >
            <div className="flex w-full flex-col">
               <input
                  id="message-input"
                  className="input resize-none form-control w-full"
                  placeholder="Send a message"
                  autoComplete="off"
                  {...formInputValidationSchema}
               />
               <p
                  aria-label={`Current message length: ${
                     currentInputLength ?? 0
                  } out of maximum of ${formInputMaxLength}`}
                  className={`self-end text-xs mt-1 ${
                     currentInputLength > formInputMaxLength ? "text-red-500" : ""
                  }`}
               >
                  {currentInputLength ?? 0}/{formInputMaxLength}
               </p>
            </div>
            <button className="btn rounded ml-2">
               <MdSend />
            </button>
         </form>
      </div>
   );
};
export default MessageInput;
