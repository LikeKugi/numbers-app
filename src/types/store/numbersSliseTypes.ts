export interface INumbers {
  [K: number]: string,
}

export interface INumbersSlice {
  numbers: INumbers
  isLoading: boolean,
  error: string
}
