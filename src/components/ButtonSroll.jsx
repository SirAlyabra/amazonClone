import '../styles/ButtonScroll.css'
import { AiOutlineArrowRight as Arrow} from "react-icons/ai";
function ButtonScroll({direccion, handleScroll}) {
    return(
        <div className={direccion} onClick={handleScroll}>
            <Arrow className={`icon-${direccion}`}/>
        </div>
    );
}

export default ButtonScroll;