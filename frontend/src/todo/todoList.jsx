import React from 'react'
import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

import { bindActionCreators } from 'redux'

import {connect} from 'react-redux'

const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []
        return list.map(todo =>(//é uma iteracao
            <tr key = {todo._id}> 
                <td  className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                      onClick={() => props.markAsPending(todo)}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className = 'tableActions'>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                    
                </tbody>
            </table>
        </div>
    )
}

//mapear o estado do redux
const mapStateToProps = state => ({list: state.todo.list})

const mapDispatchToProps = dispatch =>
    bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)