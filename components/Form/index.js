import { Box, Grid } from '@mui/material'
import styles from './styles.module.css'

/**
 * Form component
 * @param {Any} children
 */
const Form = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.form}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  )
}

export default Form
