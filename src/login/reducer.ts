import { Action, combineReducers } from 'redux'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { HomeTopPagesEnum } from '../constants'
import { actions } from './actions'
// NOTE: Below are just an example.

export interface State {
  /*
   * NOTE: switch home screen's content depending on the user's status in the future.
   * For the initial development userStatus consider as number
   */
  userStatus: number
}

const initialState: State = {
  userStatus: HomeTopPagesEnum.TopPageMenu,
}

/*
 * topPage onPressTakeExam button action handler
 */
const takeExamHandler = (state: State, payload: {}): State => ({
  userStatus: HomeTopPagesEnum.TopPageConfirmApplication,
})

/*
 * topPage onPressLinkRiskInspection button action handler
 */
const linkRiskInspectionHandler = (state: State, payload: {}): State => ({
  ...state,
})

/*
 * topPage onPressLinkInspectionFlow button action handler
 */
const linkInspectionFlowHandler = (state: State, payload: {}): State => ({
  ...state,
})

export const reducer = reducerWithInitialState(initialState)
  .case(actions.takeExam, takeExamHandler)
  .case(actions.linkRiskInspection, linkRiskInspectionHandler)
  .case(actions.linkInspectionFlow, linkInspectionFlowHandler)
  .build()
