import React, {Component} from 'react'
import axios from 'axios'


export default class PhoneUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            storage: 0,
            ram: 0,
            display: '',
            price: 0,
            file: '',
            imageBase64 : ''
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onChangeStorage = (e) => {
        this.setState({
            storage: e.target.value
        })
    }
    onChangeRam = (e) => {
        this.setState({
            ram: e.target.value
        })
    }
    onChangeDisplay = (e) => {
        this.setState({
            display: e.target.value
        })
    }
    onChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    onImageChange = (e) => {        
        this.setState({
            file: e.target.files[0]
        })

        this.getBase64(e.target.files[0], (result) => {
            this.setState({
                imageBase64: result
            })
        })
    }

    getBase64 = (file, cb) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function() {
            cb(reader.result)
        }
        reader.onerror = function(error) {
            console.log('Error: ', error)
        }
    }

    onPhoneSubmit = (e) => {
        e.preventDefault()     

        console.log(this.state.imageBase64)

        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.name);
        formData.append('storage', this.state.storage);
        formData.append('ram', this.state.ram);
        formData.append('display', this.state.display);
        formData.append('price', this.state.price);
        formData.append('imageBase64', this.state.imageBase64);


        axios.post('http://localhost:5000/api/phones/add/', formData)
            .then( res => alert("The file is successfully uploaded"))

        window.location = "/add_phone"
    }

    render() {

        console.log(this.state.imageBase64)
        return (
            <div>
                {this.state.imageBase64}
                <form onSubmit={this.onPhoneSubmit} encType="multipart/form-data" >

                    <div className="form-group">
                        <label>
                            Name: 
                            <input
                                required
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />      
                        </label>                    
                    </div>

                    <div className="form-group">
                        <label>
                            Storage: 
                            <input
                                required
                                type="text"
                                className="form-control"
                                value={this.state.storage}
                                onChange={this.onChangeStorage}
                            />      
                        </label>                    
                    </div>

                    <div className="form-group">
                        <label>
                            Ram: 
                            <input
                                required
                                type="text"
                                className="form-control"
                                value={this.state.ram}
                                onChange={this.onChangeRam}
                            />      
                        </label>                    
                    </div>

                    <div className="form-group">
                        <label>
                            Display: 
                            <input
                                required
                                type="text"
                                className="form-control"
                                value={this.state.display}
                                onChange={this.onChangeDisplay}
                            />      
                        </label>                    
                    </div>

                    <div className="form-group">
                        <label>
                            Price: 
                            <input
                                required
                                type="text"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                            />      
                        </label>                    
                    </div>

                    <div className="form-group">
                        <label>
                            Image: 
                            <input
                                required
                                type="file"  
                                name="image"                           
                                className="form-control"
                                onChange={this.onImageChange}
                            />      
                        </label>                    
                    </div>

                    <div>
                        <input type="submit" value="POST" className="btn btn-primary" />
                    </div>
                    
                </form>

            </div>
        )
       
    }
}
