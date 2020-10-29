import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {container, row} from 'reactstrap'
import axios from 'axios'


export default class PhonesList extends Component {
    constructor(props) {
        super(props)
        this.state = {phones: [],
            ram_2:'', ram_4:'', ram_6:'', ram_8:'',
            display_HDplus:'', display_FullHD:'', display_FullHDplus:'', display_quadHD:'',
            storage_32:'', storage_64:'', storage_128:'', storage_256:'',
            comp_realme:'abcd', comp_oppo:'abcd',comp_redmi:'abcd', comp_honor:'abcd', comp_samsung:'abcd',comp_apple:'abcd',
            price_sort:''
        }    
    } 

    componentDidMount() {
        axios.get('/api/phones/')
            .then(response => {
                this.setState({ phones: response.data })
            })
            .catch((error) => {
                console.log(error)
            })            
    }   

    select_ram_2 = (e) =>  {
        e.target.checked ? this.setState({ram_2:e.target.value}) : this.setState({ram_2:""})
    }
    select_ram_4 = (e) =>  {
        e.target.checked ? this.setState({ram_4:e.target.value}) : this.setState({ram_4:""})
    }
    select_ram_6 = (e) =>  {
        e.target.checked ? this.setState({ram_6:e.target.value}) : this.setState({ram_6:""})
    }
    select_ram_8 = (e) =>  {
        e.target.checked ? this.setState({ram_8:e.target.value}) : this.setState({ram_8:""})
    }


    select_display_HDplus = (e) =>  {
        e.target.checked ? this.setState({display_HDplus:e.target.value}) : this.setState({display_HDplus:""})
    }
    select_display_FullHD = (e) =>  {
        e.target.checked ? this.setState({display_FullHD:e.target.value}) : this.setState({display_FullHD:""})
    }
    select_display_FullHDplus = (e) =>  {
        e.target.checked ? this.setState({display_FullHDplus:e.target.value}) : this.setState({display_FullHDplus:""})
    }
    select_display_quadHD = (e) =>  {
        e.target.checked ? this.setState({display_quadHD:e.target.value}) : this.setState({display_quadHD:""})
    }


    select_storage_32 = (e) =>  {
        e.target.checked ? this.setState({storage_32:e.target.value}) : this.setState({storage_32:""})
    }
    select_storage_64 = (e) =>  {
        e.target.checked ? this.setState({storage_64:e.target.value}) : this.setState({storage_64:""})
    }
    select_storage_128 = (e) =>  {
        e.target.checked ? this.setState({storage_128:e.target.value}) : this.setState({storage_128:""})
    }
    select_storage_256 = (e) =>  {
        e.target.checked ? this.setState({storage_256:e.target.value}) : this.setState({storage_256:""})
    }


    select_comp_realme = (e) =>  {
        e.target.checked ? this.setState({comp_realme:e.target.value}) : this.setState({comp_realme:'abcd'})
    }
    select_comp_oppo = (e) =>  {
        e.target.checked ? this.setState({comp_oppo:e.target.value}) : this.setState({comp_oppo:'abcd'})
    }
    select_comp_redmi = (e) =>  {
        e.target.checked ? this.setState({comp_redmi:e.target.value}) : this.setState({comp_redmi:'abcd'})
    }
    select_comp_honor = (e) =>  {
        e.target.checked ? this.setState({comp_honor:e.target.value}) : this.setState({comp_honor:'abcd'})
    }
    select_comp_samsung = (e) =>  {
        e.target.checked ? this.setState({comp_samsung:e.target.value}) : this.setState({comp_samsung:'abcd'})
    }
    select_comp_apple = (e) =>  {
        e.target.checked ? this.setState({comp_apple:e.target.value}) : this.setState({comp_apple:'abcd'})
    }


    price_high_to_low = (e) => {
        this.setState({
            price_sort: true
        })
    }
    price_low_to_high = (e) => {
        this.setState({
            price_sort: false
        })
    }


