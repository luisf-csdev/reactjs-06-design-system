import cssVariables from '@ignite-ui/tokens/css/_variables.css?raw'

import { parseDesignTokens } from './utils/parse-design-tokens'

export const tokens = parseDesignTokens(cssVariables)
