let containersReleased = false;

function releaseContainers () {
    const container2 = document.querySelector('.HomeContainerOne');
    const container3 = document.querySelector('.HomeContainerThree');

    if (containersReleased) {
        container2.classList.remove('released');
        container3.classList.remove('released');
        container2.classList.add('hidden');
        container3.classList.add('hidden');
    }else {
        container2.classList.remove('hidden');
        container3.classList.remove('hidden');
        container2.classList.add('released');
        container3.classList.add('released');
    }

    containersReleased = !containersReleased;
}