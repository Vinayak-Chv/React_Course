import PropTypes from "prop-types"

function Students(props) {
    return(
        <div className="stud">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Students.propTypes = {
name: PropTypes.string,
age: PropTypes.number,
isStudent: PropTypes.bool,
}

// Logic is good but this is not working
Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Students