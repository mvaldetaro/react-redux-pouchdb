import React, { PureComponent } from 'react';

class NoteView extends PureComponent {
    
    render() {
        const { note } = this.props;

        if(!note) {
            return null;
        }

        const xRevs = this.props.onRevisions(note._id);
        console.log(xRevs);

        return (
            <div>
                <h1>{ note.title }</h1>
                <div>{ note.body }</div>
            </div>

            
        );
    }
}

export default NoteView;