import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:30033/api/todos'

export default class Todo extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', list: []}//pegando o valor inicial do estado e guardando num array
        
        //para indicar que o this sempre sera o componente atual
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        //'resp' é uma variavel propria do axios para resposta de requisicao
        axios.get(`${URL}?sort=-createdAt${search}`)//expressao de filtro
            //.then( resp => console.log({search}))
            //pega o estado atual e zera sua descricao (como limpar o campo)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }
    handleSearch() {
      this.refresh(this.state.description)
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh()) 
    }
    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
          .then(resp => this.refresh(this.state.description))
    }
    handleMarkAsPending(todo) {
       axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
          .then(resp => this.refresh(this.state.description))
  }
    handleClear(todo){
        this.refresh()
    }



    render (){
        return(
            <div>
                <PageHeader name='Tarefas' small='cadastradas'></PageHeader>
                <TodoForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch} 
                    handleChange={this.handleChange}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}