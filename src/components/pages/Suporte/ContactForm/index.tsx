'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import styles from './styles.module.scss'
import { IconArrowDownContact, IconArrowRightSubmit } from '@/icons'

export interface FormData {
  subject: string;
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>()

  const initialState = {
    subject: false,
    name: false,
    email: false,
    message: false,
  }

  const [labelVisibility, setLabelVisibility] = useState(initialState)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const handleLabelClick = (fieldName: string) => {
    setLabelVisibility((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName as keyof typeof prevState],
    }))

  }

  return (
    <div className={styles.container}>
      <h5>A Mekal está sempre pronta para atendê-lo(a)</h5>
      <form onSubmit={
       () => onSubmit
      }>
        <div className={styles.input_container}>
          <label
            onClick={() => {
              handleLabelClick('subject')
            }}
            className={labelVisibility.subject ? styles.hiddenLabel : styles.visibleLabel}
          >
            Assunto
            <IconArrowDownContact />
          </label>
          
          <div
            className={labelVisibility.subject ? styles.visibleInput : styles.hiddenInput}
          >
            <span
              onClick={() => {
                handleLabelClick('subject')
              }}
            >
              Assunto
            </span>
          <input
            type="text"
            id="subject"
            placeholder='Digite o assunto'
            {...register('subject')}
            onBlur={() => {
              handleLabelClick('subject')
            }}
          />
          </div>
        </div>
        <div className={styles.input_container}>
          <label
            onClick={() => {
              handleLabelClick('name')
            }}
            className={labelVisibility.name ? styles.hiddenLabel : styles.visibleLabel}
          >
            Nome
            <IconArrowDownContact />
          </label>
          <div className={labelVisibility.name ? styles.visibleInput : styles.hiddenInput}>
            <span
              onClick={() => {
                handleLabelClick('name')
              }}
            >nome</span>
          <input
            type="text"
            id="name"
            placeholder='Digite seu nome'
            {...register('name')}
            onBlur={() => {
              handleLabelClick('name')
            }}
          />
          </div>
          
        </div>
        <div className={styles.input_container}>
          <label
            onClick={() => {
              handleLabelClick('email')
            }}
            className={labelVisibility.email ? styles.hiddenLabel : styles.visibleLabel}
          >
            E-mail
            <IconArrowDownContact />
          </label>
          <div className={labelVisibility.email ? styles.visibleInput : styles.hiddenInput}>
            <span
              onClick={() => {
                handleLabelClick('email')
              }}
            >email</span>
          <input
            type="email"
            id="email"
            placeholder='Digite seu e-mail'
            {...register('email')}
            onBlur={() => {
              handleLabelClick('email')
            }}
          />
          </div>
          
        </div>
        <div className={styles.input_container}>
          <label
            onClick={() => {
              handleLabelClick('message')
            }}
            className={labelVisibility.message ? styles.hiddenLabel : styles.visibleLabel}
          >
            Mensagem
            <IconArrowDownContact />
          </label>
          <div
            className={labelVisibility.message ? styles.visibleInput : styles.hiddenInput}
          >
            <span
              onClick={() => {
                handleLabelClick('message')
              }
              }
            >mensagem</span>
          <input
            id="message"
            type="text"
            placeholder='Digite sua mensagem'
            {...register('message')}
            onBlur={() => {
              handleLabelClick('message')
            }}
          />
          </div>
        </div>
        <button 
          type="submit"
          className={styles.submit_button}
          >Enviar Mensagem
        <IconArrowRightSubmit />
        </button>
      </form>
    </div>
  )
}