import { BackgroundLinesDemo } from './BackgroundLinesDemo';
import { ModeToggle } from './ModeToggle';
import { HeroScroll } from './HeroScroll';
import { TimeLine } from './TimeLine';
import { Meteor } from './Meteor';

export default function Home() {
  return (
    <div>
      <BackgroundLinesDemo
        title="Shaarugesh"
        title2="portfolio"
        description="Hi it's me shaaru this my portfolio"
      />

      <div className="absolute top-3 left-2 ">
        <ModeToggle />
      </div>

      <HeroScroll title="Github" description="Github profile 😸" />

      <div>
        <TimeLine />
      </div>

      <div className="ml-90 mr-50">
        <Meteor />
      </div>
    </div>
  );
}
