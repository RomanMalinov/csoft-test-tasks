export const generateJSON = (columns: string[], rows: string[][], dataTypes: string[]) => {
  return rows.map(row => {
    return row.reduce((acc, cell, index) => {
      const type = dataTypes[index] || "string";
      acc[columns[index]] = type === "percent" ? `${cell}%` : cell;
      return acc;
    }, {} as { [key: string]: string });
  });
};
