import "./App.css";
import { Component } from 'react'

import Child from "./child";

 class Parent extends Component {

   state = {
      name: "",
      age: "",
      rating: "",
      click: true,
      data: []
   }

   change = (event) => {
      this.setState({ [event.target.name]: event.target.value })
   }

   togglefunction = () => {
      this.setState({ click: !this.state.click })
   }

   handleClick = () => {
      let obj = {
         name: this.state.name,
         department: this.state.department,
         rating: this.state.rating
      }
      this.state.data.push(obj)
      this.setState({ data: this.state.data, click: false, name: "", department: "", rating: "" })
   }

   render() {
      return (
         <>
            {this.state.click ?
               <>
                  <h1 className="center">EMPLOYEE FEEDBACK FORM</h1>
                  <div className="input">
                     Name:<input type="text" id="area" name="name" value={this.state.name} placeholder=""
                        onChange={this.change} />
                  </div>
                  <div className="input" >
                     Department:<input type="text" id="area" name="department" value={this.state.department} placeholder=""
                        onChange={this.change} />
                  </div>
                  <div className="input">
                     Rating:<input type="number" id="area" name="rating" value={this.state.rating} placeholder=""
                        onChange={this.change} />
                  </div>
                  <div id="btn">
                     <button onClick={this.handleClick}>Submit</button>
                  </div>
               </>
               :
               <Child value={this.state.data} set={this.togglefunction} />
            }
         </>
      )
   }
}
export default Parent
