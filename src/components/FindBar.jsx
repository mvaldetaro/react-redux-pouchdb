import React, { PureComponent } from "react";

class FindBar extends PureComponent {
  state = {
    query: "",
  };

  updateValue = (pEvent) => {
    const xValue = pEvent.target.value;

    this.setState({ query: xValue });
  };

  handleFind = (e) => {
    e.preventDefault();
    this.props.onFind(this.state.query);
  };

  render() {
    return (
      <div>
        <form className="finr-form" onSubmit={this.handleFind}>
          <div className="note-form__field">
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={this.state.query}
              onChange={this.updateValue}
            />
          </div>
          <div className="note-form__buttons">
            <button className="btn">Procurar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FindBar;
