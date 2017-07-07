// import React from 'react';
// import ReactDOM from 'react-dom';

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: false};
  }

  onListItemClick (event) {
    console.log(event);
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} key={this.props.key} onClick={event => this.onListItemClick(event)}>{this.props.item}</li>
    );
  }
}


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

