<script>
    import Nav from '../components/Nav.svelte';
    import { user$ } from '../store';

    const logout = () => {
        user$.set(null);
        localStorage.clear();
    };
</script>

<div>나의 당근</div>
<div class="Logout-btn">
    <button on:click={logout}>로그아웃</button>
</div>

<Nav location="my" />

<style>
    button {
        background-color: rgba(137, 43, 226, 1);
        color: white;
        padding: 15px 25px 15px 25px;
        border-radius: 30px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        transition: all 2s ease-in-out;
        text-decoration: none;
    }
    .Logout-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
