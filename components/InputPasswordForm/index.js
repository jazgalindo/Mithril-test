import { useEffect, useState } from 'react'
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { regex, validationsData } from '../../utils/data'

const InputPasswordForm = ({
  name,
  validation = false,
  label,
  onChange,
  value,
}) => {
  const [propsValidation, setPropsValidation] = useState([])
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (validation && name) {
      if (!value) {
        setPropsValidation([{ helperText: 'Obligatory field' }])
      } else {
        if (regex[name] && regex[name].test(value)) {
          setPropsValidation({ error: false, helperText: 'Correct format' })
        } else {
          const validations = validationsData[name]
          const propsValidations = []
          validations.map((validation) => {
            const validationProp = { helperText: validation.helperText }
            validationProp.error = !regex[validation.regex].test(value)
            if (validationProp.error) {
              propsValidations.push(validationProp)
            }
          })
          setPropsValidation(propsValidations)
        }
      }
    }
  }, [validation, name, value])

  const handleClickShowContent = () => {
    setShowContent(!showContent)
  }

  const handleMouseDownContent = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl sx={{ m: 0, width: '100%' }} variant='standard'>
      <InputLabel>{label}</InputLabel>
      <Input
        type={showContent ? 'text' : 'password'}
        value={value}
        name={name}
        onChange={onChange}
        {...propsValidation.error}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              onClick={handleClickShowContent}
              onMouseDown={handleMouseDownContent}
            >
              {showContent ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      {propsValidation.length && (
        <>
          {propsValidation.map((validation, index) => (
            <p
              key={`${validation.helperText}-${index}`}
              className={`MuiFormHelperText-root 
          ${
            validation.error ? 'Mui-error' : ''
          } MuiFormHelperText-sizeSmall MuiFormHelperText-filled css-epion4-MuiFormHelperText-root`}
            >
              {validation.helperText}
            </p>
          ))}
        </>
      )}
    </FormControl>
  )
}

export default InputPasswordForm
