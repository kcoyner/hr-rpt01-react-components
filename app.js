// import React from 'react';
// import ReactDOM from 'react-dom';

const GroceryListItems = (props) => {
  return (<ul>
    {props.groceryItems.map(function (item) {
      return [<li>{item}</li>];
    })}
    </ul>
  );

  // return (
  //       <li>{props.items[0]}</li>
  //       <li>{props.items[1]}</li>
  // );

}

const GroceryList = () => {
  var items = ['cucumber', 'kale'];
  return (
    <div>
      <h2>Grocery List</h2>
        <GroceryListItems groceryItems={items} />
    </div>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));


// <GroceryListItems items={['cucumbers', 'kale']} />

