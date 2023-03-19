import { changeAge, changePerson } from './redux';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

import styles from './index.module.scss';

interface Props {
  name: string;
}
function Home(props: Props) {
  const { name } = props;
  const person = useAppSelector(state => state.homeReducer.person);
  const age = useAppSelector(state => state.homeReducer.age);

  const dispatch = useAppDispatch();

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changePerson(e.target.value));
  }
  const handleChangeAge: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeAge(Number(e.target.value)));
  }

  return <div className={styles['home']}>
    <div className={styles["home-name"]}>
      {name}
    </div>
    <div className={styles["home-person"]}>
      姓名: {person}
      <input type="text" onChange={handleChangeName} />
    </div>
    <div className={styles["home-age"]}>
      年龄: {age}
      <input type="text" onChange={handleChangeAge} />
    </div>
  </div>
}

export {
  Home
}