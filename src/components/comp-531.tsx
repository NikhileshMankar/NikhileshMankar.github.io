import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"
import { motion } from "framer-motion"

const items = [
  {
    id: 1,
    date: "15th July 2024 - Present",
    title: "Assistant Professor",
    description:
      "Pimpri Chinchwad University SOET, Pune",
  },
  {
    id: 2,
    date: "5th Dec 2022 - 15th July 2024",
    title: "Assistant Professor",
    description:
      "D Y Patil University School of Engineering and Technology, Pune",
  },
  {
    id: 3,
    date: "18th July 2018 - 31st Oct 2022",
    title: "Assistant Professor",
    description:
      "D Y Patil Institute of Engineering and Technology, Pune",
  },
  {
    id: 4,
    date: "2015 - 2018",
    title: "Industry Exposure",
    description:
      "Alstone International, Bangalore & Nagpur",
  },
]

export default function ExperienceTimeline() {
  return (
    <Timeline defaultValue={3} className="px-16 md:pl-72">
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator className="bg-white/20" />
            <TimelineDate className="text-base group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-72 group-data-[orientation=vertical]/timeline:sm:w-60 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5 text-base">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent className="text-base text-white/80">{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
