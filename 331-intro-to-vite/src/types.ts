export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
  attending: boolean 
}
export interface MessageState{
  message:string
}
export interface EventSate{
  event:Event|null
}