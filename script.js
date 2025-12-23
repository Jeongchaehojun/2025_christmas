// 레시피 데이터
const recipes = {
    takoyaki: {
        icon: '🐙',
        title: '타코야끼',
        ingredients: [
            '밀가루 200g',
            '달걀 2개',
            '물 600ml',
            '다시마 육수 가루 1큰술',
            '문어 200g (삶은 것)',
            '쪽파 적당량',
            '베니쇼가 (붉은 생강절임)',
            '타코야끼 소스',
            '마요네즈',
            '가쓰오부시 (가다랑어포)',
            '아오노리 (파래가루)'
        ],
        steps: [
            '밀가루, 달걀, 물, 다시마 육수 가루를 섞어 반죽을 만들고 30분 휴지시킨다.',
            '타코야끼 팬에 기름을 충분히 두르고 예열한다.',
            '반죽을 구멍의 80%까지 채운다.',
            '삶은 문어, 쪽파, 베니쇼가를 넣는다.',
            '가장자리가 익으면 꼬치로 돌려가며 동그란 모양을 만든다.',
            '겉이 바삭해질 때까지 굴려가며 굽는다.',
            '타코야끼 소스, 마요네즈를 뿌리고 가쓰오부시, 아오노리를 올려 완성!'
        ],
        time: '40분'
    },
    dongpoyuk: {
        icon: '🥓',
        title: '동파육',
        ingredients: [
            '삼겹살 600g (덩어리)',
            '대파 2대',
            '생강 1쪽',
            '간장 4큰술',
            '굴소스 1큰술',
            '설탕 3큰술',
            '샤오싱주 (또는 청주) 100ml',
            '물 400ml',
            '팔각 2개',
            '계피 1조각'
        ],
        steps: [
            '삼겹살을 끓는 물에 10분간 데쳐 잡내를 제거한다.',
            '데친 삼겹살을 먹기 좋은 크기로 자른다 (4~5cm 정사각형).',
            '냄비에 대파, 생강을 깔고 삼겹살을 껍질이 아래로 가도록 놓는다.',
            '간장, 굴소스, 설탕, 샤오싱주, 물, 팔각, 계피를 넣는다.',
            '센 불에서 끓어오르면 약불로 줄여 1시간 30분~2시간 뭉근히 조린다.',
            '중간에 뒤집어 양면이 골고루 조려지게 한다.',
            '국물이 자작해지면 접시에 담아 완성!'
        ],
        time: '2시간'
    },
    potatoRiceCake: {
        icon: '🥔',
        title: '감자떡튀김',
        ingredients: [
            '감자 3개 (중간 크기)',
            '찹쌀가루 5큰술',
            '소금 1/2작은술',
            '설탕 1큰술',
            '식용유 (튀김용)',
            '취향에 따라: 치즈, 고구마, 깨 등'
        ],
        steps: [
            '감자를 삶아서 뜨거울 때 으깬다.',
            '으깬 감자에 찹쌀가루, 소금, 설탕을 넣고 잘 섞는다.',
            '반죽이 뭉쳐지면 동그랗게 또는 납작하게 모양을 만든다.',
            '기호에 따라 안에 치즈나 고구마를 넣어도 좋다.',
            '170도 기름에서 노릇노릇해질 때까지 튀긴다.',
            '기름을 빼고 접시에 담아 완성!'
        ],
        time: '30분'
    },
    suyuk: {
        icon: '🥩',
        title: '수육',
        ingredients: [
            '돼지고기 앞다리살 또는 삼겹살 800g',
            '대파 2대',
            '양파 1개',
            '마늘 5쪽',
            '생강 1쪽',
            '된장 2큰술',
            '통후추 1큰술',
            '월계수잎 2장',
            '소주 1/2컵 (선택)',
            '새우젓 (곁들임용)'
        ],
        steps: [
            '고기를 찬물에 30분~1시간 담가 핏물을 뺀다.',
            '큰 냄비에 물을 넉넉히 붓고 대파, 양파, 마늘, 생강을 넣는다.',
            '된장, 통후추, 월계수잎을 추가한다.',
            '물이 끓으면 고기를 넣고 소주를 부어 잡내를 없앤다.',
            '센 불에서 10분, 약불로 줄여 40~50분 삶는다.',
            '젓가락으로 찔러 핏물 없이 맑은 육즙이 나오면 완성.',
            '10분간 뜸을 들인 후 썰어서 새우젓과 함께 낸다.'
        ],
        time: '1시간 30분'
    },
    sashimi: {
        icon: '🍣',
        title: '회',
        ingredients: [
            '신선한 생선 (광어, 우럭, 연어 등) 300~400g',
            '깻잎 10장',
            '무 1/4개 (채썰기용)',
            '레몬 1/2개',
            '고추냉이 (와사비)',
            '간장',
            '초고추장'
        ],
        steps: [
            '생선은 비늘과 내장을 제거하고 깨끗이 손질한다.',
            '필렛으로 뜬 후 먹기 좋은 크기로 어슷썰기 한다.',
            '무는 얇게 채썰어 찬물에 담가 아삭하게 만든다.',
            '접시에 무채를 깔고 깻잎을 돌려 놓는다.',
            '슬라이스한 회를 예쁘게 담는다.',
            '레몬을 곁들이고 고추냉이, 간장, 초고추장과 함께 낸다.'
        ],
        time: '20분'
    }
};

// DOM 요소
const modal = document.getElementById('recipeModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const recipeCards = document.querySelectorAll('.recipe-card');

// 레시피 카드 클릭 이벤트
recipeCards.forEach(card => {
    card.addEventListener('click', () => {
        const recipeKey = card.dataset.recipe;
        const recipe = recipes[recipeKey];

        if (recipe) {
            openModal(recipe);
        }
    });
});

// 모달 열기
function openModal(recipe) {
    modalIcon.textContent = recipe.icon;
    modalTitle.textContent = recipe.title;

    modalBody.innerHTML = `
        <h3>재료</h3>
        <ul>
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        
        <h3>만드는 법</h3>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        <div class="cooking-time">
            ⏱️ 예상 소요시간: ${recipe.time}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 모달 닫기 버튼
modalClose.addEventListener('click', closeModal);

// 모달 배경 클릭 시 닫기
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 페이지 로드 시 부드러운 등장 효과
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.day-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});

// 데이트 코스 버튼 - 네이버 지도 링크 설정
const dateCourseBtn = document.getElementById('dateCourseLinkBtn');
dateCourseBtn.href = 'https://naver.me/GPln7Utc';
