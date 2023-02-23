import { ReactComponentElement } from 'react'

export interface Projects {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  source: string
  visit: string
}
export interface TimeLineData {
  year: number
  text: string
}
export interface Technologies {
  id: number
  icon: ReactComponentElement
  skill: string
  description: string
}
export interface Character {
  quality: string
}
export interface Blog {
  id: number
  title: string
  image: string
  date: string
}
