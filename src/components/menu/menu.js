import { Link } from 'react-router-dom';
import { MdViewList } from 'react-icons/md';
import { MdTimeline } from 'react-icons/md';
import { MdSettings } from 'react-icons/md'; 
import styles from './menu.module.scss';

function Menu () {
    return (
     <div className={styles.menu}>
         <div><Link to='/'><MdViewList /></Link></div>
         <div><Link to='stats'><MdTimeline /></Link></div>
         <div><Link to='settings'><MdSettings /></Link></div>
     </div>
    );
    
}

export default Menu;