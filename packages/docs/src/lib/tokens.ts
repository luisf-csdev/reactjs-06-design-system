import cssVariables from '@ignite-ui/tokens/css/_variables?raw'

import { parseDesignTokens } from './utils/parse-design-tokens'

export const tokens = parseDesignTokens(cssVariables)
