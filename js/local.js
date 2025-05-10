document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById('signup_btn')
  signupBtn.addEventListener('click', handleSignup)
})

//회원가입 처리 함수
function handleSignup() {
  const name = document.getElementById('signup_name').value.trim()
  const email = document.getElementById('signup_email').value.trim()
  const password = document.getElementById('signup_password').value.trim()

  if (!name || !email || !password) {
    alert('입력칸을 모두 채워야 회원가입이 가능합니다')
    return
  }

  if (localStorage.getItem(email)) {
    alert('이미 가입된 이메일입니다.')
    return
  }

  const userData = {
    name,
    email,
    password,
  }

  localStorage.setItem(email, JSON.stringify(userData))
  alert('회원가입 완료')

  document.getElementById('signup_name').value = ''
  document.getElementById('signup_email').value = ''
  document.getElementById('signup_password').value = ''
}
