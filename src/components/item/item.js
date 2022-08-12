import styles from './item.module.scss';
import { MdNavigateNext } from "react-icons/md";
import {Link} from 'react-router-dom';

function Item(props) {

    const locale = "fi-FI";
    const catchDate = new Date(props.data.catchDate).toLocaleDateString(locale);

    return (
    <div className={styles.item}>
        <div className={styles.item_data}>
            <div className={styles.item_type}>{props.data.type}</div>
            <div className={styles.item_weight}>{props.data.weight} KG</div>
            <div className={styles.item_length}>{props.data.length} CM</div>
            <div className={styles.item_catchDate}>{catchDate}</div>
            <div className={styles.item_whereFrom}>{props.data.whereFrom}Where from</div>
        </div>
        <div className={styles.item_edit}>
            <Link to ={"/edit/"+props.data.id}><MdNavigateNext /></Link>
        </div>
    </div>  
    )
}

export default Item;