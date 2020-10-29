import React, {Component} from 'react'
import axios from 'axios'


export default class PhoneVotes extends Component {
    constructor(props) {
        super(props)

        this.onChangeVotesE = this.onChangeVotesE.bind(this)
        this.onChangeVotesVG = this.onChangeVotesVG.bind(this)
        this.onChangeVotesG = this.onChangeVotesG.bind(this)
        this.onChangeVotesP = this.onChangeVotesP.bind(this)
        this.onChangeVotesVP = this.onChangeVotesVP.bind(this)

        this.state = {
            votesE: 0,
            votesVG: 0,
            votesG: 0,
            votesP: 0,
            votesVP: 0
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/phones/" + this.props.match.params.id)
            .then( response => {
                this.setState({
                    votesE: response.data.votesE,
                    votesVG: response.data.votesVG,
                    votesG: response.data.votesG,
                    votesP: response.data.votesP,
                    votesVP: response.data.votesVP
                })
            })
        }
    
    onChangeVotesE(e) {
        this.setState({
            votesE: this.state.votesE + 1
        })
    }
    onChangeVotesVG(e) {
        this.setState({
            votesVG: this.state.votesVG + 1
        })
    }
    onChangeVotesG(e) {
        this.setState({
            votesG: this.state.votesG + 1
        })
    }
    onChangeVotesP(e) {
        this.setState({
            votesP: this.statevotesP + 1
        })
    }
    onChangeVotesVP(e) {
        this.setState({
            votesVP: this.state.votesVP + 1
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const phone = {
            votesE: this.state.votesE,
            votesVG: this.state.votesVG,
            votesG: this.state.votesG,
            votesP: this.state.votesP,
            votesVP: this.state.votesVP
        }

        console.log(phone)

        axios.post("http://localhost:5000/phones/update/" + this.props.match.params.id, phone)
            .then( res => console.log(res.data))
        
        window.location = '/'
    }

    return() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Excellent</label>
                    <input type="radio" 
                        value={this.state.votesE}
                        onChange={this.onChangeVotesE}
                    />
                </form>
            </div>
        )
    }

}