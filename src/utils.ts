export function toQueryString(queryParams: { [key: string]: string | string[] } = {}) {
    const parts: string[] = [];
    for (const key in queryParams) {
      if (Array.isArray(queryParams[key])) {
        parts.push(
          ...(queryParams[key] as string[]).map((value) => `${key}=${value}`),
        );
      } else if (queryParams[key] !== undefined) {
        parts.push(`${key}=${queryParams[key]}`);
      }
    }
    return parts.length ? `?${parts.join('&')}` : '';
  }