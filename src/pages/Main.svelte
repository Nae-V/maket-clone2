<script>
    import { onMount } from 'svelte';
    import { getDatabase, ref, onValue } from 'firebase/database';
    import Nav from '../components/Nav.svelte';

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    $: items = [];

    const db = getDatabase();
    const itemRef = ref(db, 'items/');

    onMount(() => {
        onValue(itemRef, (snapshot) => {
            const data = snapshot.val();
            items = Object.values(data).reverse();
        });
    });

    const calcTime = (timestamp) => {
        const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
        const time = new Date(curTime - timestamp);
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();

        if (hour > 0) return `${hour}시간 전`;
        else if (minute > 0) return `${minute}분 전`;
        else if (second > 0) return `${second}초 전`;
        else '방금 전';
    };
</script>

<div class="media-info-msg1">화면사이즈를 줄여주세요</div>
<div class="media-info-msg2">화면사이즈를 늘려주세요</div>

<header>
    <div class="info-bar">
        <div class="info-ber__time">{hour}:{minute}</div>
        <div class="info-bar__icons">
            <img src="assets/chart-bar.svg" alt="차트" />
            <img src="assets/wifi.svg" alt="와이파이" />
            <img src="assets/battery-50.svg" alt="배터리" />
        </div>
    </div>
    <div class="menu-bar">
        <div class="menu-bar__location">
            <span>역삼1동</span>
            <div class="menu-bar__location-icon">
                <img src="assets/arrow-down.svg" alt="화살표" />
            </div>
        </div>
        <div class="menu-bar__icons">
            <img src="assets/search.svg" alt="" />
            <img src="assets/menu.svg" alt="" />
            <img src="assets/alert.svg" alt="" />
        </div>
    </div>
</header>

<main>
    {#each items as item}
        <div class="item-list">
            <div class="item-list__img">
                <img src={item.imgUrl} alt={item.title} />
            </div>
            <div class="item-list__info">
                <div class="item-list__info-title">{item.title}</div>
                <div class="item-list__info-meta">{item.place} {calcTime(item.insertAt)}</div>
                <div class="item-list__info-price">{item.price}</div>
                <div>{item.description}</div>
            </div>
        </div>
    {/each}
    <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Nav location="home" />
