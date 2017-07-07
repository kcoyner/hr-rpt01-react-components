// import React from 'react';
// import ReactDOM from 'react-dom';

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.key} onClick={onListItemClick}>{this.props.item}</li>
    );
  }

}

var onListItemClick = (event) => {
    console.log('I got clicked');
};


const GroceryList = (props) => {
  return (
    <ul>
      <h2>Grocery List</h2>
        {items.map((item, key) =>
          <GroceryListItem item={item} key={key} />
        )}
    </ul>
  );
}

var items = ['cucumber', 'kale', 'daikon'];

ReactDOM.render(<GroceryList props={items} />, document.getElementById('app'));




// const GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (<ul>
//     {props.groceryItems.map(function (item) {
//       return [<li onClick={onListItemClick}>{item}</li>];
//     })}
//     </ul>
//   );
// }
