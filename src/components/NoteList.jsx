import React, { PureComponent } from 'react';

class NoteList extends PureComponent {
    render() {
        return (
            <div>
                {Object.values(this.props.notes).map((pNote) =>  <div>
                        <h2>{pNote.title}</h2>
                    </div>
                )}
            </div>
        );
    }
}


export default NoteList;