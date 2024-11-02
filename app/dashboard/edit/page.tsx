'use client'

import React, { useState } from 'react';

// Sample data to render
const data = [
  {
    id: 1,
    name: "John Doe",
    info: {
      age: 30,
      address: {
        street: "123 Main St",
        city: "Somewhere",
        country: "USA",
      },
    },
    hobbies: ["Reading", "Hiking", "Coding"],
    scores: [95, 88, 76],
  },
  {
    id: 2,
    name: "Jane Smith",
    info: {
      age: 25,
      address: {
        street: "456 Elm St",
        city: "Anywhere",
        country: "USA",
      },
    },
    hobbies: ["Cooking", "Traveling", "Painting"],
    scores: [92, 87, 81],
  },
  // ... Add more entries as needed
];

// Utility function to check if a value is an object
const isObject = (value: any) => value && typeof value === 'object' && !Array.isArray(value);

interface TableProps {
  data: any;
}

const TableRenderer: React.FC<TableProps> = ({ data }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = (key: string) => {
    setIsAscending(sortKey === key ? !isAscending : true);
    setSortKey(key);
  };

  const getSortedData = () => {
    if (sortKey && Array.isArray(data)) {
      return [...data].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return isAscending ? aValue - bValue : bValue - aValue;
      });
    }
    return data;
  };

  const sortedData = getSortedData();

  // Ensure data has items before rendering headers
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table className="w-full border border-gray-300 divide-y divide-gray-200 text-left">
      <thead className="bg-gray-100">
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              onClick={() => handleSort(key)}
              className="px-4 py-2 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
            >
              {key} {sortKey === key ? (isAscending ? '▲' : '▼') : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {sortedData.map((item, index) => (
          <TableRow key={index} data={item} />
        ))}
      </tbody>
    </table>
  );
};

interface TableRowProps {
  data: any;
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr className="hover:bg-gray-50">
      {Object.keys(data).map((key) => (
        <td key={key} className="px-4 py-2">
          {isObject(data[key]) ? (
            <div className="p-2 border border-gray-200 bg-gray-50">
              <TableRenderer data={[data[key]]} /> {/* Wrap nested object in array */}
            </div>
          ) : Array.isArray(data[key]) ? (
            <ul className="list-disc pl-5">
              {data[key].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            data[key]
          )}
        </td>
      ))}
    </tr>
  );
};

const App: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recursive Table Renderer</h1>
      <TableRenderer data={data} />
    </div>
  );
};

export default App;
