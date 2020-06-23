import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

class NoteList extends PureComponent {
    render() {
        return (
            <div>
                {Object.values(this.props.notes).map((pNote) =>  <div key={pNote._id}>
                        <h2><Link to={`/notes/${pNote._id}`}>{pNote.title}</Link></h2>
                    </div>
                )}
            </div>
        );
    }
}


export default NoteList;