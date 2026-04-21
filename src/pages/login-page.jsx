import React from 'react'
import s from './login-page.module.scss'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className={s.wrapper}>
      <form className={s.form}>
        <input
          type="text"
          className={s.input}
          placeholder="E-mail"
          value={email}
        />
        <input
          type="password"
          className={s.input}
          placeholder="qwerty123"
          value={password}
        />
        <button className={s.submit}>ВОЙТИ</button>
      </form>
    </div>
  );
}
