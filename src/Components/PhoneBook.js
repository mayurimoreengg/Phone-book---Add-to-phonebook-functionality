import React from 'react';

export default function PhoneBook(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        className="phone-inputs phone-name"
        value={props.inputName}
        onChange={e => props.setInputName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Number"
        className="phone-inputs phone-num"
        value={props.inputNum}
        onChange={e => props.setInputNum(e.target.value)}
      />
      <button className="phone-button" onClick={props.addToBook}>
        Add to Phone Book
      </button>
    </div>
  );
}
