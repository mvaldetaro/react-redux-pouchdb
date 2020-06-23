import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

class NoteList extends PureComponent {

    handleRemove = (pNote) => {
        this.props.onRemove(pNote);
    }

    render() {
        return (
            <div>
                {Object.values(this.props.notes).map((pNote) =>  <div key={pNote._id}>
                        <h2><Link to={`/notes/${pNote._id}`}>{pNote.title}</Link> <button onClick={() => this.handleRemove(pNote)}>Remover</button></h2>
                    </div>
                )}
            </div>
        );
    }
}


export default NoteList;