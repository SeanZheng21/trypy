import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addCode, deleteCode, getCode, getRunner} from "../../actions/runner";
import '../stylesheet/Pycode.css'

export class PyCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openFiles: [],
            activeFile: {},
            newName: '',
            code: `print('Hello world!')`,
            success: false
        };

        this.editFileClick = this.editFileClick.bind(this);
    }

    static propTypes = {
        code: PropTypes.array.isRequired,
        getRunner: PropTypes.func.isRequired,
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
            ...this.state,
            newName: '',
        });
    };

    componentDidMount() {
        this.props.getCode();
        this.props.getRunner();
    };

    handleChange = event => {
        this.setState({
            ...this.state,
            code: event.target.value,
            success: this.state.success
        });
    };

    runButtonClick = () => {
        this.props.getRunner(this.state.code);
    };

    editFileClick = (id, name, content) => {
        const tgtFile = this.state.openFiles.find(elt => elt.id === id);
        if (tgtFile !== undefined) {
            // Clicked on an already opened file
            this.setState({
                ...this.state,
                activeFile: tgtFile
            });
            return;
        }
        let files = this.state.openFiles;
        const newFile = { id, name, content };
        files.push(newFile);
        this.setState({
            ...this.state,
            openFiles: files,
            activeFile: newFile
        });
    }

    tabSelectClick = (id) => {
        console.log('In select tab');
        const activeFile = this.state.openFiles.find(elt => elt.id === id);
        this.setState({
            ...this.state,
            activeFile: activeFile
        })
    }

    tabCloseClick = (id) => {
        console.log('In close click');
        let files = this.state.openFiles.filter( o => o.id !== id);
        let activeFile;
        if (id === this.state.activeFile.id) {
            // Trying to close the active file
            activeFile = this.state.openFiles.find(elt => elt.id !== id)
        } else {
            // Trying to close an inactive file
            activeFile = this.state.activeFile;
        }
        this.setState({
            ...this.state,
            openFiles:files,
            activeFile: activeFile
        });
    }

    render() {
        const {newName} = this.state;
        let resParagraph;
        if (this.props.runner['success']) {
            resParagraph = <p>{ this.props.runner["execution_result"] }</p>
        } else {
            resParagraph = <p style={{color: "red"}}>{ this.props.runner["execution_error"] }</p>
        }
        return (
            <div className="row"  style={{marginRight: "10px"}}>
                <div className="column-bar left-bar" >
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
                                        <button className="btn btn-info btn-sm float-right"
                                            onClick={this.editFileClick.bind(this, c.id, c.name, c.content)}>&#9998;</button>
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
                </div>
                <div className="column-bar right-bar" >
                    <div>
                        <div className="tab">
                            {
                                this.state.openFiles.map(f => (
                                    <span key={f.id}>
                                        <button className={f.id === this.state.activeFile.id ? 'btn active-tab btn-sm': 'btn inactive-tab btn-sm'}
                                                onClick={this.tabSelectClick.bind(this, f.id)}>
                                            {f.name}.py&nbsp;
                                        </button>
                                        <button onClick={this.tabCloseClick.bind(this, f.id)}
                                                className={f.id === this.state.activeFile.id ? 'btn active-tab btn-sm': 'btn inactive-tab btn-sm'}>&#10006;</button>
                                    </span>
                                ))
                            }
                        </div>
                        <div className="row"  style={{marginRight: "10px"}}>
                            <div className="column left" >
                                <Fragment>
                                    <div>
                                        <textarea rows="20" cols="70" value={this.state.code} onChange={this.handleChange}/>
                                    </div>
                                </Fragment>
                            </div>
                            <div className="column right">
                                <div>
                                    <span>
                                        <h3>Output:
                                            <button className="btn btn-success btn-sm float-right" onClick={this.runButtonClick}>
                                                Run Code
                                            </button>
                                        </h3>
                                    </span>
                                    <pre className="code-output">
                                        <code>
                                            {resParagraph}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    runner: state.runner.runner,
    code: state.runner.code,
    newName: state.newName
});

export default connect(mapStateToProps, { getRunner, getCode, deleteCode, addCode })(PyCode);