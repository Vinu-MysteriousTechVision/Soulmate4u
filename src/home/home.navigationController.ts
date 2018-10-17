/*
 * navigatorButtons method return the navigation buttons
 */
export const navigatorButtons = () => {
  return {
    leftButtons: [
      {
        id: 'sideMenu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        icon: require('../res/images/menuIcon.png'), // for icon button, provide the local image asset name
      },
    ], // see "Adding buttons to the navigator" below for format (optional)
    animated: true, // does the change have transition animation or does it happen immediately (optional)
  }
}
