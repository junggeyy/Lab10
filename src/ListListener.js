import React, { useState } from 'react';

function ListSelector() {
  const [selectedList, setSelectedList] = useState('list1');

  function handleChange(event) {
    setSelectedList(event.target.value);
  }

  return (
    <div className="form-group">
      <label htmlFor="list-select">Select a List:</label>
      <select id="list-select" className="form-control" value={selectedList} onChange={handleChange}>
        <option value="list1">List 1</option>
        <option value="list2">List 2</option>
        <option value="list3">List 3</option>
      </select>
    </div>
  );
}

export default ListSelector;
