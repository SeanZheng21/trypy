import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRunner, getCode, deleteCode } from "../../actions/runner";

export class PyCode extends Component {
    static propTypes = {
        // runner: PropTypes.arrayOf(
        //     PropTypes.shape({
        //         execution_result: PropTypes.string.isRequired,
        //         success: PropTypes.bool.isRequired
        //     }).isRequired
        // ).isRequired,
        code: PropTypes.array.isRequired,
        getRunner: PropTypes.func.isRequired,
        getCode: PropTypes.func.isRequired,
        deleteCode: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getRunner();
        this.props.getCode();
    }

    state = {
        code: `print('Hello world!')`,
        success: false
    };

    handleChange = event => {
        this.setState({
            code: event.target.value,
            success: this.state.success
        });
    };

    runButtonClick = () => {
        this.props.getRunner(this.state.code);
    };

    render() {
        let resParagraph;
        if (this.props.runner['success']) {
            resParagraph = <p>{ this.props.runner["execution_result"] }</p>
        } else {
            resParagraph = <p style={{color: "red"}}>{ this.props.runner["execution_error"] }</p>
        }
        return (
            <div>
                <Fragment>
                <h1>Write your Python code here!</h1>
                <div>
                    <textarea rows="4" cols="50" value={this.state.code} onChange={this.handleChange}/>
                </div>
                <button className="btn btn-success btn-sm"
                        onClick={
                            this.runButtonClick
                        }>
                    Run Code
                </button>
                <br/>
                <div>
                    <h3>Output:</h3>
                    {resParagraph}
                </div>
            </Fragment>
            <Fragment>
                <h2>Code</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Content</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.code.map( c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}.py</td>
                            <td>{c.content}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={
                                    this.props.deleteCode.bind(this, c.id)
                                }>Delete</button>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </Fragment>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    runner: state.runner.runner,
    code: state.runner.code
});

export default connect(mapStateToProps, { getRunner, getCode, deleteCode })(PyCode);