import cssVariables from '@luisf-ignite-ui/tokens/css/_variables?raw'

import { parseDesignTokens } from './utils/parse-design-tokens'

export const tokens = parseDesignTokens(cssVariables)
