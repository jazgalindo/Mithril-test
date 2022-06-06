import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { regex } from '../../utils/data'
import styles from './styles.module.css'

const InputForm = ({
  name,
  validation = false,
  label,
  placeholder,
  onChange,
  value,
  type,
}) => {
  const [propsValidation, setPropsValidation] = useState({})
  const helperTexts = {
    email: 'Check the email format',
    password:
      'The password must be 8 characters length that must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character within `!@#$%^&*_-~.,;:+=`',
  }
  useEffect(() => {
    if (validation && name) {
      if (!value) {
        setPropsValidation({ helperText: 'Obligatory field' })
      } else {
        if (regex[name] && regex[name].test(value)) {
          setPropsValidation({ error: false, helperText: 'Correct format' })
        } else {
          setPropsValidation({
            error: true,
            helperText: helperTexts[name]
              ? helperTexts[name]
              : 'Check the format',
          })
        }
      }
    }
  }, [validation, name, value])

  return (
    <TextField
      size='small'
      variant="standard" 
      className={styles.input}
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      {...propsValidation}
    />
  )
}

export default InputForm
