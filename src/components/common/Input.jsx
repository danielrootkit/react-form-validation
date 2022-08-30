import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, label, value, type = 'text', onChange, error } = this.props;
    return (
      <>
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input
            onChange={onChange}
            value={value}
            name={name}
            id={name}
            type={type}
            className="form-control"
          />
          {error && <div className="alert alert-danger mt-1 p-1">{error}</div>}
        </div>
      </>
    );
  }
}

export default Input;
