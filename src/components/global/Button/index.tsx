import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  icon?: React.ReactNode;
  inverted?: boolean;
  iconOnly?: boolean;
}

const Button = ({
  onClick,
  children,
  icon,
  inverted,
  iconOnly,
}: ButtonProps) => {
  const buttonBaseClass = (inverted ?? false) ? styles.btn_inverter : styles.btn_default
  const buttonIconOnlyClass = (iconOnly ?? false) ? styles.btn_icon_only : ''
  const buttonRoundedClass = (iconOnly ?? false) ? styles.btn_rounded : ''

  const buttonClass = `${styles.btn} ${buttonRoundedClass} ${buttonBaseClass} ${buttonIconOnlyClass}`

  return (
    <button onClick={onClick} className={buttonClass}>
        {children}
      {icon !== undefined && <span style={{ marginRight: '8px' }}>{icon}</span>}
    </button>
  )
}

export default Button


