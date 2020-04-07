import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCode} from "../../actions/runner";

export class Form extends Component {
    state = {
        name: '',
        content: '',
        owner: ''
    };

    static propTypes = {
        addCode: PropTypes.func.isRequired
    };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, content, owner } = this.state;
    const code = { name, content, owner };
    this.props.addCode(code);
    this.setState({
        name: '',
        content: '',
        owner: ''
    });
  };

    render() {
        const { name, content, owner } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Code</h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Name(.py)</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Content</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="content"
                      onChange={this.onChange}
                      value={content}
                    />
                  </div>
                  <div className="form-group">
                    <label>Owner</label>
                    <input
                      className="form-control"
                      type="text"
                      name="owner"
                      onChange={this.onChange}
                      value={owner}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
        )
    }
}

export default connect(null, { addCode })(Form);
