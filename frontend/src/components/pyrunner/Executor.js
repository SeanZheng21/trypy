import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRunner, getCode, deleteCode } from "../../actions/runner";
import '../stylesheet/Executor.css';

export class Executor extends Component {
    static propTypes = {
        code: PropTypes.array.isRequired,
        getRunner: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getRunner();
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
                <h1>Python Playground</h1>
                <div className="row"  style={{marginRight: "10px"}}>
                    <div className="column left" >
                        <button className="btn btn-success btn-sm" onClick={this.runButtonClick}>
                            &#9654;&nbsp;Run
                        </button>
                        <Fragment>
                            <div>
                                <textarea className="code-text-area" rows="20" cols="70" value={this.state.code}
                                          onChange={this.handleChange}/>
                            </div>
                        </Fragment>
                    </div>
                    <div className="column right">
                        <h3>Output:</h3>
                        <div>
                            <pre className="code-output">
                                <code>
                                    {resParagraph}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    runner: state.runner.runner,
    code: state.runner.code
});

export default connect(mapStateToProps, { getRunner, getCode, deleteCode })(Executor);