    render() {
        
        localStorage.setItem("ram_2", this.state.ram_2)
        localStorage.setItem("ram_4", this.state.ram_4)
        localStorage.setItem("ram_6", this.state.ram_6)
        localStorage.setItem("ram_8", this.state.ram_8)
        localStorage.setItem("display_HDplus", this.state.display_HDplus)
        localStorage.setItem("display_FullHD", this.state.display_FullHD)
        localStorage.setItem("display_FullHDplus", this.state.display_FullHDplus)
        localStorage.setItem("display_quadHD", this.state.display_quadHD)
        localStorage.setItem("storage_32", this.state.storage_32)
        localStorage.setItem("storage_64", this.state.storage_64)
        localStorage.setItem("storage_128", this.state.storage_128)
        localStorage.setItem("storage_256", this.state.storage_256)
        localStorage.setItem("comp_realme", this.state.comp_realme)
        localStorage.setItem("comp_oppo", this.state.comp_oppo)
        localStorage.setItem("comp_redmi", this.state.comp_redmi)
        localStorage.setItem("comp_honor", this.state.comp_honor)
        localStorage.setItem("comp_samsung", this.state.comp_samsung)
        localStorage.setItem("comp_apple", this.state.comp_apple)


        const ram_2 = Number(localStorage.getItem("ram_2"))
        const ram_4 = Number(localStorage.getItem("ram_4"))
        const ram_6 = Number(localStorage.getItem("ram_6"))
        const ram_8 = Number(localStorage.getItem("ram_8"))
        const display_HDplus = localStorage.getItem("display_HDplus")
        const display_FullHD = localStorage.getItem("display_FullHD")
        const display_FullHDplus = localStorage.getItem("display_FullHDplus")
        const display_quadHD = localStorage.getItem("display_quadHD")
        const storage_32 = Number(localStorage.getItem("storage_32"))
        const storage_64 = Number(localStorage.getItem("storage_64"))
        const storage_128 = Number(localStorage.getItem("storage_128"))
        const storage_256 = Number(localStorage.getItem("storage_256"))
        const comp_realme = localStorage.getItem("comp_realme")
        const comp_oppo = localStorage.getItem("comp_oppo")
        const comp_redmi = localStorage.getItem("comp_redmi")
        const comp_honor = localStorage.getItem("comp_honor")
        const comp_samsung = localStorage.getItem("comp_samsung")
        const comp_apple = localStorage.getItem("comp_apple")

        const all_phones = this.state.phones

        // empty field variables
        const empty_display_fields = display_HDplus === '' && display_FullHD === '' && display_FullHDplus === '' && display_quadHD === ''
        const empty_storage_fields = storage_32 === 0 && storage_64 === 0 && storage_128 === 0 && storage_256 === 0
        const empty_company_fields = comp_realme === 'abcd' && comp_oppo === 'abcd' && comp_redmi === 'abcd' && comp_honor === 'abcd' && comp_samsung === 'abcd' && comp_apple === 'abcd'
        const empty_ram_fields = ram_2 === 0 && ram_4 === 0 && ram_6 === 0 && ram_8 === 0

        // filter field variables
        function ram_filter_fields(phone){
            return phone.ram === ram_2 || phone.ram === ram_4 || phone.ram === ram_6 || phone.ram === ram_8
        }

        function storage_filter_fields(phone){
            return phone.storage === storage_32 || phone.storage === storage_64 || phone.storage === storage_128 || phone.storage === storage_256
        }

        function company_filter_fields(phone){
            return phone.name.includes(comp_realme) || phone.name.includes(comp_oppo) || phone.name.includes(comp_redmi) || phone.name.includes(comp_honor) || phone.name.includes(comp_samsung) || phone.name.includes(comp_apple)
        }

        function display_filter_fields(phone){
            return phone.display === display_HDplus || phone.display === display_FullHD || phone.display === display_FullHDplus || phone.display === display_quadHD
        }

        // Main Filter Function
        function phones_filter() {
            // e - d s c
            if ( empty_display_fields && empty_storage_fields && empty_company_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone)
                )
            }
            // e - r s c
            else if ( empty_ram_fields && empty_storage_fields && empty_company_fields ) {
                return all_phones.filter(
                    (phone) => display_filter_fields(phone)
                )
            } 
            // e - r d c
            else if ( empty_ram_fields && empty_display_fields && empty_company_fields ) {
                return all_phones.filter(
                    (phone) => storage_filter_fields(phone)
                )
            }
            // e - r d s
            else if ( empty_ram_fields && empty_display_fields && empty_storage_fields ) {
                return all_phones.filter(
                    (phone) => company_filter_fields(phone)
                )
            }
                  
