import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { Loader } from 'components/loader/Loader'
import * as S from './changeProfile.styles'
import { Link } from 'react-router-dom'

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
  const [confirm, setConfirm] = useState('')
  const [usedEmailInput, setUsedEmailInput] = useState(false)
  const [usedPasswordInput, setUsedPasswordInput] = useState(false)
  const [usedControlInput, setUsedControlInput] = useState(false)
  const [usedConfirmInput, setUsedConfirmInput] = useState(false)
  const [emailError, setEmailError] = useState('Введите электронную почту')
  const [passwordError, setPasswordError] = useState('Введите пароль')
  const [confirmError, setConfirmError] = useState('Введите пароль')
  const [controlError, setControlError] = useState('Введите пароль повторно')
  const [validForm, setValidForm] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if ((mode == 'regForm')) {
      if (emailError || passwordError || controlError) {
        setValidForm(false)
      } else {
        setValidForm(true)
      }
    }
    if ((mode == 'logForm')) {
      if (emailError || passwordError) {
        setValidForm(false)
      } else {
        setValidForm(true)
      }
    } 
    if ((mode == 'changePass')) {
      if (controlError || passwordError || confirmError) {
        setValidForm(false)
      } else {
        setValidForm(true)
      }
    } 
    if ((mode == 'changeLog')) {
      if (emailError || confirmError) {
        setValidForm(false)
      } else {
        setValidForm(true)
      }
    } 
  }, [
    emailError,
    passwordError,
    controlError,
    setEmailError,
    setPasswordError,
    mode,
    confirmError
  ])

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
  const confirmHandler = (e) => {
    setConfirm(e.target.value)
    if (e.target.value.length < 8) {
      setConfirmError('Пароль не менее 8 символов')
      if (!e.target.value) {
        setConfirmError('Введите пароль')
      }
    } else {
      setConfirmError('')
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
        case 'confirm':
          setUsedConfirmInput(true)
          break
  
      default:
        break
    }
  }

  const addNewUser = (e) => {
    e.preventDefault()
    const newUserData = (mode == 'changeLog' || mode == 'changePass')
      ? {
          email,
          password,
          confirm
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
    <S.modalFormLogin>
      <S.closeBtn onClick={() => closeModal('')}>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>cross</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set-Filled"
                transform="translate(-469.000000, -1041.000000)"
                fill="#b1aaaa"
              >
                <path
                  d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                  id="cross"
                ></path>
              </g>
            </g>

          </g>
        </svg>
      </S.closeBtn>
      <S.modalLogo>
        <img src="/img/logo.svg" alt="logo" />
      </S.modalLogo>
      {loading? <Loader/> : <>
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
          placeholder="e-mail"
          onBlur={(e) => blurHanndler(e)}
          $error={usedEmailInput && emailError}
        />
      )}
      {usedEmailInput && emailError && <S.formError>{emailError}</S.formError>}
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
      {(mode == 'regForm' || mode == 'changePass') && (
        <S.modalInput
          value={control}
          onChange={(e) => controlHandler(e)}
          type="password"
          name="control"
          placeholder="Повторите пароль"
          onBlur={(e) => blurHanndler(e)}
          $error={usedControlInput && controlError
                   }
        />
      )}
      {usedControlInput && controlError && <S.formError>{controlError}</S.formError>}
      {(mode == 'changeLog' || mode == 'changePass') && (
         <><S.changeDataText>
          Подтвердить изменения:
        </S.changeDataText><S.modalInput
            value={confirm}
            onChange={(e) => confirmHandler(e)}
            type="password"
            name="confirm"
            placeholder="Действующий пароль"
            onBlur={(e) => blurHanndler(e)}
            $error={usedConfirmInput && confirmError} /></>
      )}
      {usedConfirmInput && confirmError && <S.formError>{confirmError}</S.formError>}
      {apiErrors && (<S.changeDataText style={{color: "red",}}>{apiErrors}</S.changeDataText>)}
      </>}<S.modalBtnEnter
        disabled={!validForm || loading}
        type="submit"
        onClick={addNewUser}
      >
        {loading? "Выполняется загрузка" : btnName}
      </S.modalBtnEnter>
      {mode == 'logForm' && (
        <S.modalBtnSignup
          type="button"
          as="button"
          onClick={() => closeModal('regForm')}
        >
          Зарегистрироваться
        </S.modalBtnSignup>
      )}

    </S.modalFormLogin>

  )
}
