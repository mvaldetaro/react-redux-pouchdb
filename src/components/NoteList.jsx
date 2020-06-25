import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { acRemoveNote } from "../reducers/actions";
class NoteList extends PureComponent {
  handleRemove = (pNote) => {
    // this.props.onRemove(pNote);
    this.props.acRemoveNote(pNote);
  };

  render() {
    return (
      <div>
        {Object.values(this.props.notes.data).map((pNote) => (
          <div key={pNote._id}>
            <h2>
              <Link to={`/notes/${pNote._id}`}>{pNote.title}</Link>
              <Link to={`/update/${pNote._id}`}>
                <button type="button">Editar</button>
              </Link>
              <button onClick={() => this.handleRemove(pNote)}>Remover</button>
            </h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      notes: state.notes,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    acRemoveNote,
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
