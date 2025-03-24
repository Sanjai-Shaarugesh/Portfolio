

import {BackgroundLinesDemo} from './BackgroundLinesDemo'
import {ModeToggle} from './ModeToggle'
import {HeroScroll} from './HeroScroll'
import {TimeLine} from './TimeLine'
import {Meteor} from './Meteor'

export default function Home() {
  return (
    
    
    <div> 
      
      
      
    <BackgroundLinesDemo/>
    
    <div className='absolute top-3 left-2 '>
      <ModeToggle/>
    </div>
    
    <HeroScroll title='github' description='github profile'/>
    
  <div>
    <TimeLine/>
  </div>
  
  <div className='ml-50 mr-50'>
 <Meteor/>
  </div>
    </div>
    
    
     
      
      
    );
}
