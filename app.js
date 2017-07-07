// import React from 'react';
// import ReactDOM from 'react-dom';

const GroceryListItem = (props) => {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (<ul>
    {props.groceryItems.map(function (item) {
      return [<li onClick={onListItemClick}>{item}</li>];
    })}
    </ul>
  );
}

const GroceryList = () => {
  var items = ['cucumber', 'kale'];
  return (
    <div>
      <h2>Grocery List</h2>
        <GroceryListItem groceryItems={items} />
    </div>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));



