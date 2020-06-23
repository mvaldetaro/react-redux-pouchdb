import React, { PureComponent } from "react";
import NoteList from "../components/NoteList";
class IndexView extends PureComponent {
  render() {
    return (
      <div>
        <h1>Notas</h1>
        <NoteList notes={this.props.notes} onRemove={this.props.onRemove} />
      </div>
    );
  }
}

export default IndexView;
