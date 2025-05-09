export const queryToString = (params: Record<string, any>): string => {
  const queryArray: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) =>
          queryArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
        );
      } else {
        queryArray.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        );
      }
    }
  });

  return queryArray.length ? `?${queryArray.join("&")}` : "";
};
