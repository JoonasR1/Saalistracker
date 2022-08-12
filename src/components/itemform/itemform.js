import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ItemForm(props){

    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.amount = parseFloat(storedvalues.amount);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onItemSubmit(storedvalues);
        history.push("/");
    }

    const initialState = props.data ? props.data : {
        type: props.types ? props.types[0]: "",
        weight: 0,
        length: 0, 
        catchDate: new Date().toISOString().substring(0,10),
        whereFrom: "",
    };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleDelete = (event) => {
        event.preventDefault();
        props.onItemDelete(values.id);
        history.push("/");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>

                    <div className={styles.form_row}>
                        <div>
                            <label htmlFor="type">Kalalajit:</label>
                            <select name="type" onChange={handleChange} value={values.type} required>
                                { props.types.map ((type) => <option key={type}value={type}>{type}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className={styles.form_row}>
                        <div>
                            <label htmlFor="amount">Paino:</label>
                            <input type="number" name="amount" step="0.01" onChange={handleChange} values={values.amount} required/>
                        </div>
                        <div>
                            <label htmlFor="paymentDate">Pituus:</label>
                            <input type="number" name="amount" step="0.01" onChange={handleChange} values={values.amount} required/>
                        </div>
                    </div>
                    <div className={styles.form_row}>
                        <div>
                            <label htmlFor="periodStart">Mistä saatu:</label>
                            <input type="number" name="amount" step="0.01" onChange={handleChange} values={values.amount} required/>
                        </div>
                        <div>
                            <label htmlFor="periodEnd">Milloin saatu:</label>
                            <input type="date" name="periodEnd" onChange={handleChange} values={values.catchDate}/>
                        </div>
                    </div>
                    <div className={styles.form_row}>
                    </div>
                    <div className={styles.form_row}>
                        <div>
                            <Button primary type="submit">{props.data ? "TALLENNA" : "LISÄÄ" }</Button>
                        </div>
                        <div>
                            <Button onClick={handleCancel}>PERUUTA</Button>
                        </div>
                    </div>  
                    {props.onItemDelete ? 
                        <div className={styles.form_row}>
                        <div>
                            <Button onClick={handleDelete}>POISTA</Button>
                        </div> 
                        <div></div> 
                    </div>  : "" }
                    
                </div>
            </form>
        </div>
    );
}

export default ItemForm;