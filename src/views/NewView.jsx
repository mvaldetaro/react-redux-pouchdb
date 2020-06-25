import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

class NewView extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            note: {
                //_id: uuidv4(),
                // _rev: props.note ? props.note._rev : null,
                title: props.note ? props.note.title : '',
                body: props.note ? props.note.body : '',
            }
        }
    }

    updateValue = (pEvent) => {
        const { note } = this.state;

        this.setState({
            note: { ...note, [pEvent.target.name]: pEvent.target.value }
        })
    }

    handleSave = async (pEvent) => {
        pEvent.preventDefault();

        const id = await this.props.onSave(this.state.note);
        this.props.history.replace(`/notes/${id}`);
    }

    render() {
        const { note } = this.state;

        return (
            <div>
                <h1>Nova Nota</h1>
                <form className="note-form" onSubmit={this.handleSave}>
                    <div className="note-form__field">
                        <label>Título</label>
                        <input type="text" name="title" value={note.title} onChange={this.updateValue} />
                    </div>
                    <div className="note-form__field">
                        <label>Conteúdo</label>
                        <textarea name="body" value={note.body} onChange={this.updateValue} />
                    </div>
                    <div className="note-form__buttons">
                        <button className="btn">Salvar</button>
                        <Link to="/">Cancelar</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewView;