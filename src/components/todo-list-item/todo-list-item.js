import './todo-list-item.css';
import React, { Component } from 'react';

export default class TodoListItem extends Component {
  state = { done: false, important: false };

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// export default TodoListItem;
// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? 'tomato' : 'black',
//     fontWeight: important ? 'bold' : 'normal',
//   };
//   return (
//     <span className="todo-list-item" style={style}>
//       {label}
//       <button type="button" className="btn btn-outline-success">
//         <i className="fa fa-exclamation" />
//       </button>
//
//       <button type="button" className="btn btn-outline-danger">
//         <i className="fa fa-trash-o" aria-hidden="true"></i>
//       </button>
//     </span>
//   );
// };