            //e - r d
            else if ( empty_ram_fields && empty_display_fields ) {
                return all_phones.filter(
                    (phone) => storage_filter_fields(phone) && company_filter_fields(phone)      
                )
            }
            // e - r s
            else if ( empty_ram_fields && empty_storage_fields ) {
                return all_phones.filter(
                    (phone) => display_filter_fields(phone) && company_filter_fields(phone)
                )
            }
            // e - r c
            else if ( empty_ram_fields && empty_company_fields ) {
                return all_phones.filter(
                    (phone) => display_filter_fields(phone) && storage_filter_fields(phone)
                )
            }
            // e - d s
            else if ( empty_display_fields && empty_storage_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone) && company_filter_fields(phone)
                )
            }
            // e - d c
            else if ( empty_display_fields && empty_company_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone) && storage_filter_fields(phone)
                )
            }
            // e - s c
            else if ( empty_storage_fields && empty_company_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone) && display_filter_fields(phone)
                )
            }

            // e - r
            else if ( empty_ram_fields ){
                return all_phones.filter(
                    (phone) => display_filter_fields(phone)
                                &&
                                storage_filter_fields(phone)
                                &&
                                company_filter_fields(phone)
                ) 
            }
            // e - s
            else if ( empty_storage_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone)
                                &&
                                display_filter_fields(phone)
                                &&
                                company_filter_fields(phone)
                )
            }
            // e - d
            else if ( empty_display_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone)
                                &&
                                storage_filter_fields(phone)
                                &&
                                company_filter_fields(phone)
                ) 
            }
            // e - c
            else if ( empty_company_fields ) {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone)
                                &&
                                storage_filter_fields(phone)
                                &&
                                display_filter_fields(phone)
                )
            }

            // all e
            else {
                return all_phones.filter(
                    (phone) => ram_filter_fields(phone)
                                &&
                                display_filter_fields(phone)
                                &&
                                storage_filter_fields(phone)
                                &&
                                company_filter_fields(phone)
                )
            }                       
        }


        const filtering =   ram_2===0 && ram_4===0 && ram_6===0 && ram_8===0
                            && display_HDplus==='' && display_FullHD==='' && display_FullHDplus==='' && display_quadHD===''
                            && storage_32===0 && storage_64===0 && storage_128===0 && storage_256===0
                            && comp_realme==='abcd' && comp_oppo==='abcd' && comp_redmi==='abcd' && comp_honor==='abcd' && comp_samsung==='abcd' && comp_apple==='abcd' 
                            ?
        
            this.state.phones.sort((a ,b) => 
                    this.state.price_sort ? b.price - a.price : a.price - b.price).map( (phone) => {                           
                return  <div className="col-md-3" key={phone._id}> 
                            <div className="card mb-4" style={{boxShadow:"5px 5px 5px 5px grey", paddingLeft:"25px"}}>
                                <div className="card-body">
                                    <h2 className="card-title" style={{fontWeight:"bold"}}>{phone.name}</h2>
                                    <img src={phone.imageBase64} style={{width:"150px", height:"150px"}} alt={phone.name}/><br/>
                                    
                                    RAM : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.ram} GB</div> <br/>
                                    DISPLAY : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.display}</div> <br/>
                                    STORAGE : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.storage} GB</div> <br/>
                                    PRICE : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.price}</div> <br/>
                                    <a href={"/" + phone._id} className="stretched-link"> </a>
                                </div>
                            </div>
                        </div>
                    }) 
            :

            phones_filter().sort((a, b) => 
                this.state.price_sort ? b.price - a.price : a.price - b.price).map( (phone) => {
                return  <div className="col-md-3" key={phone._id}> 
                            <div className="card mb-4" style={{boxShadow:"5px 5px 5px 5px grey", paddingLeft:"25px"}}>
                                <div className="card-body" >
                                    <h2 className="card-title" style={{fontWeight:"bold"}}>{phone.name}</h2>
                                    <img src={phone.imageBase64} style={{width:"150px", height:"150px"}} alt={phone.name}/><br/>
                                    
                                    RAM : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.ram} GB</div> <br/>
                                    DISPLAY : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.display}</div> <br/>
                                    STORAGE : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.storage} GB</div> <br/>
                                    PRICE : <div style={{display:"inline-block", fontWeight:"bold", fontSize:"20px"}}>{phone.price}</div> <br/>
                                    <a href={"/" + phone._id} className="stretched-link"> </a>
                                </div>
                            </div>
                        </div>
                    })

        
        return (
            <div>
                <div className="row">
                    <div className="col-md-2 card" style={{boxShadow:"5px 5px 20px 5px grey", padding:"10px"}}>

                        <div className="btn btn-success" style={{fontWeight:"bold", fontSize:"17px" }}>RAM</div>                        
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="2"
                                    onChange={this.select_ram_2}
                                />
                                &nbsp; 2 GB
                            </label>

                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="4"
                                    onChange={this.select_ram_4}
                                />
                                &nbsp; 4 GB
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="6"
                                    onChange={this.select_ram_6}
                                />
                                &nbsp; 6 GB
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="8"
                                    onChange={this.select_ram_8}
                                />
                                &nbsp; 8 GB
                            </label>
                        
                        <div className="btn btn-success" style={{fontWeight:"bold", fontSize:"17px" }}>DISPLAY</div>
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="HD+"
                                    onChange={this.select_display_HDplus}
                                />
                                &nbsp; HD+
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="FULL HD"
                                    onChange={this.select_display_FullHD}
                                />
                                &nbsp; FULL HD
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="FULL HD+"
                                    onChange={this.select_display_FullHDplus}
                                />
                                &nbsp; FULL HD+
                            </label>

                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Quad HD"
                                    onChange={this.select_display_quadHD}
                                />
                                &nbsp; Quad HD
                            </label>

                        <div className="btn btn-success" style={{fontWeight:"bold", fontSize:"17px" }}>STORAGE</div>
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="32"
                                    onChange={this.select_storage_32}
                                />
                                &nbsp; 32 GB
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="64"
                                    onChange={this.select_storage_64}
                                />
                                &nbsp; 64 GB
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="128"
                                    onChange={this.select_storage_128}
                                />
                                &nbsp; 128 GB
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="256"
                                    onChange={this.select_storage_256}
                                />
                                &nbsp; 256 GB
                            </label>

                        <div className="btn btn-success" style={{fontWeight:"bold", fontSize:"17px" }}>MANUFACTURER</div>
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Realme"
                                    onChange={this.select_comp_realme}
                                />
                                &nbsp; Realme
                            </label>
                            
                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Oppo"
                                    onChange={this.select_comp_oppo}
                                />
                                &nbsp; Oppo
                            </label>

                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Redmi"
                                    onChange={this.select_comp_redmi}
                                />
                                &nbsp; Redmi
                            </label>

                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Honor"
                                    onChange={this.select_comp_honor}
                                />
                                &nbsp; Honor
                            </label>

                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Samsung"
                                    onChange={this.select_comp_samsung}
                                />
                                &nbsp; Samsung
                            </label>

                            <label style={{fontWeight:"bold", fontSize:"17px"}}>
                                <input
                                    type="checkbox"
                                    value="Apple"
                                    onChange={this.select_comp_apple}
                                />
                                &nbsp; Apple
                            </label>

                    </div>

                    <div className="col-md-10">
                        <div style={{display:"inline", fontSize:"20px", fontWeight:"bold"}}>SORT BY - </div>
                        <div className="btn btn-primary" onClick={this.price_high_to_low}
                                style={{fontSize:"18px", fontWeight:"bold"}}>
                            Price - High to Low
                        </div>
                        &nbsp;&nbsp;
                        <div className="btn btn-primary" onClick={this.price_low_to_high}
                                style={{fontSize:"18px", fontWeight:"bold"}}>
                            Price - Low to High
                        </div>
                        
                        <div className="row" style={{marginTop:"20px"}}>                          
                            {filtering}
                        </div>
                     </div>

                </div>                                        
            </div>
        )
    }
}

