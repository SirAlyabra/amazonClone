import '../styles/ButtonScroll.css'
import { AiOutlineArrowRight as Arrow} from "react-icons/ai";
function ButtonScroll({direccion}) {
    return(
        <div className={direccion}>
            <Arrow className={`icon-${direccion}`}/>
        </div>
    );
}

export default ButtonScroll;