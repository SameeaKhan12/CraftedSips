
document.getElementById("slider").value = 50;

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');

    slider.addEventListener('input', function () {
        const sliderPosition = slider.value;
        const fifth = Math.ceil(sliderPosition / 20);

        switch (fifth) {
            case 1:
                sliderValue.textContent = 'Strong Citrus Flavor';
                slider.style.background = "#ea8947";
                break;
            case 2:
                sliderValue.textContent = 'Citrus Flavor with Hints of Woodiness';
                slider.style.background = "#c06f3a";
                break;
            case 3:
                sliderValue.textContent = 'Moderately Citrus - Moderately Earth';
                slider.style.background = "#97562e";
                break;
            case 4:
                sliderValue.textContent = 'Woody Flavor with Hints of Citrus';
                slider.style.background = "#703f22";
                break;
            case 5:
                sliderValue.textContent = 'Strong Earthy Flavor';
                slider.style.background = "#4b2916";
                break;
            default:
                sliderValue.textContent = 'Strong Citrus Flavor';
        }
    });
});