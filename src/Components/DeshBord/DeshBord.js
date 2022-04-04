import useUser from '../../Hooks/useUser';
import DisplayDeshBoar from '../DisplayDeshBord/DisplayDeshBoar';


const DeshBord = () => {

    const [users, setUsers] = useUser()   

   
    
    return (
        <div>
           <DisplayDeshBoar data={users}
           
           
           ></DisplayDeshBoar>
        </div>
    );
};

export default DeshBord;