import { Fragment, useState } from "react";

const data = [
  {
    Name: "kamaljit",
    Age: 29,
    Address: { City: "pune", State: "Maharashtra" },
  },
  {
    Name: "Sachin",
    Age: 29,
    Address: { City: "Kolhapur", State: "Maharashtra" },
  },
  { Name: "Pratik", Age: 30, Address: { City: "Surat", State: "Gujarat" } },
];

const OutTable = () => {
  const [inputText, setInputText] = useState('');
  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <input onChange={inputChangeHandler} value={inputText} />
      <table>
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>city</th>
          <th>state</th>
        </tr>
        {data
          .filter((record) => {
            return (
              record.Name.includes(inputText) ||
              record.Address.City.includes(inputText) ||
              record.Address.State.includes(inputText)
            );
          })
          .map((record) => (
            <tr>
              <td>{record.Name}</td>
              <td>{record.Age}</td>
              <td>{record.Address.City}</td>
              <td>{record.Address.State}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default OutTable;
