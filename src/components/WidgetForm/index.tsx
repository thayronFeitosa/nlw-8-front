import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../img/bug.svg";
import ideaImageUrl from "../../img/idea.svg";
import otherImageUrl from "../../img/other.svg";
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Image de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "image de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: otherImageUrl,
      alt: "Image de um balão de pensamento",
    },
  },
};

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedBackType(null);
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedBackType ? (
            <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedBackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
