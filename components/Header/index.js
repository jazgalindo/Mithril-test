import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { siteTitle } from '../../utils/constans'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {siteTitle}
          </Typography>
          <Button href='/login' color='inherit'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
