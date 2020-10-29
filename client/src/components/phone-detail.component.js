import React, {Component} from 'react'
import axios from 'axios'


const Comment = props => (
    <div className="Card mb-4">
        <div className="Card-body">
            <h4 className="card-title">{props.comment.user}</h4>
            <p>
                PHONE: {props.comment.phone}<br/>
                USER: {props.comment.user}<br/>
                TEXT: {props.comment.text}
            </p>
        </div>
    </div>
)

export default class PhoneDetail extends Component {
    constructor(props) {
        super(props)

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this.onChangeUser = this.onChangeUser.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.onCommentSubmit = this.onCommentSubmit.bind(this)

        this.state = {
            name: '', storage: 0, ram: 0, display: '', price: 0, 
            votesE: 0, votesVG: 0, votesG: 0, votesP: 0, votesVP: 0,
            imageBase64: '',
            phone: '', user: '', text: '',
            comments: [],
            selectedOption: 'votesE'
        }
    }

    componentDidMount() {
        axios.get('/api/phones/' + this.props.match.params.id)
            .then( response => {
                this.setState({
                    name: response.data.name,
                    storage: response.data.storage,
                    ram: response.data.ram,
                    display: response.data.display,
                    price: response.data.price,
                    imageBase64: response.data.imageBase64,
                    votesE: response.data.votesE,
                    votesVG: response.data.votesVG,
                    votesG: response.data.votesG,
                    votesP: response.data.votesP,
                    votesVP: response.data.votesVP
                })
            })
            .catch( error => {
                console.log(error)
            })

        axios.get('/api/comments/')
            .then( response => {
                this.setState({
                    comments: response.data
                })
            })
    }

    onValueChange(e) {
            this.setState({
                selectedOption: e.target.value                                  
            })         
    }

    onChangeUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value
        })
    }

    onCommentSubmit(e) {
        e.preventDefault()

        const comment = {
            phone: this.state.name,
            user: this.state.user,
            text: this.state.text
        }

        axios.post('/api/comments/add/', comment)
            .then( res => console.log(res.data))
        
        window.location = '/' + this.props.match.params.id
    }

    commentslist() {
        return this.state.comments.filter(comment => comment.phone===this.state.name).map(currentcomment => {
            return <Comment comment={currentcomment}  />
        })
    }

    onFormSubmit(e) {                               
        e.preventDefault()

        const phone = {
            votesE: this.state.votesE,
            votesVG: this.state.votesVG,
            votesG: this.state.votesG,
            votesP: this.state.votesP,
            votesVP: this.state.votesVP
        }

        axios.post("http://localhost:5000/api/phones/update/" + this.props.match.params.id, phone)
            .then( res => console.log(res.data))
        
        // window.location = '/'
    }

    onSubmit() {
        if (this.state.selectedOption === "votesE") {
            this.setState({
                votesE: this.state.votesE + 1
            }) 
        }
        else if (this.state.selectedOption === "votesVG") {
            this.setState({
                votesVG: this.state.votesVG + 1
            }) 
        }
        else if (this.state.selectedOption === "votesG") {
            this.setState({
                votesG: this.state.votesG + 1
            })
        }
        else if (this.state.selectedOption === "votesP") {
            this.setState({
                votesP: this.state.votesP + 1
            })
        }
        else if (this.state.selectedOption === "votesVP") {
            this.setState({
                votesVP: this.state.votesVP + 1
            })
        }                
    }    

    render() {
        
        const total_votes = this.state.votesE + this.state.votesVG + this.state.votesG + this.state.votesP + this.state.votesVP
        const votesE_percentage = Math.round((this.state.votesE / total_votes) * 100)
        const votesVG_percentage = Math.round((this.state.votesVG / total_votes) * 100)
        const votesG_percentage = Math.round((this.state.votesG / total_votes) * 100)
        const votesP_percentage = Math.round((this.state.votesP / total_votes) * 100)
        const votesVP_percentage = Math.round((this.state.votesVP / total_votes) * 100)
        const rating = Math.round((votesE_percentage / 20) * 10 ) / 10
        
        return (
            <div>

            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-md-4 card" style={{padding:"25px", marginLeft:"25px",
                        boxShadow:"5px 5px 20px 5px grey"}}>
                    <img src={this.state.imageBase64} style={{width:"400px", height:"400px"}} alt={this.state.name}/>
                </div>
                <div className="col-md-6 card" style={{padding:"25px", marginLeft:"50px",
                        boxShadow:"5px 5px 20px 5px grey"}}>
                    <h2><b>TECHNICAL SPECIFICATIONS</b></h2>
                    <ul>
                        <li><h4><b>MANUFACTURER :- { this.state.name }</b></h4></li>
                        <li><h4><b>RAM :- { this.state.ram } GB</b></h4></li>
                        <li><h4><b>DISPLAY :- { this.state.display }</b></h4></li>
                        <li><h4><b>STORAGE :- { this.state.storage } GB</b></h4></li>
                        <li><h4><b>PRICE :- { this.state.price }</b></h4></li>
                    </ul>                  
                          
                    <a class="btn btn-success" href="">
                        <b style={{fontSize: "25px"}}>Add To CART</b>
                    </a>   
                    <br/>
                    <a class="btn btn-success" href="">
                        <b style={{fontSize: "25px"}}>MY CART</b>
                    </a>               
                </div>
            </div>
            
            <br />
            <br />
            <br />
            <br />

            <div className="row">

                <div className="col-md-5" style={{boxShadow:"5px 5px 20px 5px grey",
                        marginLeft:"25px", padding:"25px"}}>
                    <h2 style={{ fontWeight:"bold" }}>VOTING</h2>
                    <br/>                    

                    <div className="row">
                    <div className="col-md-6">
                    <form onSubmit={this.onFormSubmit} > 

                        <div className="radio">
                            <label>
                                <input style={{display: "inline-block"}}
                                    type="radio"
                                    value="votesE"                              
                                    checked={this.state.selectedOption === "votesE"}                           
                                    onChange={this.onValueChange}
                                /> &nbsp;                                
                                <div style={{display: "inline-block", fontSize:"20px", fontWeight:"bold"}}>EXCELLENT</div> 
                                &nbsp; &nbsp;                                                           
                                <span style={{display:"inline-block", fontSize:"15px", fontWeight:"bold"}} className="badge badge-success">
                                    {this.state.votesE} votes
                                </span>
                            </label>
                        </div>

                        <div className="radio">
                            <label>
                                <input style={{display: "inline-block"}}
                                    type="radio"
                                    value="votesVG"                              
                                    checked={this.state.selectedOption === "votesVG"}
                                    onChange={this.onValueChange}
                                /> &nbsp; 
                                <div style={{display: "inline-block", fontSize:"20px", fontWeight:"bold"}}>VERY GOOD</div>
                                &nbsp; &nbsp;
                                <span style={{display: "inline-block", fontSize:"15px", fontWeight:"bold"}} className="badge badge-success">
                                    {this.state.votesVG} votes
                                </span>
                            </label>
                        </div>

                        <div className="radio">
                            <label>
                                <input style={{display: "inline-block"}}
                                    type="radio"
                                    value="votesG"                              
                                    checked={this.state.selectedOption === "votesG"}
                                    onChange={this.onValueChange}
                                /> &nbsp;
                                <div style={{display: "inline-block", fontSize:"20px", fontWeight:"bold"}}>GOOD</div>
                                &nbsp; &nbsp;
                                <span style={{display: "inline-block", fontSize:"15px", fontWeight:"bold"}} className="badge badge-success">
                                    {this.state.votesG} votes
                                </span>
                            </label>
                        </div>

                        <div className="radio">
                            <label>
                                <input style={{display: "inline-block"}}
                                    type="radio"
                                    value="votesP"                              
                                    checked={this.state.selectedOption === "votesP"}
                                    onChange={this.onValueChange}
                                /> &nbsp;
                                <div style={{display: "inline-block", fontSize:"20px", fontWeight:"bold"}}>POOR</div>
                                &nbsp; &nbsp;
                                <span style={{display: "inline-block", fontSize:"15px", fontWeight:"bold"}} className="badge badge-success">
                                    {this.state.votesP} votes
                                </span>
                            </label>
                        </div>

                        <div className="radio">
                            <label>
                                <input style={{display: "inline-block"}}
                                    type="radio"
                                    value="votesVP"                              
                                    checked={this.state.selectedOption === "votesVP"}
                                    onChange={this.onValueChange}
                                /> &nbsp;
                                <div style={{display: "inline-block", fontSize:"20px", fontWeight:"bold"}}>VERY POOR</div>
                                &nbsp; &nbsp;
                                <span style={{display: "inline-block", fontSize:"15px", fontWeight:"bold"}} className="badge badge-success">
                                    {this.state.votesVP} votes
                                </span>
                            </label>
                        </div>
                        <br />

                        <div>
                            <input type="submit" value="VOTE"  onClick={this.onSubmit} className="btn btn-primary"
                                style={{ fontSize:"25px", fontWeight:"bold" }} />
                        </div>
                    </form>
                    </div>

                        <div className="col-md-6" style={{marginLeft:"270px",marginTop:"-300px",
                                    paddingLeft:"80px",fontSize:"100px", fontWeight:"bold"}}>
                            {rating}
                            <div style={{fontWeight:"bold", fontSize:"25px"}}>({total_votes} votes)</div>
                        </div>

                    </div>
                </div>

                <div className="col-md-6" style={{ boxShadow:"5px 5px 20px 5px grey",
                        marginLeft:"40px", padding:"25px" }}>
                    <h1 style={{ fontWeight:"bold" }}>RATINGS</h1>
                    <br/>

                    <div className="progress" style={{height:"40px" }}>
                        <div className="progress-bar bg-success" style={{ width:`${votesE_percentage}%`,fontSize:"20px", fontWeight:"bold" }}>
                            {votesE_percentage}%
                        </div>
                    </div>
                    <br/>

                    <div className="progress" style={{ height:"40px" }}>
                        <div className="progress-bar bg-success" style={{ width: `${votesVG_percentage}%`, fontSize:"20px", fontWeight:"bold" }}>
                            {votesVG_percentage}%
                        </div>
                    </div>
                    <br/>

                    <div className="progress" style={{ height:"40px" }}>
                        <div className="progress-bar bg-success" style={{ width: `${votesG_percentage}%`, fontSize:"20px", fontWeight:"bold" }}>
                            {votesG_percentage}%
                        </div>
                    </div>
                    <br/>

                    <div className="progress" style={{ height:"40px" }}>
                        <div className="progress-bar bg-success" style={{ width: `${votesP_percentage}%`, fontSize:"20px", fontWeight:"bold" }}>
                            {votesP_percentage}%
                        </div>
                    </div>
                    <br/>

                    <div className="progress" style={{ height:"40px" }}>
                        <div className="progress-bar bg-success" style={{ width: `${votesVP_percentage}%`, fontSize:"20px", fontWeight:"bold" }}>
                            {votesVP_percentage}%
                        </div>
                    </div>
                </div>

            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="col-md-10" style={{ boxShadow:"5px 5px 20px 5px grey",
                     padding:"25px", marginLeft:"10px"}}>
                <form onSubmit={this.onCommentSubmit}>
                    <div className="form-group">
                        <label>
                            <input 
                                required
                                type="text"
                                className="form-control"
                                placeholder="USER"
                                value={this.state.user}
                                onChange={this.onChangeUser}
                            />
                            
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <textarea rows="10" cols="200" className="form-control" placeholder="TEXT" 
                                value={this.state.text} onChange={this.onChangeText}>
                            </textarea>
                            
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="POST" className="btn btn-primary" 
                            style={{ fontSize:"25px", fontWeight:"bold" }} />
                    </div>
                </form>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="col-md-10" style={{boxShadow:"5px 5px 20px 5px grey",
                    padding:"25px", marginLeft:"10px" }}>
            <h2 style={{fontWeight:"bold"}}>Comment Section</h2>
            <br/>
                {this.state.comments.filter( comment => comment.phone===this.state.name).map( currentcomment => {
                    return  <div className="col-md-10" style={{boxShadow:"2px 2px 2px 2px grey",
                                    marginLeft:"50px", padding:"25px"}}>
                                <div className="Card mb-1">
                                    <div className="Card-body">
                                        <h2 className="card-title">{currentcomment.user}</h2>
                                        <p style={{ fontSize:"25px", paddingLeft:"50px" }}>
                                            {currentcomment.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            
                    }
                )}
            </div>
                
            </div>              
        )
    }
}