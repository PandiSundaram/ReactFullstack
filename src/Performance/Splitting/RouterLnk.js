
import {useNavigate,Link} from 'react-router-dom'

const RouterLnk = () =>{

    const navigate = useNavigate();


    const linktoAddress = () =>{

        navigate('/address')
    }

    return(<div>

            <p><Link to="/name">Name</Link></p>

             <br>
             </br>
             {/* <p><Link to="/address">Address</Link></p> */}
             <p onClick={() => linktoAddress()}>Address</p>

        </div>)



}

export default RouterLnk;