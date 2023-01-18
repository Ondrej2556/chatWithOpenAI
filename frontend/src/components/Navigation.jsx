import { FiLogOut } from "react-icons/fi";

const Navigation = () => {
    return (
        <nav>
        <button onClick={()=>window.location.reload()} id='button'><FiLogOut /></button>
        </nav>
    )
}
export default Navigation;