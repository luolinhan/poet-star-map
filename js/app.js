// 主应用逻辑
let starMap = null;

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    initStarMap();
    initPoetList();
    initDynastyTimeline();
    initFilters();
});

// 初始化星图
function initStarMap() {
    starMap = new StarMap('star-map-canvas', poetsData);
}

// 初始化诗人列表
function initPoetList() {
    const container = document.getElementById('poet-tags-container');
    const dynastyFilter = document.getElementById('dynasty-filter');

    // 填充朝代筛选
    dynastiesData.forEach(dynasty => {
        const option = document.createElement('option');
        option.value = dynasty.id;
        option.textContent = dynasty.name;
        dynastyFilter.appendChild(option);
    });

    renderPoetTags(poetsData);
}

// 渲染诗人标签
function renderPoetTags(poets) {
    const container = document.getElementById('poet-tags-container');
    container.innerHTML = '';

    poets.forEach(poet => {
        const dynasty = dynastiesData.find(d => d.id === poet.dynasty);
        const tag = document.createElement('div');
        tag.className = `poet-tag dynasty-${poet.dynasty}`;
        tag.textContent = poet.name;
        tag.onclick = () => showPoetDetail(poet);
        container.appendChild(tag);
    });
}

// 初始化朝代时间轴
function initDynastyTimeline() {
    const container = document.getElementById('dynasty-timeline');
    
    dynastiesData.forEach(dynasty => {
        const card = document.createElement('div');
        card.className = 'dynasty-card';
        card.style.borderColor = dynasty.color;
        card.innerHTML = `
            <div class="dynasty-name" style="color: ${dynasty.color}">${dynasty.name}</div>
            <div class="dynasty-period">${dynasty.period}</div>
            <div class="dynasty-count">${dynasty.poets.length} 位诗人</div>
        `;
        card.onclick = () => filterByDynasty(dynasty.id);
        container.appendChild(card);
    });
}

// 初始化筛选器
function initFilters() {
    const dynastyFilter = document.getElementById('dynasty-filter');
    const gradeFilter = document.getElementById('grade-filter');
    const searchInput = document.getElementById('search-input');

    dynastyFilter.addEventListener('change', () => {
        applyFilters();
    });

    gradeFilter.addEventListener('change', () => {
        applyFilters();
    });

    searchInput.addEventListener('input', () => {
        applyFilters();
    });
}

// 应用筛选
function applyFilters() {
    const dynastyFilter = document.getElementById('dynasty-filter').value;
    const gradeFilter = document.getElementById('grade-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    let filtered = poetsData;

    // 朝代筛选
    if (dynastyFilter !== 'all') {
        filtered = filtered.filter(p => p.dynasty === dynastyFilter);
    }

    // 学段筛选
    if (gradeFilter !== 'all') {
        filtered = filtered.filter(p => p.grade === gradeFilter);
    }

    // 搜索
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.title.toLowerCase().includes(searchTerm) ||
            p.dynastyName.toLowerCase().includes(searchTerm)
        );
    }

    renderPoetTags(filtered);
}

// 按朝代筛选
function filterByDynasty(dynastyId) {
    document.getElementById('dynasty-filter').value = dynastyId;
    applyFilters();
    
    // 滚动到诗人列表
    document.getElementById('poet-list').scrollIntoView({ behavior: 'smooth' });
}

// 显示诗人详情
function showPoetDetail(poet) {
    const panel = document.getElementById('poet-detail-panel');
    const content = document.getElementById('poet-detail-content');
    const dynasty = dynastiesData.find(d => d.id === poet.dynasty);

    const poemsHTML = poet.poems.map(poem => `
        <div class="poem-card">
            <div class="poem-title">${poem.title}</div>
            <div class="poem-content">${poem.content}</div>
            <span class="poem-grade">${poem.grade}</span>
        </div>
    `).join('');

    content.innerHTML = `
        <div class="poet-header">
            <h2 class="poet-name">${poet.name}</h2>
            <div class="poet-info">
                <div class="poet-info-item">
                    <span>🏛️</span>
                    <span>${poet.dynastyName}</span>
                </div>
                <div class="poet-info-item">
                    <span>📅</span>
                    <span>${poet.birth}-${poet.death}</span>
                </div>
                <div class="poet-info-item">
                    <span>🎭</span>
                    <span>${poet.style}</span>
                </div>
                <div class="poet-info-item">
                    <span>⭐</span>
                    <span>${poet.title}</span>
                </div>
            </div>
        </div>
        <div class="poet-bio">
            <p>${poet.bio}</p>
        </div>
        <div class="poems-section">
            <h3>📖 代表诗作</h3>
            ${poemsHTML}
        </div>
    `;

    panel.classList.remove('hidden');
    setTimeout(() => {
        panel.classList.add('active');
    }, 10);
}

// 关闭详情面板
function closeDetailPanel() {
    const panel = document.getElementById('poet-detail-panel');
    panel.classList.remove('active');
    setTimeout(() => {
        panel.classList.add('hidden');
    }, 300);
}

// 点击面板外部关闭
document.addEventListener('click', (e) => {
    const panel = document.getElementById('poet-detail-panel');
    const content = panel.querySelector('.panel-content');
    
    if (panel.classList.contains('active') && !content.contains(e.target)) {
        closeDetailPanel();
    }
});

// 键盘关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetailPanel();
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
