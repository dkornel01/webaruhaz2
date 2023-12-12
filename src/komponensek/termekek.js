import { KepekLista } from './KepekLista';
import Kep from './komponensek/kepek.js';
function Termekek(){
return(
<div class="keparuhaz">
      {
        
        KepekLista.map((elem,index)=>{
          return (<Kep src={elem.kep} key={index} nev={elem.nev} ar={elem.ár} index={index} />)
        })
      }
      </div>
)
    }
export default termekek