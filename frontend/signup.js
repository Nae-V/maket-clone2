const form = document.querySelector('#signup-form');

const checkPassword = () => {
    const formData = new FormData(form);
    const password1 = formData.get('password');
    const password2 = formData.get('password2');

    if (password1 === password2) {
        return true;
    } else return false;
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const sha256Password = sha256(formData.get('password'));
    formData.set('password', sha256Password);

    const div = document.querySelector('#info');
    if (checkPassword()) {
        const res = await fetch('/signup', {
            method: 'post',
            body: formData,
        });
        const data = await res.json();

        if (data === '200') {
            // div.innerText = '가입 완료';
            // div.style.color = 'green';
            alert('가입 성공했습니다.');
            window.location.pathname = '/login.html';
        }
    } else {
        div.innerText = '비밀번호가 일치하지 않아요.';
        div.style.color = 'red';
    }
};

form.addEventListener('submit', handleSubmit);
