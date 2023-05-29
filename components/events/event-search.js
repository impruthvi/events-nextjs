import { useRef } from "react";
import classes from "./events-search.module.css";

const EventSearch = (props) => {

    const yearInputRef = useRef();
    const monthInputRef = useRef();
    0
    const submitHandler = (event) => {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);

    };


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select name="year" id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select name="month" id="month" ref={monthInputRef}>

                        <option value="1">January</option>
                        <option value="2">Febuary</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">Septemper</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">Decemper</option>
                        
                    </select>
                </div>
            </div>

            <button>Find Events</button>
        </form>
    );
};

export default EventSearch;
