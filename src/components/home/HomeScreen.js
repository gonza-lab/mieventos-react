import React from 'react'
import { CardList } from '../card/CardList'
import { Presentation } from './Presentation'

export const HomeScreen = () => {
  return (
    <div className="home">
      <Presentation />
      <CardList cards={[1, 2, 3, 4]} />
    </div>
  )
}
