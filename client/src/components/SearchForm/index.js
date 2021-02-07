import React from "react";
import "./style.css";


const SearchForm = props => {
    // const [category, setCategory] = useState("")
    // const [options, setOptions] = useState([])
    // const handleCategoryInput = (event) => {
    //     setCategory(event.target)
    // }
    // const handleSubmitCategory = (event) => {
    //     event.preventDefault();
    //     setOptions(options.push(category))
    // }
    return (
        <form onSubmit={props.submitForm}>
            <div className="row">
                <div className="large-12 columns">
                    <label>Name
                        <input value={props.name} onChange={props.setName} type="text" placeholder="large-12.columns" />
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="large-10 columns">
                    <label>Select Category
                        <input value={props.type} onChange={props.setType} placeholder="type" type="text" />
                    </label>
                    <button>Add New Category</button>
                </div>
                <div className="large-2 columns">
                    <label> Amount
                        <input onChange={props.setAmount} type="text" placeholder="large-4.columns" />
                    </label>
                </div>
            </div>
            {/* <div className = "row">
                <div className="large-10 columns">
                    <label> New Category
                        <input onChange = {handleCategoryInput} type="text" placeholder="large-12.columns" />
                    </label>
                    <button onClick = {handleSubmitCategory}>Add Category</button>
                </div>               
            </div> */}
            <button >Submit</button>
        </form>
    )


}



export default SearchForm