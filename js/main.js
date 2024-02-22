$(document).ready(function () {
    var currentFloor = 2; //ПЕРЕМЕННАЯ ГДЕ ХРАНИТСЯ ТЕКУЩИЙ ЭТАЖ
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var modal = $(".modal");
    var modaCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    floorPath.on("click", toggleModal); // вызов окна
    modaCloseButton.on("click", toggleModal); // закрытие окна
    viewFlatsButton.on("click", toggleModal);
    counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGroupping: false }); //форматируем переменную с этажом
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
        } 
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        } 
    });
    function toggleModal() { // функция открытия-закрытия окна
        modal.toggleClass("is-open");
    }
});