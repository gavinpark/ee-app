import allWorks from './all_items.json';

import allWords from './all_words.json';

window.allWorks = allWorks;
window.allWords = allWords;

export default function reducer(state = {
  // this is all the states
  isFrench: true,
  isCreditsOpen: false,
  isWelcomeOpen: true,
  isLandingOpen: true,
  isCopyrightOpen: true,
  isEssayOpen: false,
  selectedWorks: [], //string[],
  selectedKeywords: {}, // { [keyword]: { worksInConstellationWithKeyword: [] } }
  relatedWorks: [], // { similarityScore: number, access_num: string }[]
  activeWorkIndex: 0, // (index in selectedWorks array)
  activeKeywords: [], // TODO: DO WE NEED THIS?
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
    case 'TOGGLE_COPYRIGHT':
      return{
        ...state,
        isCopyrightOpen: !state.isCopyrightOpen,
      }
    case 'TOGGLE_ESSAY':
      return{
        ...state,
        isEssayOpen: !state.isEssayOpen,
      }
    case 'TOGGLE_DETAIL_PANEL':
      return {
        ...state,
        isDetailPanelOpen: !state.isDetailPanelOpen
      };
    case 'CLOSE_COPYRIGHT_WINDOW':
      return {
        ...state,
        haveCopyrightWindowsBeenViewed: true,
      };
    case 'OPEN_MAIN_PAGE':
      return {
        ...state,
        isLandingOpen: false
      };
    case 'REMOVE_INITIAL_ARTWORK':
      return {
        ...state,
        selectedWorks: [],
        selectedKeywords: {},
        activeWorkIndex: 0,
      };
    case 'INCREASE_HIGHEST_Z_INDEX':
      return {
        ...state,
        highestZIndex: state.highestZIndex + 1,
      };
    case 'SELECT_NEW_ARTWORK':

        const newLastIndexInArtworksArr = state.selectedWorks.length;
        const newSelectedKeywords = mergeSelectedKeywords(action.selectedKey, state.selectedKeywords);
        return {
          ...state,
          activeWorkIndex: newLastIndexInArtworksArr,
          selectedKeywords: newSelectedKeywords,
          relatedWorks: action.relatedArtworks,
          selectedWorks: [...state.selectedWorks, action.selectedKey]
        }
    default:
      return state;
  }
}

// below are all the actions

export const toggleLanguage = () => {
  return {
    type: 'TOGGLE_LANGUAGE',
  };
};

export const toggleCredits = () => {
  return {
    type: 'TOGGLE_CREDITS',
  };
};

export const toggleWelcome = () => {
  return {
    type: 'TOGGLE_WELCOME',
  };
};
export const toggleCopyright = () => {
  return {
    type: 'TOGGLE_COPYRIGHT',
  };
};
export const toggleEssaySegment = () => {
  return {
    type: 'TOGGLE_ESSAY',
  };
};
export const toggleDetailPanel = () => {
  return {
    type: 'TOGGLE_DETAIL_PANEL',
  };
};

export const closeCopyrightWindow = () => {
  return {
    type: 'CLOSE_COPYRIGHT_WINDOW',
  };
};

export const increaseHighestZIndex = () => {
  return {
    type: 'INCREASE_HIGHEST_Z_INDEX',
  };
};

export const findRandomArtWork = () => {
  const keys = Object.keys(allWorks);
  const selectedKey = keys[Math.floor(Math.random() * keys.length)];
  const relatedArtworks = findRelatedWork(selectedKey);
  return {
    type: 'SELECT_NEW_ARTWORK',
    selectedKey,
    relatedArtworks,
  };
}

export const addWorkToConstellation = (selectedKey) => {
  const relatedArtworks = findRelatedWork(selectedKey);
  return {
    type: 'SELECT_NEW_ARTWORK',
    selectedKey: selectedKey,
    relatedArtworks,
  }
}

export const openMainPage = () => {
  return {
    type: 'OPEN_MAIN_PAGE',
  }
}

// this is just for moving from landing page to constellation page
export const removeInitialArtwork = () => {
  return {
    type: 'REMOVE_INITIAL_ARTWORK',
  }
}

export const removeArtwork = () => {
  // TODO: loop over all keywords to ensure that this is not the last artwork
}

// helper functions

export const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const findRelatedWork = (accessNum) => {
  // TODO: DONT SHOW WORKS THAT ARE ALREADY IN CONSTELLATION
  const keyWordsInSelectedWork = allWorks[accessNum].final_words;

  const allRelatedWorks = keyWordsInSelectedWork.reduce((obj, word) => {
    const worksWithRelatedWord = allWords[word];
    worksWithRelatedWord.forEach((work) => {
      if (obj[work] || work === accessNum) {
        return;
      }
      const keywordsInRelatedWork = allWorks[work].final_words;
      const similarityScore = keywordsInRelatedWork.filter(value => keyWordsInSelectedWork.includes(value)).length;
      obj[work] = {
        access_num: work,
        similarityScore,
      }
    });
    return obj;
  }, {});
  
  var arrayOfWorks = Object.values(allRelatedWorks);
  arrayOfWorks = shuffle(arrayOfWorks);
  return arrayOfWorks; 
}

const mergeSelectedKeywords = (accessNum, existingSelectedKeywords) => {
  const keyWordsInSelectedWork = allWorks[accessNum].final_words;
  keyWordsInSelectedWork.forEach((word) => {
    if (!existingSelectedKeywords[word]) {
      existingSelectedKeywords[word] = { worksInConstellationWithKeyword: [] }
    }
    if (!existingSelectedKeywords[word].worksInConstellationWithKeyword.includes(accessNum)) {
      existingSelectedKeywords[word].worksInConstellationWithKeyword.push(accessNum);
    }
  });
  return existingSelectedKeywords;
}

// TODO: create action openArtworkInfoPanel which takes the access_num as an argument