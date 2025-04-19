<script>
    import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import { user$ } from '../store';

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            user$.set(user);
            localStorage.setItem('token', token);
            window.location.hash = '/';
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error);
        }
    };
</script>

<div>
    <!-- {#if $user$}
        <div>{$user$?.displayName}로그인 됨</div>
    {/if} -->

    <div>로그인하기</div>
    <button class="login-btn" on:click={loginWithGoogle}>
        <img class="google-img" src="https://blog.kakaocdn.net/dn/HDY7T/btrY2our4Rw/Fw6bz0QroBUp1YxglkkwEK/img.webp" alt="" />
        <div>Google로 시작하기</div>
    </button>
</div>

<style>
    .login-btn {
        width: 180px;
        height: 50px;
        border: 1px solid gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 10px;
    }
    .google-img {
        width: 40px;
    }
</style>
