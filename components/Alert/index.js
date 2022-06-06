import { Box, Grid } from '@mui/material'
import { Colors } from '../../styles/colors'
import styles from './styles.module.css'

/**
 * Form component
 * @param {Any} children
 */
const Alert = ({ children, type = 'error' }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            background: ${type === 'error' ? Colors.wePeep : Colors.tara};
            color: ${type === 'error' ? Colors.tamarillo : Colors.everglade};
            font-size: 0.8rem;
            width: 100%;
            padding: 0.1rem;
            border-radius: 3px;
            margin: 0.2rem;
          }
        `}
      </style>
    </>
  )
}

export default Alert
