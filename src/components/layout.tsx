import AppBar from '@mui/material/AppBar/AppBar'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import Typography from '@mui/material/Typography/Typography'
import { createTheme } from '@mui/system'
import React from 'react'

const theme = createTheme({})

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Company name
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Layout
