<script>
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
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
    <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
    <div class="footer-block">
        <div class="footer__icons">
            <div class="footer__icons__img">
                <img src="assets/home.svg" alt="" />
            </div>
            <div class="footer__icons__dsec">홈</div>
        </div>

        <div class="footer__icons">
            <div class="footer__icons__img">
                <img src="assets/doc.svg" alt="" />
            </div>
            <div class="footer__icons__dsec">동네생활</div>
        </div>

        <div class="footer__icons">
            <div class="footer__icons__img">
                <img src="assets/location.svg" alt="" />
            </div>
            <div class="footer__icons__dsec">내 근처</div>
        </div>

        <div class="footer__icons">
            <div class="footer__icons__img">
                <img src="assets/chat.svg" alt="" />
            </div>
            <div class="footer__icons__dsec">채팅</div>
        </div>

        <div class="footer__icons">
            <div class="footer__icons__img">
                <img src="assets/user.svg" alt="" />
            </div>
            <div class="footer__icons__dsec">나의 당근</div>
        </div>
    </div>
</footer>
