import HomeCard from '../components/HomeCard'
import HomeCarrousel from '../components/HomeCarrousel'

import { v4 as uuidv4 } from 'uuid';

import cards from '../data/cards.json'
import HomeFooter from '../components/HomeFooter';

const HomePage = () => {
    
  return (
    <div>
        <div className="position-relative">

        
          <div className={window.innerWidth < 450 ?'textContMob position-absolute start-50 translate-middle p-1' : 'textCont position-absolute start-50 translate-middle p-1' }>
            <h1 className={window.innerWidth < 450 ? 'imgTextMob' : 'imgText'}>"60 años Caminando Juntos"</h1>
          </div>
          <HomeCarrousel/>
        </div>
        
        <div className="d-flex flex-wrap justify-content-center">
            {cards.sort((a,b)=>a.position-b.position).map(card=><HomeCard key={uuidv4()} card={card}/>)}
        </div>
        <HomeFooter/>
        
        
    </div>
  )
}

export default HomePage