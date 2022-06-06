import { Grid } from "@mui/material"
import styles from './styles.module.css'

/**
 * FormElement component
 * @param {Any} children
 * @param {Number} xs
 * @param {Number} md
 */
const FormElement = ({ children, xs = 12, md = 6 }) => {
  return (
    <Grid item className={styles.formElement} xs={xs} md={md}>
      {children}
    </Grid>
  );
};
export default FormElement;
