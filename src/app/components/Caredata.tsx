
import { useState, useEffect} from 'react'
import { getcare } from '../actions/api/getcare'; 
import { useMyContext } from '../context/MyContext';

type Care = {
  id: number;
  ref_no: string;
  wash_symbol: string;
  fibre: string;
  zoordes: string;
  mpart_fw: string;
  coo: string;
  caretext: string;
  contract_id: string;
  createdAt: Date;
  updatedAt: Date;
}



export default  function Caredata() {
  const [cares, setCares] = useState<Care[]>([]);
  const { state1,state2,setState2,inputState2, setInputState2,setState3,setState4 } = useMyContext();
  console.log('setcare2 is running...')

  const handleRowClick = (id: number) => {
    console.log('Clicked on care number:', id);
    setState2(id);
    setState3(0);
    setState4(0);
  };
  console.log(state2);
  
  useEffect(() => {
    const fetchCare = async () => {
      const fetchedContracts = await getcare(state1);
      const sortedContracts = [...fetchedContracts].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      setCares(sortedContracts);
      console.log('useEffect is running on care!')
    };
    fetchCare();
  },[state1, inputState2]);


    
  return (
    <>
    {cares.map(care => (
      <tr key={care.id} onClick={() => handleRowClick(care.id)}>
        <td className='border border-black'>{care.ref_no}</td>
        <td className='border border-black'>{care.wash_symbol}</td>
        <td className='border border-black'>{care.fibre}</td>
        <td className='border border-black'>{care.zoordes}</td>
        <td className='border border-black'>{care.coo}</td>
        <td className='border border-black'>{care.caretext}</td>
        <td className='border border-black'>{care.mpart_fw}</td>
      </tr>
    ))}</>
  )
}
