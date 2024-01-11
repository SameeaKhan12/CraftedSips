

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');

    slider.addEventListener('input', function () {
        const sliderPosition = slider.value;
        const fifth = Math.ceil(sliderPosition / 20);

        switch (fifth) {
            case 1:
                sliderValue.textContent = 'Fifth 1';
                break;
            case 2:
                sliderValue.textContent = 'Fifth 2';
                break;
            case 3:
                sliderValue.textContent = 'Fifth 3';
                break;
            case 4:
                sliderValue.textContent = 'Fifth 4';
                break;
            case 5:
                sliderValue.textContent = 'Fifth 5';
                break;
            default:
                sliderValue.textContent = 'Unknown Quarter';
        }
    });
});