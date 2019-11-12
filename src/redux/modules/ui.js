export default function reducer(state = {
  isFrench: false,
  isCreditsOpen: false,
  isWelcomeOpen: false,
  isLandingPage: true,
  selectedWorks: [], //string[],
  selectedKeywords: [], //string[]
  relatedWorks: [], // string[]
  activeWork: 0, // (index in selectedWorks array)
  isDetailPanelOpen: false,
  essayWindows: [], //string[]
  haveCopyrightWindowsBeenViewed: false,
  highestZIndex: 1,
}, action = {}) {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return {
        ...state,
        isFrench: !state.isFrench,
      };
    case 'TOGGLE_CREDITS':
      return {
        ...state,
        isCreditsOpen: !state.isCreditsOpen,
      };
    case 'TOGGLE_WELCOME':
      return {
        ...state,
        isWelcomeOpen: !state.isWelcomeOpen,
      };
    case 'CLOSE_LANDING_PAGE':
      return {
        ...state,
        isLandingPage: false,
      };
    default:
      return state;
  }
}

export const toggleLanguage = () => {
  return {
    type: 'TOGGLE_LANGUAGE',
  };
};
