class 字节缓冲 {
    constructor() {
        this.数据 = new Uint8Array(16);
        this.长度 = 0;
    }
    再来(多长) {
        while (this.长度 + 多长 > this.数据.length) {
            const 新数据 = new Uint8Array(this.数据.length << 1);
            for (let i = 0; i < this.长度; ++i)
                新数据[i] = this.数据[i];
            this.数据 = 新数据;
        }
        this.长度 += 多长;
        return this.数据.subarray(this.长度 - 多长, this.长度);
    }
    结果() {
        return this.数据.subarray(0, this.长度);
    }
}
//# sourceMappingURL=%E5%AD%97%E8%8A%82%E7%BC%93%E5%86%B2.js.map