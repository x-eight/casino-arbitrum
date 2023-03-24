import React from "react"
import { Box, Flex } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
  fetchData: () => void
  hasMore: boolean
}

function InfiniteScroll({ children, fetchData, hasMore }: Props) {
  const lastElementRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    let observer: IntersectionObserver
    if (hasMore) {
      if (lastElementRef.current) {
        observer = new IntersectionObserver((entries) => {
          const first = entries[0]
          if (first.isIntersecting) {
            if (fetchData !== undefined) {
              fetchData()
            }
          }
        })
        observer.observe(lastElementRef.current)
      }
    }

    return () => {
      if (observer && lastElementRef.current) {
        observer.unobserve(lastElementRef.current)
      }
    }
  }, [fetchData])

  return (
    <Box h="full">
      {children}
     
    </Box>
  )
}

export default InfiniteScroll