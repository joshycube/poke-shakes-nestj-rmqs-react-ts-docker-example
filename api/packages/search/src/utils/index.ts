export const sanitizeSearchParam = (param: string): string => param.replace(/[\W_]+/g, "").toLowerCase()
