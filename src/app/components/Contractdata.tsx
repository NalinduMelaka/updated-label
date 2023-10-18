
import { useState, useEffect} from 'react'
import { getcontract } from '../actions/api/getcontract';
import { useMyContext } from '../context/MyContext';

type Contract = {
  constractno: string;
  season: string;
  stroke_desc: string;
  prodesc: string;
  tdept: string;
  stroke_id: string;
  createdAt: Date;
  updatedAt: Date;
}

type Props = {
  strokeno: string;
}

export default  function Contractdata({ strokeno }: Props) {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const { state1,setState1, inputState1, setState3,setState4,setState2 } = useMyContext();
  console.log('setcontract is running...')

  const handleRowClick = (contractNo: string) => {
    console.log('Clicked on contract number:', contractNo);
    setState1(contractNo);
    setState2(0);
    setState3(0);
    setState4(0);
  };
  console.log(state1);
  
  useEffect(() => {
    const fetchContracts = async () => {
      const fetchedContracts = await getcontract(strokeno);
      const sortedContracts = [...fetchedContracts].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      setContracts(sortedContracts);
      console.log('useEffect is running!')
    };
    fetchContracts();
  },[strokeno,inputState1]);

    
  return (
    <>
    {contracts.map(contract => (
      <tr key={contract.constractno} onClick={() => handleRowClick(contract.constractno)}>
        <td className={`border border-black ${state1 === contract.constractno?'bg-cyan-100':'' }`}></td>
        <td className='border border-black'>{contract.stroke_id}</td>
        <td className='border border-black'>{contract.constractno}</td>
        <td className='border border-black'>{contract.season}</td>
        <td className='border border-black'>{contract.tdept}</td>
        <td className='border border-black'>{contract.prodesc}</td>
        <td className='border border-black'>{contract.stroke_desc}</td>
      </tr>
    ))}</>
  )
}
