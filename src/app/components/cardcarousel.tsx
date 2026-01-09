import React from "react"

import { CardCarousel } from "@/components/ui/card-carousel"

const CardCaroursalDemo = () => {
  return (
    <div className="w-full h-full">
      <CardCarousel
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
      />
    </div>
  )
}

export default CardCaroursalDemo
