export type Props = {
  id: number
  price: number
  visible: boolean
  setVisible: Function
  closeModal: Function
}

export type CalendarRange<D> = {
  startDate?: D
  endDate?: D
}
