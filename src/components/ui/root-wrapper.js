import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import FontStyles from './fontStyles'
import theme from './theme'

export default ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <FontStyles/>
                {element}
        </ThemeProvider>
    )
}