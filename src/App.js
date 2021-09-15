import React, { useState, useEffect } from 'react';
import './style.css';
import PhoneBook from './Components/PhoneBook';
import PhoneBookList from './Components/PhoneBookList';

export default function App() {
  const [inputName, setInputName] = useState('');
  const [inputNum, setInputNum] = useState('');
  const [phoneBookList, setPhoneBookList] = useState([]);

  function addToBook() {
    setPhoneBookList([
      ...phoneBookList,
      { id: phoneBookList.length + 1, name: inputName, number: inputNum }
    ]);
    setInputName('');
    setInputNum('');
  }

  return (
    <div>
      <h1>Hello Welcome to PhoneBook!</h1>
      <PhoneBook
        inputName={inputName}
        inputNum={inputNum}
        setInputName={setInputName}
        setInputNum={setInputNum}
        addToBook={addToBook}
      />
      <PhoneBookList phoneBookList={phoneBookList} />
    </div>
  );
}
