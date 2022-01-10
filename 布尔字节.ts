namespace 布尔字节 {
    class 缓冲 {
        constructor(字节: number = 0) { // [0, 255]
            this.字节 = 字节
        }

        到头了(): boolean {
            return this.位偏移 === 8
        }

        获取当前并前进(): boolean {
            return Boolean((this.字节 >>> this.位偏移++) & 1)
        }

        设置当前并前进(布尔值: boolean) { // 使用该函数假定初始状态时字节为0
            if (布尔值) this.字节 |= 1 << this.位偏移
            ++this.位偏移
        }

        获取字节() {
            return this.字节
        }

        private 字节: number
        private 位偏移: number = 0
    }

    class 流 {
        constructor(数据: Uint8Array) {
            this.数据 = 数据
            this.缓冲 = new 缓冲(数据[0])
        }

        到头了(): boolean {
            return this.数据偏移 === this.数据.length
        }

        获取当前并前进(): boolean {
            const 布尔值 = this.缓冲.获取当前并前进()
            if (this.缓冲.到头了()) this.缓冲 = new 缓冲(this.数据[++this.数据偏移])
            return 布尔值
        }

        设置当前并前进(布尔值: boolean) { // 使用该函数假定初始状态时数据全为0
            this.缓冲.设置当前并前进(布尔值)
            if (this.缓冲.到头了()) {
                this.数据[this.数据偏移++] = this.缓冲.获取字节()
                this.缓冲 = new 缓冲(0)
            }
        }

        private readonly 数据: Uint8Array
        private 数据偏移: number = 0
        private 缓冲: 缓冲
    }

    class 长度头 {
        constructor(长度: number = 1) { // [1, 16]
            this.字节 = 长度 - 1
        }

        到头了(): boolean {
            return this.位偏移 === 4
        }

        获取当前并前进(): boolean {
            return Boolean((this.字节 >>> this.位偏移++) & 1)
        }

        设置当前并前进(布尔值: boolean) { // 使用该函数假定初始状态时长度为1
            if (布尔值) this.字节 |= 1 << this.位偏移
            ++this.位偏移
        }

        获取长度() {
            return this.字节 + 1
        }

        private 字节: number
        private 位偏移: number = 0
    }

    export class 输入块 {
        constructor(数据: Uint8Array) {
            this.头 = new 长度头(数据.length)
            this.体 = new 流(数据)
        }

        到头了(): boolean {
            return this.体.到头了()
        }

        获取当前并前进(): boolean {
            return this.头.到头了() ? this.体.获取当前并前进() : this.头.获取当前并前进()
        }

        private readonly 头: 长度头
        private readonly 体: 流
    }

    export class 输出块 {
        constructor(缓冲: 字节缓冲) {
            this.缓冲 = 缓冲
        }

        到头了(): boolean {
            return this.体 && this.体.到头了()
        }

        设置当前并前进(布尔值: boolean) {
            if (this.头.到头了()) return this.体.设置当前并前进(布尔值)
            this.头.设置当前并前进(布尔值)
            if (this.头.到头了()) this.体 = new 流(this.缓冲.再来(this.头.获取长度()))
        }

        private readonly 头: 长度头 = new 长度头()
        private 体: 流
        private readonly 缓冲: 字节缓冲
    }
}