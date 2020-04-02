import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRunner} from "../../actions/runner";

export class PyCode extends Component {
    static propTypes = {
        runner: PropTypes.object.isRequired,
        getRunner: PropTypes.func.isRequired
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
        return (
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
                    <h2>Result:</h2>
                    <h3>
                        {this.props.runner['success'] ? 'Success' : 'Fail'}
                    </h3>
                    <p>{ this.props.runner["execution result"]}</p>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    runner: state.runner.runner
});

export default connect(mapStateToProps, { getRunner })(PyCode);