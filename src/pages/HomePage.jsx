import HomeCard from '../components/HomeCard'
import HomeCarrousel from '../components/HomeCarrousel'

import { v4 as uuidv4 } from 'uuid';

import cards from '../data/cards.json'
import HomeFooter from '../components/HomeFooter';

const HomePage = () => {

  return (
    <div>
        <div className="position-relative col-md-8 col-12  mx-auto">
          <div className={window.innerWidth < 450 ?'grad-bg-mob' : 'grad-bg' }>
            <div className={window.innerWidth < 450 ?'grad-bg-mob' : 'grad-bg' }>
              <h1 className={window.innerWidth < 450 ? 'imgTextMob' : 'imgText'}>"60 años Caminando Juntos"</h1>
            </div>
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