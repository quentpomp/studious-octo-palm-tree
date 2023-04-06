import { convertToObject } from "typescript";
import { isUint16Array } from "util/types";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type Graph = {
  adjMatrix: number[][]
};

const setUpPlaces = (size: number) => {
  let places: Graph={adjMatrix: [[], [], [], [], []]};
  console.log(places.adjMatrix)
  for (let j: number=0; j<size; j++) {
    // let temp: number[] = []
    // places.adjMatrix[j] = temp
      for (let i: number=0; i<size; i++) {
          if (i === j) {places.adjMatrix[i].push(0)}
          else {places.adjMatrix[i].push(1)}
      }
  }
  return places
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    console.log(setUpPlaces(5))
    res.status(200).json({ name: 'John Doe' })
  }