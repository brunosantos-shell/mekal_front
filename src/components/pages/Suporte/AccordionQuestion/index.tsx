import { IconPlus, IconX } from "@/icons"
import { useState } from "react"
import styles from "./styles.module.scss"

interface QuestionProps {
  question: string;
}

export default function AccordionQuestion({ question }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`${styles.section_questionnaire__question} ${
        isOpen ? styles.opened : ""
      }`}
      onClick={toggleAccordion}
    >
      <div>
      <h4>{question}</h4>
      <button
        className={
          isOpen
            ? `${styles.section_questionnaire__question__button} ${styles.opened}`
            : styles.section_questionnaire__question__button
        }
      >
      {isOpen ? <IconX /> : <IconPlus />}
      </button>
      </div>
      
      
      {isOpen && (
        <div className={styles.question_content}>
          <p>Esta é uma resposta genérica à pergunta.</p>
        </div>
      )}
    </div>
  )
}
