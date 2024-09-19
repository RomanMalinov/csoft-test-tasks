'use client';
import { useState } from 'react';
import { generateJSON } from '@/utils/helpers';
import styles from "./table.module.css";

const Table = () => {
  const [columns, setColumns] = useState<string[]>(["Столбец", "Столбец"]);
  const [rows, setRows] = useState<string[][]>([
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""]
  ]);
  const [dataTypes, setDataTypes] = useState<string[]>(["string", "string"]);

  const addColumn = () => {
    setColumns([...columns, "Столбец"]);
    setRows(rows.map(row => [...row, ""]));
    setDataTypes([...dataTypes, "string"]);
  };

  const removeColumn = (index: number) => {
    setColumns(columns.filter((_, i) => i !== index));
    setRows(rows.map(row => row.filter((_, i) => i !== index)));
    setDataTypes(dataTypes.filter((_, i) => i !== index));
  };

  const addRow = () => {
    setRows([...rows, Array(columns.length).fill("")]);
  };

  const removeRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleDataTypeChange = (index: number, type: string) => {
    const newTypes = [...dataTypes];
    newTypes[index] = type;
    setDataTypes(newTypes);
  };

  const handleCellChange = (rowIndex: number, cellIndex: number, value: string) => {
    const newRows = [...rows];
    newRows[rowIndex][cellIndex] = value;
    setRows(newRows);
  };

  const handleGenerateJSON = () => {
    const jsonData = generateJSON(columns, rows, dataTypes);
    console.log(JSON.stringify(jsonData, null, 2)); // Output to console
  };

  return (
    <section className={styles.section}>
      <button className={styles.addButton} onClick={addColumn}>Добавить столбец</button>
      <button className={styles.addButton} onClick={addRow}>Добавить строку</button>
      <button className={styles.addButton} onClick={handleGenerateJSON}>Generate JSON</button>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className={styles.thTable} key={index}>
                 <div className={styles.thTConteiner}>
                 <span className={styles.thText}>{column}</span>
                <select
                  value={dataTypes[index]}
                  onChange={(e) => handleDataTypeChange(index, e.target.value)}
                >
                  <option value="string">Строка</option>
                  <option value="percent">%</option>
                </select>
                 <button className={styles.delButton} onClick={() => removeColumn(index)}>Удалить</button>
                 </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className={styles.tdTable} key={cellIndex}>
                  <input
                    type={dataTypes[cellIndex] === 'percent' ? 'number' : 'text'}
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                    className={styles.input}
                    placeholder="Данные"
                  />
                </td>
              ))}
              <td>
                <button className={styles.delButton} onClick={() => removeRow(rowIndex)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
