import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) {//converter os numeros no padrao css de 12 colunas do bootstrap
        const cols = numbers ? numbers.split(' ') :[]
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]} `//se a coluna 0 existir
        if(cols[1]) classes += ` col-sm-${cols[1]} `
        if(cols[2]) classes += ` col-md-${cols[2]} `
        if(cols[3]) classes += ` col-lg-${cols[3]} `

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}