
import { useState, useEffect} from 'react'
import { getother} from '../actions/api/getother'
import { useMyContext } from '../context/MyContext';
import Other from './Other';

type Other = {
  id: number;
  fef_no: string;
  label_type: string;
  carelabel_id: number;
  createdAt: Date;
  updatedAt: Date;
}



export default  function Otherdata() {
  const [others, setOthers] = useState<Other[]>([]);
  const {state2,state3, setState3, inputState3, setInputState3, setState4} = useMyContext();
  console.log('setother is running...')

  const handleRowClick = (id: number) => {
    console.log('Clicked on care number:', id);
    setState3(id);
    setState4(0);
  };
  console.log(state3);
  
  useEffect(() => {
    const fetchCare = async () => {
      const fetchedOthers = await getother(state2);
      const sortedOther = [...fetchedOthers].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      setOthers(sortedOther);
      console.log('useEffect is running on other!')
    };
    fetchCare();
  },[state2, inputState3]);

    
  return (
    <>
    {others.map(Other => (
      <tr key={Other.id} onClick={() => handleRowClick(Other.id)}>
        <td className='border border-black'>{Other.fef_no}</td>
        <td className='border border-black'>{Other.label_type}</td>
      </tr>
    ))}</>
  )
}
