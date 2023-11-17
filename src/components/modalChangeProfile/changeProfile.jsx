import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

import * as S from './changeProfile.styles'

export const ChangeUserInfo = ({
  mode,
  setData,
  apiErrors,
  loading,
  closeModal,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [control, setControl] = useState('')
  const [usedEmailInput, setUsedEmailInput] = useState(false)
  const [usedPasswordInput, setUsedPasswordInput] = useState(false)
  const [usedControlInput, setUsedControlInput] = useState(false)
  const [emailError, setEmailError] = useState('Введите электронную почту')
  const [passwordError, setPasswordError] = useState('Введите пароль')
  const [controlError, setControlError] = useState('Введите пароль повторно')
  const [validForm, setValidForm] = useState(false)
  // const navigate = useNavigate()

  useEffect(() => {
    if ((mode = 'regForm')) {
      if (emailError || passwordError || controlError) {
        setValidForm(false)
      } else {
        setValidForm(true)
      }
    } else if (emailError || passwordError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [
    emailError,
    passwordError,
    controlError,
    setEmailError,
    setPasswordError,
    mode,
  ])

  useEffect(() => {
    if (apiErrors) {
      if (apiErrors.email) {
        setEmailError(apiErrors.email[0])
      } else {
        setEmailError('')
      }
      if (apiErrors.detail) {
        setControlError(apiErrors.detail)
      } else {
        setControlError('')
      }
      if (apiErrors.password) {
        if (apiErrors.password.length > 1) {
          setControlError(apiErrors.password[1])
          setPasswordError(apiErrors.password[0])
        } else {
          setPasswordError(apiErrors.password)
        }
      } else {
        setPasswordError('')
      }
    }
  }, [apiErrors, setEmailError, setPasswordError, setControlError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
      if (!e.target.value) {
        setEmailError('Введите электронную почту')
      }
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordError('Пароль не менее 8 символов')
      if (!e.target.value) {
        setPasswordError('Введите пароль')
      }
    } else {
      setPasswordError('')
    }
  }

  const controlHandler = (e) => {
    setControl(e.target.value)
    if (e.target.value === password) {
      setControlError('')
    } else {
      setControlError('Пароли должны совпадать')
      if (!e.target.value) {
        setControlError('Введите пароль повторно')
      }
    }
  }
  const blurHanndler = (e) => {
    switch (e.target.name) {
      case 'email':
        setUsedEmailInput(true)
        break
      case 'password':
        setUsedPasswordInput(true)
        break
      case 'control':
        setUsedControlInput(true)
        break
      default:
        break
    }
  }

  const addNewUser = (e) => {
    e.preventDefault()
    const newUserData = (mode = 'regForm')
      ? {
          email,
          password,
          username: email,
        }
      : {
          email,
          password,
        }
    setData(newUserData)
  }

  const getBtnName = () => {
    switch (mode) {
      case 'regForm':
        return 'Зарегистрироваться'
      case 'logForm':
        return 'Войти'
      case 'changeLog':
        return 'Сохранить'
      case 'changePass':
        return 'Сохранить'
      default:
        ''
        break
    }
  }
  const btnName = getBtnName()

  return (
    <S.modalBG>
      <S.modalFormLogin action="#">
        <S.modalLogo onClick={() => closeModal('')}>
          <img src="/img/logo.svg" alt="logo" />
        </S.modalLogo>
        {(mode == 'changeLog' || mode == 'changePass') && (
          <S.changeDataText>
            Новый {mode == 'changeLog' ? 'логин' : 'пароль'}:
          </S.changeDataText>
        )}
        {mode !== 'changePass' && (
          <S.modalInput
            value={email}
            onChange={(e) => emailHandler(e)}
            type="text"
            name="email"
            placeholder="Логин"
            onBlur={(e) => blurHanndler(e)}
            $error={usedEmailInput && emailError}
          />
        )}
        {usedEmailInput && emailError && (
          <S.formError>{emailError}</S.formError>
        )}
        {/* {apiErrors && <S.apiError>{apiErrors.username[0]}</S.apiError>} */}
        {mode !== 'changeLog' && (
          <S.modalInput
            value={password}
            onChange={(e) => passwordHandler(e)}
            type="password"
            name="password"
            placeholder="Пароль"
            onBlur={(e) => blurHanndler(e)}
            $error={usedPasswordInput && passwordError}
          />
        )}
        {usedPasswordInput && passwordError && (
          <S.formError>{passwordError}</S.formError>
        )}
        {/* {apiErrors && <S.apiError>{apiErrors.password[0]}</S.apiError>} */}
        {(mode == 'regForm' || mode == 'changePass') && (
          <S.modalInput
            value={control}
            onChange={(e) => controlHandler(e)}
            type="password"
            name="control"
            placeholder="Повторите пароль"
            onBlur={(e) => blurHanndler(e)}
            $error={
              mode == 'regForm'
                ? usedControlInput && controlError
                : apiErrors?.detail
            }
          />
        )}
        {(mode == 'regForm'
          ? usedControlInput && controlError
          : apiErrors?.detail) && <S.formError>{controlError}</S.formError>}
        {/* {apiErrors && <S.apiError>{apiErrors.password[1]}</S.apiError>} */}

        <S.modalBtnEnter
          disabled={!validForm || loading}
          type="submit"
          onClick={addNewUser}
        >
          {btnName}
        </S.modalBtnEnter>
        {mode == 'logForm' && (
          <S.modalBtnSignup
            type="button"
            as="button"
            // onClick={() => navigate('/signup', { replace: false })}
          >
            Зарегистрироваться
          </S.modalBtnSignup>
        )}
      </S.modalFormLogin>
    </S.modalBG>
  )
}
