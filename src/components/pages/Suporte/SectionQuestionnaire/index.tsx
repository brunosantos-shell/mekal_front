import React from "react"
import AccordionQuestion from "../AccordionQuestion"
import styles from "./styles.module.scss"

interface Question {
  question: string;
}

interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export default function SectionQuestionnaire({
  id,
  title,
  questions,
}: Section) {
  return (
    <div className={styles.section_questionnaire}>
      {questions.map((question, index) => (
        <AccordionQuestion key={index} question={question.question} />
      ))}
    </div>
  )
}
