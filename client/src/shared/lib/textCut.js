export const textCut = (text, maxSymbols) => {
    return text.length > maxSymbols ? text.slice(0, maxSymbols-3) + '...' : text
}
