document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login_btn')
  const logoutBtn = document.getElementById('logout_btn')

  loginBtn.addEventListener('click', handleLogin)
  logoutBtn.addEventListener('click', handleLogout)

  if (sessionStorage.getItem('isLoggedIn')) {
    showHome(sessionStorage.getItem('userName'))
  }
})

function handleLogin() {
  const email = document.getElementById('login_email').value.trim()
  const password = document.getElementById('login_password').value.trim()
  const user = localStorage.getItem(email)

  if (!user) {
    alert('해당 이메일로 가입된 유저가 없습니다.')
    return
  }

  const userData = JSON.parse(user)
  if (userData.password !== password) {
    alert('비밀번호가 틀렸습니다.')
    return
  }

  sessionStorage.setItem('isLoggedIn', 'true')
  sessionStorage.setItem('userName', userData.name)

  alert('로그인 성공')
  showHome(userData.name)
}

function handleLogout() {
  sessionStorage.clear()
  alert('로그아웃 되었습니다.')
  location.reload()
}

function showHome(name) {
  document.getElementById('signup').style.display = 'none'
  document.getElementById('login').style.display = 'none'
  document.getElementById('home').style.display = 'block'
  document.getElementById('login_msg').textContent = `${name}님 환영합니다`
}
