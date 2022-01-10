var 布尔字节;
(function (布尔字节) {
    class 缓冲 {
        constructor(字节 = 0) {
            this.位偏移 = 0;
            this.字节 = 字节;
        }
        到头了() {
            return this.位偏移 === 8;
        }
        获取当前并前进() {
            return Boolean((this.字节 >>> this.位偏移++) & 1);
        }
        设置当前并前进(布尔值) {
            if (布尔值)
                this.字节 |= 1 << this.位偏移;
            ++this.位偏移;
        }
        获取字节() {
            return this.字节;
        }
    }
    class 流 {
        constructor(数据) {
            this.数据偏移 = 0;
            this.数据 = 数据;
            this.缓冲 = new 缓冲(数据[0]);
        }
        到头了() {
            return this.数据偏移 === this.数据.length;
        }
        获取当前并前进() {
            const 布尔值 = this.缓冲.获取当前并前进();
            if (this.缓冲.到头了())
                this.缓冲 = new 缓冲(this.数据[++this.数据偏移]);
            return 布尔值;
        }
        设置当前并前进(布尔值) {
            this.缓冲.设置当前并前进(布尔值);
            if (this.缓冲.到头了()) {
                this.数据[this.数据偏移++] = this.缓冲.获取字节();
                this.缓冲 = new 缓冲(0);
            }
        }
    }
    class 长度头 {
        constructor(长度 = 1) {
            this.位偏移 = 0;
            this.字节 = 长度 - 1;
        }
        到头了() {
            return this.位偏移 === 4;
        }
        获取当前并前进() {
            return Boolean((this.字节 >>> this.位偏移++) & 1);
        }
        设置当前并前进(布尔值) {
            if (布尔值)
                this.字节 |= 1 << this.位偏移;
            ++this.位偏移;
        }
        获取长度() {
            return this.字节 + 1;
        }
    }
    class 输入块 {
        constructor(数据) {
            this.头 = new 长度头(数据.length);
            this.体 = new 流(数据);
        }
        到头了() {
            return this.体.到头了();
        }
        获取当前并前进() {
            return this.头.到头了() ? this.体.获取当前并前进() : this.头.获取当前并前进();
        }
    }
    布尔字节.输入块 = 输入块;
    class 输出块 {
        constructor(缓冲) {
            this.头 = new 长度头();
            this.缓冲 = 缓冲;
        }
        到头了() {
            return this.体 && this.体.到头了();
        }
        设置当前并前进(布尔值) {
            if (this.头.到头了())
                return this.体.设置当前并前进(布尔值);
            this.头.设置当前并前进(布尔值);
            if (this.头.到头了())
                this.体 = new 流(this.缓冲.再来(this.头.获取长度()));
        }
    }
    布尔字节.输出块 = 输出块;
})(布尔字节 || (布尔字节 = {}));
//# sourceMappingURL=%E5%B8%83%E5%B0%94%E5%AD%97%E8%8A%82.js.map