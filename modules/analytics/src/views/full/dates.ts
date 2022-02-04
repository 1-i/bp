import moment from 'moment'

export const now = new Date()
export const thisWeek = moment()
  .startOf('week')
  .toDate()
export const lastWeekStart = moment()
  .subtract(1, 'weeks')
  .startOf('week')
  .toDate()
export const lastWeekEnd = moment()
  .subtract(1, 'weeks')
  .endOf('week')
  .toDate()
export const thisMonth = moment()
  .startOf('month')
  .toDate()
export const lastMonthStart = moment()
  .subtract(1, 'months')
  .startOf('month')
  .toDate()
export const lastMonthEnd = moment()
  .subtract(1, 'months')
  .endOf('month')
  .toDate()
export const thisYear = moment()
  .startOf('year')
  .toDate()
export const lastYearStart = moment()
  .subtract(1, 'years')
  .startOf('year')
  .toDate()
export const lastYearEnd = moment()
  .subtract(1, 'years')
  .endOf('year')
  .toDate()
export const last7days = moment()
  .subtract(7, 'days')
  .toDate()