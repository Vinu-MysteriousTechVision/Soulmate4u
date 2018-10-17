import { Action, combineReducers } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

// NOTE: takeExam() === { type: 'Home/TAKE_EXAM', payload: {} }
const takeExam = actionCreator<{}>('Home/TAKE_EXAM')
const linkRiskInspection = actionCreator<{}>('Home/LINK_RISK_INSPECTION')
const linkInspectionFlow = actionCreator<{}>('Home/LINK_INSPECTION_FLOW')

export const actions = {
  takeExam,
  linkRiskInspection,
  linkInspectionFlow,
}
