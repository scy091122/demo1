function BallGame() {
    this.actionBtn = document.getElementById('actionBtn');
    this.ball = document.getElementById('ball');
    this.baffle = document.getElementById('baffle');
    this.fraction = document.getElementById('fraction');
    this.infoTime = document.getElementById('playtime');
    this.app = document.getElementById('app');
    this.appHeight = app.offsetHeight;
    this.appWidth = app.offsetWidth;
    this.horizontalSpeed = Math.floor((Math.random()) * 10 + 10);
    this.verticalSpeed = Math.floor((Math.random()) * 10 + 10);
    this.result = document.getElementById('result');
    this.gameInformation = document.getElementById('gameInformation');
    this.actionTime = (new Date()).getTime();

    this.init = function() {
        this.actionBtn.addEventListener('click', () => {
            this.actionBtn.style.display = 'none';
            this.ball.classList.remove('ball-before-move');
            this.gameInformation.style.display = 'block';
            this.userControl();
            this.ballMove();
        }, false);
    };

    // 键盘按下事件绑定
    this.userControl = () => {
        window.onkeydown = (event) => {
            if (event.keyCode == 37) {
                this.goLeft();
            } else if (event.keyCode == 39) {
                this.goRight();
            }
        }
    };

    // 滑块向左
    this.goLeft = function() {
        if (this.baffle.offsetLeft - 100 >= 0) {
            this.baffle.style.left = this.baffle.offsetLeft - 100 + 'px';
        } else {
            this.baffle.style.left = 0;
        }
    };

    // 滑块向右
    this.goRight = function() {
        if (this.baffle.offsetLeft + this.baffle.offsetWidth + 100 <= this.appWidth) {
            this.baffle.style.left = this.baffle.offsetLeft + 100 + 'px';
        } else {
            this.baffle.style.left = this.appWidth - this.baffle.offsetWidth + 'px';
        }
    };

    // 球的运动
    this.ballMove = function() {
        this.timer = setInterval(() => {
            this.boundaryJudge();
            this.setBallPosition();
            this.infoTime.innerText = this.timing();
        }, 15);
    };

    // 球运动到盒子边缘判断以及是否与滑块碰撞
    this.boundaryJudge = function() {
        this.runToTop();
        this.runToBottom();
        this.runToLeft();
        this.runToRight();
        this.judgeCollision();
    };

    // 运动到盒子顶部
    this.runToTop = function() {
        if (this.ball.offsetTop + this.verticalSpeed < 0) {
            this.verticalSpeed = -this.verticalSpeed;
        }
    };

    // 运动到盒子底部
    this.runToBottom = function() {
        if (this.ball.offsetTop + this.ball.offsetHeight + this.verticalSpeed > this.appHeight) {
            this.verticalSpeed = -this.verticalSpeed;
            this.subFraction();
        }
    };

    // 运动到盒子左边缘
    this.runToLeft = function() {
        if (this.ball.offsetLeft + this.horizontalSpeed < 0) {
            this.horizontalSpeed = -this.horizontalSpeed;
        }
    };

    // 运动到盒子右边缘
    this.runToRight = function() {
        if (this.ball.offsetLeft + this.ball.offsetWidth + this.horizontalSpeed > this.appWidth) {
            this.horizontalSpeed = -this.horizontalSpeed;
        }
    };


    //  设置球运动后的位置
    this.setBallPosition = function() {
        this.ball.style.top = this.ball.offsetTop + this.verticalSpeed + 'px';
        this.ball.style.left = this.ball.offsetLeft + this.horizontalSpeed + 'px';
    };


    // 判断小球是否与滑块碰撞
    this.judgeCollision = function() {
        if (this.ball.offsetLeft + this.ball.offsetWidth > this.baffle.offsetLeft && this.ball.offsetLeft < this.baffle.offsetLeft + this.baffle.offsetWidth &&
            this.ball.offsetTop + this.ball.offsetHeight > this.baffle.offsetTop - 20 && this.ball.offsetTop + this.ball.offsetHeight < this.baffle.offsetTop && this.verticalSpeed > 0) {
            this.verticalSpeed = -this.verticalSpeed;
            this.addFraction();
        }
    };

    // 减分
    this.subFraction = function() {
        this.fraction.innerText = +this.fraction.innerText - 10;
        if (this.fraction.innerText <= 0) {
            this.gameOver();
        }
    };

    // 加分
    this.addFraction = function() {
        this.fraction.innerText = +this.fraction.innerText + 10;
    };


    // 计时
    this.timing = function() {
        var d = new Date();
        return d.getTime() - this.actionTime;
    };

    // 游戏结束
    this.gameOver = function() {
        this.result.innerHTML = `
            <div>你坚持了：${this.infoTime.innerText} ms</div>
        `;
        this.gameInformation.style.display = 'none';
        result.style.display = 'flex';
        clearInterval(this.timer);
    };

};



(() => {
    let game = new BallGame();
    game.init();
})();