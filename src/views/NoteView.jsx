import React, { PureComponent } from 'react';

class NoteView extends PureComponent {
    
    render() {
        const { note } = this.props;

        if(!note) {
            return null;
        }

        return (
            <div>
                <h1>{ note.title }</h1>
                <div>{ note.body }</div>
            </div>
        );
    }
}

export default NoteView;