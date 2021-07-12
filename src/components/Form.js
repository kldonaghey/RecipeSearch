import './form.module.css'

const Form = ({ getMealInfo }) => (
    <form onSubmit= { getMealInfo } className="search__form">
        <input type="text"
            autoComplete="off" 
            name="searchValue"
            placeholder="Enter an ingredient"/>
        <button>Search</button>
    </form>
);

export default Form;