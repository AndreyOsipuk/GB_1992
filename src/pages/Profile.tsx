import { FC, useContext } from 'react';
import { ThemeContext } from './../utils/ThemeContext';
import { toggleProfile } from 'store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileState } from 'store/profile/reducer';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const visible = useSelector((state: ProfileState) => state.visible);
  const name = useSelector((state: ProfileState) => state.name);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <div>
        <p>{theme === 'light' ? '🌞' : '🌙'} </p>
        <button onClick={toggleTheme}>change theme</button>
      </div>
      <hr />
      <p>{name}</p>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
    </>
  );
};
