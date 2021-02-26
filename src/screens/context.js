import React from 'react';
const initialState = {
  Skin: [],
  'Oral cavity': [],
  Eyes: [],
  Ears: [],
  Lips: [],
  Feet: [],
  Genital: [],
  'Belly button': [],
  armpits: [],
  tongue: [],
  nipples: [],
  ear: [],
  'The scalp': [],
  'Back of the ears': [],
  'The tongue': [],
  'Back of the neck': [],
  'The elbows': [],
  'Bottom of the feet': [],
};
export const TakeHolidayContext = React.createContext(null);
export default function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TakeHolidayContext.Provider value={{state, setState}}>
      {props.children}
    </TakeHolidayContext.Provider>
  );
}
