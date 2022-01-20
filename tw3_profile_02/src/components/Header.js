import {useState} from 'react'

function Header() {

  const [iconsStat, setIconStat] = useState('open');

  const lineOneA = "w-full h-1 bg-gray-700 my-1";
  const lineTwoA = "w-full h-1 bg-gray-700 my-1";
  const lineOneB = "w-full h-1 bg-gray-700 rotate-45 relative top-2";
  const lineTwoB = "w-full h-1 bg-gray-700 -rotate-45 relative top-1";



  const close = () => (
    iconsStat === 'open' ? setIconStat('close') : setIconStat('open')
  )


  return (
    <div>

      <div className="w-10 h-10 p-2 bg-gray-300" onClick={close}>
        <div className={iconsStat === 'open' ? lineOneA : lineOneB }></div>
        <div className={iconsStat === 'open' ? lineTwoA : lineTwoB }></div>
      </div>

      
    </div>
  )
}

export default Header
