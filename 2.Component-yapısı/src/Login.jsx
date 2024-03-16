
export const users = [
  {
    username:"burhan",
    password:"1"
},
{
  username:"ayse",
  password:"2"
}
]





const Login = () => {
  return (
    // Fragment(<> </>)
    <> 
    <div>
    <p>Kullanıcı Adınız :</p>
    <input type="text" placeholder="Kullanıcı Adınız" />
    </div>

    <div>
    <p>şifreniz :</p>
    <input type="text" placeholder="Şifreniz" /> 
    </div> <br />

    <button style={{border:"1px solid "}}>Giriş Yap</button>
    </>
  )
}

export default Login;