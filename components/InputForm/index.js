import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { regex } from '../../utils/data'
import styles from './styles.module.css'

/**
 * InputForm
 * @param {String} name 
 * @param {Boolean} validation 
 * @param {String} label 
 * @param {String} placeholder 
 * @param {Function} onChange 
 * @param {Any} value 
 * @param {String} type 
 */
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
      variant='standard'
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
