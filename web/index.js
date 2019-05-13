import React from 'react'
import{render} from 'react-dom'
import './index.scss'

class EntryPoint extends React.Component {
    render() {
        return(
            <div>simple template for setting up babel/webpack with an Express server . Also use webpack-dev-server </div>
        )
    }
}

render(
    <EntryPoint />,
    document.getElementById('root')
)