export function getFunctionParameters(func: Function): string[] {
    const matches = func.toString().match(/^[A-z]+\(([A-z, ]+)\)/);
    if (!matches) return [];
    return matches[1].split(",").map(p => p.trim());
}
