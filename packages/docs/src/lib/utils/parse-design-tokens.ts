export type TokenSection = {
  [key: string]: string
}

export type DesignTokens = Record<string, TokenSection>

/**
 * Parses CSS custom properties from raw CSS content and organizes them by comment sections
 * @param cssContent - Raw CSS content as string
 * @returns Object containing organized design tokens with camelCase section names
 */
export function parseDesignTokens(cssContent: string): DesignTokens {
  const tokens: DesignTokens = {}

  // Extract the :root block content
  const rootBlockMatch = cssContent.match(/:root\s*\{([^}]+)\}/s)

  if (!rootBlockMatch) {
    console.warn('No :root block found in CSS content')
    return tokens
  }

  const rootContent = rootBlockMatch[1]

  // Split content by comment sections
  const sections = splitByCommentSections(rootContent)

  sections.forEach((section) => {
    if (section.sectionName && section.variables.length > 0) {
      const camelCaseName = toCamelCase(section.sectionName)
      tokens[camelCaseName] = {}

      section.variables.forEach((variable) => {
        const cleanKey = variable.property.replace(/^--/, '')
        tokens[camelCaseName][cleanKey] = variable.value
      })
    }
  })

  return tokens
}

/**
 * Splits the CSS content by comment sections
 */
function splitByCommentSections(content: string): Array<{
  sectionName: string | null
  variables: Array<{ property: string; value: string }>
}> {
  const sections: Array<{
    sectionName: string | null
    variables: Array<{ property: string; value: string }>
  }> = []

  // Split by comment blocks
  const parts = content.split(/\/\*([^*]+)\*\//)

  let currentSection: string | null = null

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim()

    if (i % 2 === 1) {
      // This is a comment content
      currentSection = part.trim()
    } else {
      // This is CSS content
      if (part) {
        const variables = extractVariablesFromContent(part)
        if (variables.length > 0) {
          sections.push({
            sectionName: currentSection,
            variables,
          })
        }
      }
    }
  }

  return sections
}

/**
 * Extracts CSS variables from a content string
 */
function extractVariablesFromContent(
  content: string,
): Array<{ property: string; value: string }> {
  const variables: Array<{ property: string; value: string }> = []
  const variableRegex = /--([^:]+):\s*([^;]+);/g
  let match

  while ((match = variableRegex.exec(content)) !== null) {
    const property = `--${match[1].trim()}`
    const value = match[2].trim()

    variables.push({ property, value })
  }

  return variables
}

/**
 * Converts a string to camelCase
 */
function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}
