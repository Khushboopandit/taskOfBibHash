import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    books: [],
    bookName: "",
    bookDescription: "",
  };
  saveInList = () => {
    let obj = {},
      lis = this.state.books;
    obj.name = this.state.bookName;
    obj.description = this.state.bookDescription;
    lis.push(obj);
    this.setState({ bookName: "", bookDescription: "", books: lis });
  };
  render() {
    console.log(this.state.books);
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.bookName}
          onChange={(e) => this.setState({ bookName: e.target.value })}
        ></input>
        <input
          type="text"
          value={this.state.bookDescription}
          onChange={(e) => this.setState({ bookDescription: e.target.value })}
        ></input>
        <button onClick={this.saveInList}>Submit</button>

        {this.state.books.map((book, index) => (
          <div className="card">
            <h4>{book.name}</h4>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
