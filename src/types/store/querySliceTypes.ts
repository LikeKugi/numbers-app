export type QueryType = 'trivia' | 'year' | 'math' | 'date'


export interface IQuerySlice {
  type: QueryType
  initialNumber: number
  maxNumbers: 20
}

