const addBtn = document.querySelector('.addbutton');
const cardList = document.querySelector('.card-list');
const cards = document.querySelectorAll('.card')
const fullDate = new Date();
const date = fullDate.getDate();
const month = fullDate.getMonth();
const year = fullDate.getFullYear();

let fMonth

switch (month)
{
  case 0: fMonth="junuary"; break;
  case 1: fMonth="february"; break;
  case 2: fMonth="march"; break;
  case 3: fMonth="april"; break;
  case 4: fMonth="may"; break;
  case 5: fMonth="june"; break;
  case 6: fMonth="july"; break;
  case 7: fMonth="august"; break;
  case 8: fMonth="september"; break;
  case 9: fMonth="october"; break;
  case 10: fMonth="november"; break;
  case 11: fMonth="december"; break;
}

addBtn.addEventListener('click', newCard)

function newCard() {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card__header">
            <div class="card__categorie-name">
                General
            </div>
            <div class="card__date">
                ${fullDate.getDate()} ${fMonth}, ${fullDate.getFullYear()}
            </div>
        </div>
            <div class="card__title">
                New note
            </div>
            <div class="card__text">
                No text
            </div>
        </div>
    `
    cardList.append(card);
    newCardContent();
} 

function newCardContent() {
    const contentCard = document.querySelector('.content-card')

    contentCard.innerHTML = `
        <div class="content-card__header">
            <textarea class="content-card__header-title">Write something</textarea>
            <textarea class="content-card__header-date">
                ${fullDate.getDate()} ${fMonth}, ${fullDate.getFullYear()}
            </textarea>
        </div>    
            <div class="content-card__text">
                <textarea class="content-card__form"> Write something
                </textarea>
        </div>
    `
}


cardList.addEventListener('click', (e) => {
    if (e.target.classList.contains('card') || e.target.classList.contains('card')) {
        newCardContent();
        console.log('пук');
    }
})



