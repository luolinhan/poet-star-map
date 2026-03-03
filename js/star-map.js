// 星图渲染模块
class StarMap {
    constructor(canvasId, poets) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.poets = poets;
        this.stars = [];
        this.selectedStar = null;
        this.animationId = null;
        
        this.init();
    }

    init() {
        this.resize();
        this.createStars();
        this.bindEvents();
        this.animate();
        
        window.addEventListener('resize', () => {
            this.resize();
            this.createStars();
        });
    }

    resize() {
        const container = this.canvas.parentElement;
        this.canvas.width = container.clientWidth;
        this.canvas.height = container.clientHeight;
    }

    createStars() {
        this.stars = [];
        const padding = 80;
        const width = this.canvas.width - padding * 2;
        const height = this.canvas.height - padding * 2;

        this.poets.forEach((poet, index) => {
            const angle = (index / this.poets.length) * Math.PI * 2;
            const radius = Math.min(width, height) * 0.35 + Math.random() * Math.min(width, height) * 0.15;
            const x = this.canvas.width / 2 + Math.cos(angle) * radius;
            const y = this.canvas.height / 2 + Math.sin(angle) * radius;
            
            const dynasty = dynastiesData.find(d => d.id === poet.dynasty);
            const color = dynasty ? dynasty.color : '#94a3b8';

            this.stars.push({
                x,
                y,
                radius: 4 + Math.random() * 3,
                color,
                poet,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: 0.02 + Math.random() * 0.02
            });
        });
    }

    bindEvents() {
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.stars.forEach(star => {
                const dx = x - star.x;
                const dy = y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < star.radius + 10) {
                    this.selectStar(star);
                }
            });
        });

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            let hovering = false;
            this.stars.forEach(star => {
                const dx = x - star.x;
                const dy = y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < star.radius + 10) {
                    hovering = true;
                    this.canvas.style.cursor = 'pointer';
                }
            });

            if (!hovering) {
                this.canvas.style.cursor = 'default';
            }
        });
    }

    selectStar(star) {
        this.selectedStar = star;
        showPoetDetail(star.poet);
    }

    drawStars() {
        this.stars.forEach(star => {
            // 闪烁效果
            star.twinkle += star.twinkleSpeed;
            const alpha = 0.5 + Math.sin(star.twinkle) * 0.5;

            // 光晕
            const gradient = this.ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.radius * 4
            );
            gradient.addColorStop(0, star.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
            gradient.addColorStop(1, 'transparent');

            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // 星星核心
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = star.color;
            this.ctx.fill();

            // 诗人名字标签
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            this.ctx.font = '12px "PingFang SC", "Microsoft YaHei", sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(star.poet.name, star.x, star.y + star.radius + 15);
        });
    }

    drawBackground() {
        // 渐变背景
        const gradient = this.ctx.createRadialGradient(
            this.canvas.width / 2, this.canvas.height / 2, 0,
            this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2
        );
        gradient.addColorStop(0, '#1e293b');
        gradient.addColorStop(1, '#0f172a');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 随机小星星背景
        for (let i = 0; i < 200; i++) {
            const x = (Math.sin(i * 123.456) * 0.5 + 0.5) * this.canvas.width;
            const y = (Math.cos(i * 789.012) * 0.5 + 0.5) * this.canvas.height;
            const radius = Math.random() * 1.5;
            const alpha = 0.3 + Math.sin(Date.now() * 0.001 + i) * 0.3;

            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            this.ctx.fill();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.drawStars();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StarMap;
}
