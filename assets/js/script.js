let containersReleased = false;

function releaseContainers () {
    const container1 = document.querySelector('.HomeContainerOne');
    const container3 = document.querySelector('.HomeContainerThree');

    if (containersReleased) {
        container1.classList.remove('released');
        container3.classList.remove('released');
        container1.classList.add('hidden');
        container3.classList.add('hidden');
    }else {
        container1.classList.remove('hidden');
        container3.classList.remove('hidden');
        container1.classList.add('released');
        container3.classList.add('released');
    }

    containersReleased = !containersReleased;
}