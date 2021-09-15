import React from 'react';

export default function PhoneBookList(props) {
  return (
    <div>
      {props.phoneBookList.length > 0 ? (
        <table className="phoneBookListTable">
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
          {props.phoneBookList.map((listItem, index) => {
            return (
              <tr key={listItem.name + index}>
                <td>{listItem.name}</td>
                <td>{listItem.number}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        `No Data Available`
      )}
    </div>
  );
}
