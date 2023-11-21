
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { HeaderGeneral } from "../../components/headerGeneralPage/HeaderGeneral"
import { ChangeUserInfo } from "../../components/modalChangeProfile/changeProfile"
import * as S from '../MainPage/MainPage.styles'

export const AuthPage = () => {
    const [modal, setModal] = useState('logForm')
    const [registrationData, setRegistrationData] = useState(null)
    // console.log(registrationData);

const getRegistration = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log).catch(console.error)
    }

    useEffect(() => {
        if (registrationData)
          getRegistration({ data: registrationData, url: 'signup' })
        if (result.isSuccess) {
          getTokens(result.originalArgs.data)
          navigate('/', { replace: true })
        }
      }, [registrationData, result.isSuccess])

  return (
    <S.Body>
      <HeaderGeneral />
<ChangeUserInfo mode={modal} closeModal={setModal} setData={setRegistrationData}/>
    </S.Body>
  )
}