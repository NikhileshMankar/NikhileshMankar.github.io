import BlurFade from '@/components/magicui/blur-fade'
import React from 'react'
import { HackathonCard } from '../components/hackathon-card';
const BLUR_FADE_DELAY = 0.04;
import { DATA } from "@/data/data";

const Roles = () => {
  return (
    <section id="achievements" className='bg-[#07080a] w-full  pb-[64px] overflow-hidden'>
        <div className="space-y-12 max-w-4xl p-4 md:py-12 mx-auto justify-center   ">

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed divide-white/20 border-l border-white/20">
              {DATA.achievements.map((achievement, id: number) => {
                const dateInfo = 'dates' in achievement ? achievement.dates : 'year' in achievement ? achievement.year : '';
                return (
                <BlurFade
                  key={achievement.title + dateInfo}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={achievement.title}
                    description={achievement.description}
                    location={achievement.type}
                    dates={dateInfo}
                    image={'icon' in achievement ? achievement.icon : undefined}
                    links={undefined}
                  />
                </BlurFade>
                );
              })}
            </ul>
          </BlurFade>
        </div>
      </section>
  )
}

export default Roles
