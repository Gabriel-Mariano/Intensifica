import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
    export interface DefatulTheme extends Theme {}
}