export interface INumber {
  text: string,
  found: boolean,
  number: number
  type: 'trivia' | 'math' | 'date' | 'year'
  date?: string
  year?: string
}

export interface INumberSlice {
  number: INumber | null,
  isLoading: boolean,
  error: string,
}
