import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCode, deleteCode, addCode } from "../../actions/runner";
import '../stylesheet/ProjFiles.css';
import {PyCode} from "./PyCode";

export class ProjFiles extends Component {
    static propTypes = {
        code: PropTypes.array.isRequired,
        getCode: PropTypes.func.isRequired,
        deleteCode: PropTypes.func.isRequired,
        addCode: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const code = {
            name: this.state.newName,
            content: `# ${this.state.newName}.py`
        };
        this.props.addCode(code);
        this.setState({
            newName: '',
        });
    };

    state = {
        newName: ''
    }

    componentDidMount() {
        this.props.getCode();
    };

    render() {
        const {newName} = this.state;
        return (
            <div>
                <Fragment>
                    <h3>Project Files:</h3>
                    <table className="table table-striped">
                        <tbody>
                        {
                            this.props.code.map( c => (
                                <tr key={c.id} className="tr-file">
                                    <td>{c.name}.py
                                        <button className="btn btn-danger btn-sm float-right" onClick={
                                            this.props.deleteCode.bind(this, c.id)
                                            }>&#10006;</button>
                                        <button className="btn btn-info btn-sm float-right" onClick={
                                            () => console.log(`Editing file ${c.id}: ${c.name}`)
                                            }>&#9998;</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <form onSubmit={this.onSubmit}>
                        <span>
                             <h5>New file:
                                 <button type="submit" className="btn btn-primary float-right">
                                    +
                                 </button>
                             </h5>

                        </span>
                        <input
                            className="form-control"
                            placeholder="new"
                            type="text"
                            name="newName"
                            onChange={this.onChange}
                            value={newName}
                        />
                    </form>
                </Fragment>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    runner: state.runner.runner,
    code: state.runner.code,
    newName: state.newName
});

export default connect(mapStateToProps, { getCode, deleteCode, addCode })(ProjFiles);