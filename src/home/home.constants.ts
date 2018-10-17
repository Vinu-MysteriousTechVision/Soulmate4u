import { IApplicationVerifyingComponentStateProps } from './home.applicationVerifyingComponent'
import { ICancerExaminationStep } from './home.topPageMenuComponent'

export const CANCER_EXAMINATION_STEPS: ICancerExaminationStep[] = [
  {
    step: 'STEP 1',
    title: '検査キットが届く',
    description:
      'テキストテキストテキスト\nテキストテキストテキスト\nテキストテキストテキスト',
    iconSource: require('../res/images/graySquare.png'),
  },
  {
    step: 'STEP 2',
    title: '検体を郵送',
    description:
      'テキストテキストテキスト\nテキストテキストテキスト\nテキストテキストテキスト',
    iconSource: require('../res/images/graySquare.png'),
  },
  {
    step: 'STEP 3',
    title: '検査結果がわかる',
    description:
      'テキストテキストテキストテキストテキストテキスト テキストテキストテキスト テキストテキストテキスト テキストテキストテキスト',
    iconSource: require('../res/images/graySquare.png'),
  },
]

/*
 * APPLICATION_VERIFICATION_DATA contanins the datas for the static page application verification process
 */
export const APPLICATION_VERIFICATION_DATA: IApplicationVerifyingComponentStateProps = {
  processHeaderData: {
    icon: require('../res/images/topPage/note_icon.png'),
    title: '申し込み内容確認中',
    description: '確認次第、発送準備に入ります。',
  },
  processFlowData: {
    title: '配達までの流れ',
    steps: [
      {
        title: '内容確認中',
        isStepActive: true,
      },
      {
        title: '発送準備中',
        isStepActive: false,
      },
      {
        title: '発送済み',
        isStepActive: false,
      },
    ],
  },
}

/*
 * SHIPMENT_READY_SCREEN_DATA containes the data related to the sttaic page of Shipment ready page
 */
export const SHIPMENT_READY_SCREEN_DATA: IApplicationVerifyingComponentStateProps = {
  processHeaderData: {
    icon: require('../res/images/topPage/ready_for_shipment.png'),
    title: '発送準備中',
    description: 'キットは3月30日到着予定です。',
  },
  processFlowData: {
    title: '配達までの流れ',
    steps: [
      {
        title: '内容確認中',
        isStepActive: false,
      },
      {
        title: '発送準備中',
        isStepActive: true,
      },
      {
        title: '発送',
        isStepActive: false,
      },
    ],
  },
}

/*
 * SHIPPED_SCREEN_DATA containes the data related to the sttaic page of Shipment ready page
 */
export const SHIPPED_SCREEN_DATA: IApplicationVerifyingComponentStateProps = {
  processHeaderData: {
    icon: require('../res/images/topPage/ready_for_shipment.png'),
    title: '発送済み',
    description: 'キットは3月30日到着予定です。',
  },
  processFlowData: {
    title: '検査の流れ',
    steps: [
      {
        title: '発送',
        isStepActive: true,
      },
      {
        title: '検査',
        isStepActive: false,
      },
      {
        title: '検体を郵送',
        isStepActive: false,
      },
    ],
  },
}
