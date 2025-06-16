/**
 * Formatea una fecha en formato ISO 8601 (como las de GitHub API) a un formato legible
 * @param isoDateString - Fecha en formato ISO 8601 (ej: "2022-01-20T02:37:33Z")
 * @returns Fecha formateada como "Month Day, Year" (ej: "January 20, 2022")
 */
function formatGitHubDate(isoDateString: string): string {
  const date = new Date(isoDateString);
  
  // Verificar si la fecha es válida
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${isoDateString}`);
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString('en-US', options);
}

export default formatGitHubDate;