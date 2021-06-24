import React, {Fragment} from 'react';
const Form = (props) => {
    return(
            <Fragment>
                <form className="form" onSubmit={props.getData}>
                    <input type="text" name="city" placeholder="City .." />
                    <input type="text" name="country" placeholder="Country .." />
                    <button>Get Weather</button>
                </form>
            </Fragment>
        )
}
            export default Form;