// import React from 'react';
// import ReactDOM from 'react-dom';

const GroceryList = () => {
  return (
    <div>
      <ul>
        <Cucumbers />
        <Kale />
      </ul>
    </div>
  );
}

const Kale = () => {
  return (
    <li>kale</li>
  );
}

const Cucumbers = () => {
  return (
    <li>cucumbers</li>
  );
}


ReactDOM.render(<GroceryList />, document.getElementById('app'));



