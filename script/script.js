const t1BTN = document.querySelector('.Contacts');
const t2BTN = document.querySelector('.Company');
const t3BTN = document.querySelector('.Socials');

const t1 = document.querySelector('.t1');
const t2 = document.querySelector('.t2');
const t3 = document.querySelector('.t3');


t1BTN.addEventListener('click', function () {
    t1.style.display = 'block';
    t2.style.display = 'none';
    t3.style.display = 'none';

    t1BTN.classList.add('active');
    t2BTN.classList.remove('active');
    t3BTN.classList.remove('active');
});
t2BTN.addEventListener('click', function () {
    t1.style.display = 'none';
    t2.style.display = 'block';
    t3.style.display = 'none';

    t1BTN.classList.remove('active');
    t2BTN.classList.add('active');
    t3BTN.classList.remove('active');
});
t3BTN.addEventListener('click', function () {
    t1.style.display = 'none';
    t2.style.display = 'none';
    t3.style.display = 'block';

    t1BTN.classList.remove('active');
    t2BTN.classList.remove('active');
    t3BTN.classList.add('active');
});