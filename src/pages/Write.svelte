<script>
    // @ts-nocheck

    import { getDatabase, push, ref } from 'firebase/database';
    import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from 'firebase/storage';
    import Nav from '../components/Nav.svelte';

    let title;
    let price;
    let description;
    let place;
    let files;

    const storage = getStorage();
    const db = getDatabase();

    function writeUserData(imgUrl) {
        push(ref(db, 'items/'), {
            title,
            price,
            description,
            place,
            insertAt: new Date().getTime(),
            imgUrl,
        });
        alert('complete');
        window.location.hash = '/';
    }

    const uploadFile = async () => {
        const file = files[0];
        const name = file.name;
        const imgRef = refImage(storage, name);
        await uploadBytes(imgRef, file);
        const url = await getDownloadURL(imgRef);
        return url;
    };

    const handleSubmit = async () => {
        const url = await uploadFile();
        writeUserData(url);
    };
</script>

<form id="write-from" on:submit|preventDefault={handleSubmit}>
    <div>
        <label for="image">이미지</label>
        <input type="file" bind:files id="image" name="image" />
    </div>

    <div>
        <label for="title">제목</label>
        <input type="text" id="title" name="title" bind:value={title} />
    </div>

    <div>
        <label for="">가격</label>
        <input type="number" id="price" name="price" bind:value={price} />
    </div>

    <div>
        <label for="">설명</label>
        <input type="text" id="description" name="description" bind:value={description} />
    </div>

    <div>
        <label for="">장소</label>
        <input type="text" id="place" name="place" bind:value={place} />
    </div>

    <div>
        <button class="write-btn" type="submit">제출</button>
    </div>
</form>

<Nav location="write" />

<!-- <style>
    .write-button {
        background-color: aliceblue;
    }
</style> -->
